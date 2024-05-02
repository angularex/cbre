let AddPower = function(npower:number){
    return function(TargetClass:any){
        let tc = new TargetClass()
        return class {
            title = tc.title;
            power =  npower
        }
    }
};

@AddPower(6)
class Commonman{
    title = "Batman";
};

/*  
let heroInMaking = addPower(6);
console.log(heroInMaking(commonman)); 
*/
/* 
Commonman = addPower(6)(Commonman);
let cm = new Commonman();
console.log(cm.title, cm.power); 
*/

