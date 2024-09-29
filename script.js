//prototype
/*let a={
    name:"nitish",
    language:"bengali",
}
console.log(a);
let p={
    run:()=>{
        alert("run")
    }
}
a.__proto__=p;
a.run();*/
//class and objects and constrctor
/*class Trainform{
    constructor(name,trainno){
        console.log("Constructor is called....")
        this.name=name;
        this.trainno=trainno
    }
    submit(){
        alert(this.name+" : This for is submitted : "+this.trainno)
    }
    cancel(){
        alert(this.name + " : This for is canceled : "+this.trainno)
    }
    /*fill(name,trainno){
        this.name=name;
        this.trainno=trainno;
    }*/
/*}
Nitish1=new Trainform("Nitish",12323);
//Nitish1.fill("Nitish",12323);
Nitish2=new Trainform("Nitish",22348);
///Nitish2.fill("Nitish",22348);
Raj=new Trainform("Raj",12346);
//Raj.fill("Raj",12346);
Nitish1.submit();
Nitish2.submit();
Raj.submit();
Nitish1.cancel();*/
//Constructor example-2
/*class Trainform{
    constructor(name,trainno,address){
        console.log("Constructor is called....")
        this.name=name;
        this.trainno=trainno
        this.address=address
    }
    submit(){
        alert(this.name+" : This for is submitted : "+this.trainno)
    }
    cancel(){
        alert(this.name + " : This for is canceled : "+this.trainno)
        this.trainno=0;
    }
    preview(){
        alert(this.name +" : this form is for : "+this.trainno+" : address : "+this.address);
    }
}
let Nitish=new Trainform("Nitish",22348,"Hoogly west-Bengal,712706 india")
Nitish.preview();
Nitish.submit();
Nitish.cancel();
Nitish.preview();*/
//Inheritance
/*class Animal{
    constructor(name,color){
        this.name=name
        this.color=color
    }
    run(){
        console.log(`${this.name} can run`)
    }
}
class Monkey extends Animal{
    eatBanana(){
        console.log(`${this.name} eat banana`)
    }
    hide(){
        console.log(`${this.name} can hide`)
    }
}
let ani=new Animal("Chimpu","white");
let mni=new Monkey("monu","ashe");
ani.run();
mni.run();
mni.eatBanana();
mni.hide();*/
//Method overridding and Super keyword
/*class Employee{
    loggin(){
        console.log(`The employee has logged in ! `)
    }
    loggout(){
        console.log(`This employee has logged out ! `)
    }
    leaverequest(leave){
        console.log(`The employee grant ${leave} leaves`)
    }
}
class Programmer extends Employee{
    coffeerequest(coffee){
        console.log(`The employee grant ${coffee} coffee request`)
    }
    //method overridding
    //leaverequest(leave){
     //   console.log(`The employee granted ${leave+1} leaves(one extra)`)
   // }
   //super keyword
   leaverequest(leave){
    super.leaverequest(4)
    console.log("One extra leave granted!")
   }
}
let e=new Programmer();
e.leaverequest(3);*/
//static method
/*class Animal{
    constructor(name){
        this.name=Animal.capital(name);
    }
    legs(){
        alert(this.name + " has 4 legs ")
    }
    static capital(name){
        return name.charAt(0).toUpperCase()+name.substr(1,name.length)
    }
}
let ani=new Animal("jack");
ani.legs()*/
// getters setters instanceof
class Animal{
    constructor(name){
        this._name=name
    }
    fly(){
        console.log("can fly");
    }
    get name(){
        return this._name;
    }
    set name(newname){
        this._name=newname;
    }
}
let a=new Animal("jack");
a.fly();
console.log(a.name);
a.name="jimmy";
console.log(a.name);
let c=66;
console.log(a instanceof Animal);
console.log(c instanceof Animal);

