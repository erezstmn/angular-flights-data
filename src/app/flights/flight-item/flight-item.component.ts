import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../flight.model';

@Component({
  selector: 'app-flight-item',
  templateUrl: './flight-item.component.html',
  styleUrls: ['./flight-item.component.css']
})
export class FlightItemComponent implements OnInit {
  @Input() flight: Flight;
  constructor() { }

  ngOnInit() {
  }

}
