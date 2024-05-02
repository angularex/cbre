class Person{
    canwalk;
    constructor(cw:string){
        this.canwalk = cw;
    }
}
class Hero extends Person{
    // properties
    static version = 1001;
    firstname = "default";
    lastname = "default";
    age = 0;
    #power = 0
    constructor(fname:string, lname:string, hcw:string){
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
let hero1 = new Hero("Tony","Stark","I Can Fly");
console.log(hero1.firstname, hero1.lastname);// 
console.log(hero1.fullname());// 
// setter
hero1.power = 6;
// getter
console.log(hero1.power);// 
console.log(hero1.canwalk);// 
console.log(Hero.version)
