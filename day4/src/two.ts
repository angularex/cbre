// optional parameters
let adder = function(num1:number, num2:number, num3?:number):number{
    if(num3){
        return num1 + num2 + num3;
    }else{
        return num1 + num2;
    }
};

console.log(adder(5,6,7));
console.log(adder(5,6));


let myfun = function(num1:number, num2:number, num3?:number):void{
    if(num3){
        console.log(num1 + num2 + num3);
    }else{
        console.log(num1 + num2);
    }
}