let a={
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
a.run();