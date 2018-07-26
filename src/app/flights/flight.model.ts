export class Flight{
    number: string;
    airline: string;
    origin: string;
    destination: string;           
    
    constructor(number: string, airline: string, origin: string, destination: string ){
        this.number = number;
        this.airline = airline;
        this.origin = origin;
        this.destination = destination;
    }
}