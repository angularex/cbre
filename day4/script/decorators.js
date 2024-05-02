"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let AddPower = function (npower) {
    return function (TargetClass) {
        let tc = new TargetClass();
        return class {
            constructor() {
                this.title = tc.title;
                this.power = npower;
            }
        };
    };
};
let Commonman = class Commonman {
    constructor() {
        this.title = "Batman";
    }
};
Commonman = __decorate([
    AddPower(6)
], Commonman);
;
/*
let heroInMaking = addPower(6);
console.log(heroInMaking(commonman));
*/
/*
Commonman = addPower(6)(Commonman);
let cm = new Commonman();
console.log(cm.title, cm.power);
*/
