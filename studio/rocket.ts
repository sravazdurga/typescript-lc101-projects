import { Astronaut } from "./astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";
export class rocket {
    // properties and methods
        name: string;
        totalCapacityKg: number;
        cargoItems: Cargo[] = [];
        astronauts: Astronaut[]= [];

        constructor( name: string, totalCapacityKg: number ) {
            
            this.name = name;
            this.totalCapacityKg = totalCapacityKg; 
            
         }
        
         sumMass( items: Payload[] ): number {
             let myTotalMass = 0;
             for(let i=0; i < items.length; i++){
                myTotalMass += items[i].massKg;
             }
             return  myTotalMass;

         }

         currentMassKg(): number{
            let cargoMassTotal = this.sumMass(this.cargoItems);
            let astronautMassTotal = this.sumMass(this.astronauts);
            let massTotal = cargoMassTotal + astronautMassTotal;
            return massTotal;

         }

         canAdd (items: Payload): boolean{
             return this.currentMassKg() + items.massKg <= this.totalCapacityKg;
         }

         addCargo(cargo :Cargo ): boolean {
             let itCanAddIt = this.canAdd(cargo);
             if(itCanAddIt){
                 this.cargoItems.push(cargo);
                 return true;
             }else {
                 return false;
             }
         }

         addAstronut(astronaut : Astronaut): boolean{
            let itCanAddIt = this.canAdd(astronaut);
            if(itCanAddIt){
                this.astronauts.push(astronaut);
                return true;
            }else {
                return false;
            }
         }

 }