export class Astronaut implements Payload{
    
    // properties and methods
    massKg: number;
    name: string;
        
        constructor(massKg: number, name: string) {
            this.massKg = 200;
            this.name = "James";
         }
    
     }
     interface Payload {
        massKg: number;
        name: string;
    } 


 