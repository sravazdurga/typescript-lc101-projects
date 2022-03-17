"use strict";
exports.__esModule = true;
exports.rocket = void 0;
var rocket = /** @class */ (function () {
    function rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    rocket.prototype.sumMass = function (items) {
        var myTotalMass = 0;
        for (var i = 0; i < items.length; i++) {
            myTotalMass += items[i].massKg;
        }
        return myTotalMass;
    };
    rocket.prototype.currentMassKg = function () {
        var cargoMassTotal = this.sumMass(this.cargoItems);
        var astronautMassTotal = this.sumMass(this.astronauts);
        var massTotal = cargoMassTotal + astronautMassTotal;
        return massTotal;
    };
    rocket.prototype.canAdd = function (items) {
        return this.currentMassKg() + items.massKg <= this.totalCapacityKg;
    };
    rocket.prototype.addCargo = function (cargo) {
        var itCanAddIt = this.canAdd(cargo);
        if (itCanAddIt) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    rocket.prototype.addAstronut = function (astronaut) {
        var itCanAddIt = this.canAdd(astronaut);
        if (itCanAddIt) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return rocket;
}());
exports.rocket = rocket;
