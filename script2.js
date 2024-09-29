class Human{
    constructor(name,fevfood){
        this.name=name;
        this.fevfood=fevfood;
    }
    walk(){
        console.log(`${this.name} : Human is walking`);
    }
}
class Student extends Human{
    walk(){
        console.log(`${this.name} : Student is walking`);
    }
}
let a=new Student("Nitish","Chicken");
a.walk();
console.log(a instanceof Human);