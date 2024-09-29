class Complex{
    constructor(real,img){
        this.real=real;
        this.img=img;
    }
    display(){
        console.log(`This complex number is : ${this.real}+${this.img}i`);
    }
    add(num){
        this.real=this.real+num.real;
        this.img=this.img+num.img;
    }
}
let a=new Complex(2,5);
let b=new Complex(3,5);
a.display();
a.add(b);
a.display();

