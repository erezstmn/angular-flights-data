import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { AppRoutingModule } from './app-routing.module';
import { FlightsComponent } from './flights/flights.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { AddFlightComponent } from './flights/add-flight/add-flight.component';
import { FlightsService } from './flights/flights.service';
import { FlightItemComponent } from './flights/flight-item/flight-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    WelcomeScreenComponent,
    FlightsComponent,
    SearchFlightsComponent,
    AddFlightComponent,
    FlightItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    ],
  providers: [FlightsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
