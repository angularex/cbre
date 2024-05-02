class Person{
    canwalk;
    constructor(cw){
        this.canwalk = cw;
    }
}
class Avenger{
    story;
    constructor(nstory){
        this.story = nstory;
    }
}
// default export
// export default Person;

// named export 
// export {Avenger}

// export {Avenger, Person}

// named export with alias
export {Person as Pson}
