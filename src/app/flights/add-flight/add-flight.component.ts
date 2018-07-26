import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { ValueTransformer } from '../../../../node_modules/@angular/compiler/src/util';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
  
  constructor(private flightsService: FlightsService) { }

  ngOnInit() {
    
  }
  onSubmit(form: NgForm){
    this.flightsService.addFlight(form.value.number, form.value.airline, form.value.origin, form.value.destination);
    form.reset();
  }
}
