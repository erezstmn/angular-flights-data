import { Injectable } from '@angular/core';
import { Flight } from './flight.model';
import { Subject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  flightsChanged: Subject<Flight[]> = new Subject<Flight[]>();
  flights: Flight[]=[new Flight('LY001','LY','TLV','JFK')];
  constructor() { }

  
  
  addFlight(number: string, airline: string, origin: string, destination: string){
    this.flights.push(new Flight(number, airline, origin, destination));
    this.flightsChanged.next(this.flights.slice());
  }
  removeFlight(index: number){
    this.flights.splice(index,1);
    this.flightsChanged.next(this.flights.slice());
  }
}
