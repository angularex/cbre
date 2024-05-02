import {Pson} from "./person.js";

class Hero extends Pson{
    // properties
    static version = 1001;
    firstname = "default";
    lastname = "default";
    age = 0;
    #power = 0
    constructor(fname, lname, hcw){
        super(hcw);
        this.firstname = fname;
        this.lastname = lname;
    };
    // methods
    fullname(){
        return this.firstname+" "+this.lastname;
    }
    #setage(){
        this.age = 25;
    }
    get power(){
        return this.#power;
    }
    set power(npower){
        this.#power = npower;
    }
}

export {Hero}