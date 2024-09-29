class Complex{
    constructor(real,img){
        this._real=real;
        this._img=img;
    }
    set real(newreal){
        this._real=newreal;
    }
    set img(newimg){
        this._img=newimg;
       }
       get real(){
        return this._real;
       }
       get img(){
        return this._img;
       }
}
let a=new Complex(3,4)
a.real=5;
a.img=7;
console.log(a.real+"+"+a.img+"i");