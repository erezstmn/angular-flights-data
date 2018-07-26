import { NgModule, Component } from "../../node_modules/@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { WelcomeScreenComponent } from "./welcome-screen/welcome-screen.component";
import { AboutComponent } from "./about/about.component";
import { FlightsComponent } from "./flights/flights.component";
import { SearchFlightsComponent } from "./search-flights/search-flights.component";

const appRoutes: Routes = [
    {path:'',component: WelcomeScreenComponent},
    {path:'about', component:AboutComponent},
    {path:'flights',component:FlightsComponent},
    {path:'searchflights', component:SearchFlightsComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}