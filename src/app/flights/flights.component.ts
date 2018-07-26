import { Component, OnInit, OnDestroy } from '@angular/core';
import { Flight } from './flight.model';
import { Subscription } from '../../../node_modules/rxjs';
import { FlightsService } from './flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit, OnDestroy {
  flights: Flight[];
  subscription: Subscription;

  constructor(private flightService:FlightsService) { }

  ngOnInit() {
    this.flights = this.flightService.flights;
    this.subscription = this.flightService.flightsChanged
      .subscribe(
        (flights: Flight[]) =>{
          this.flights = flights;
        }
      )
  }
  onDelete(index: number){
    this.flightService.removeFlight(index);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
