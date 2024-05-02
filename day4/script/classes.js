"use strict";
var _Hero_instances, _Hero_setage;
class Person {
    constructor(canwalk) {
        this.canwalk = canwalk;
        this.createDate = new Date();
        // empty
    }
}
class Hero extends Person {
    constructor(firstname, lastname, hcw) {
        super(hcw);
        _Hero_instances.add(this);
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = 0;
        this.power = 0;
    }
    ;
    // methods
    fullname() {
        return this.firstname + " " + this.lastname;
    }
    getpower() {
        return this.power;
    }
    setpower(npower) {
        this.power = npower;
    }
}
_Hero_instances = new WeakSet(), _Hero_setage = function _Hero_setage() {
    this.age = 25;
};
// properties
Hero.version = 1001;
