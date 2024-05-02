
interface IPerson{
    canwalk:string;
    createDate:Date;
}

interface IHero{
    firstname:string;
    lastname:string;
    age:number;
    fullname():string;
    getpower():number;
    setpower(npower:number):void;
}

class Person implements IPerson{
    createDate: Date = new Date();
    constructor(public canwalk:string){
        // empty
    }
}
class Hero extends Person implements IHero{
    // properties
    static version:number = 1001;
    age:number = 0;
    private power:number = 0
    constructor(public firstname:string, public lastname:string, hcw:string){
        super(hcw);
    };
    // methods
    fullname():string{
        return this.firstname+" "+this.lastname;
    }
    #setage(){
        this.age = 25;
    }
    getpower():number{
        return this.power;
    }
    setpower(npower:number):void{
        this.power = npower;
    }
}