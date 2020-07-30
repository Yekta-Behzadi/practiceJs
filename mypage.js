function first(a,b){
  return (a + b)
}
console.log(first(5,6));


let second= function(a,b){
  return a+b
}
console.log(second(7,7))



let third=(a,b)=>{
return a+b
} 
console.log(third(8,8))



let forth=(a,b)=>a+b;
console.log(forth(9,9))



let fifth=(a,b)=>{
  return{ a:a, b:b}
}
console.log(fifth(6,7));




let sixth=(a,b)=>({ a:a, b:b});
console.log(sixth(1,2))

let seventh=(a,b)=>({ a:a, b:b});
seventh=(a,b)=>({ a,b});
console.log(seventh(3,4));

let array=[1,2,3,4,5]

console.log (array.map(function(item) {
  return item *2
}));

console.log(array.map( item=> item*2 ))

function Person() {
  this.age=0;
  setInterval(()=>{
  
    // console.log(this.age++)
  }, 1000);
  
}
// let person= new Person(); 

// let arguments=[1,2,3,4]
// // function sum(a,b) {
// //   console.log(arguments[1])
// // }
// // console.log(sum(1,2))
// let sum=(a,b)=> console.log(arguments);

// console.log(sum(1,2))
function Sum(params) {
  
}

// let Sum=()=>{

// }
// console.log(new Sum)


// let obj={
//   a:10,
//   sum1:function() {
//     console.log(this.a, this)
//   },
//   sum2:()=>{
//     console.log(this.a, this)
//   }
// }
// obj.sum1()
// obj.sum2();

function total(a=2,b=3){
  console.log(a,b);
console.log(a*b);
}
total()
total(6,5)
total(3)

function args(a,b,...args){
console.log(a,b,args);
return args.reduce((pre,current)=>{
  return pre+current
})
}
console.log(args(1,2,3,4,56))
let list=[1,2,3,4,5,6]
let list2=[5,6,7,8] 
function sum(a,b,c){
  console.log(a+b+c)
}
// sum(list[0],list[1],list[2],list[3])
console.log(...list)
console.log([...list,22,...list2])

function sum1(a,b,c,...x){
  console.log(x)
  console.log(a+b+c)
}
sum1(...list)

let name= 'yekta';
let numbers=[1,2,3,4,56,]

for(let item of name){
  console.log(item)
}
for(let item of numbers){
  console.log(item)
}
let list3=[1,2,3,4,5,6]
let [,firstitem,,seconditem]= list3;

console.log(firstitem,seconditem)

// let[a,b]=[4,8];
// console.log(a,b)
let [c=1,d=1]=[4]
console.log(c,d)

function foo() {
  return [11,22,33,'false',44,'ali']
}
let [e=1,,f=1,...g]=foo()
console.log(e,f,g)

let object={
  name:'yekta',
  fun:()=>{
    return 'hello yekta'
  }
}
let{name:esm,age=18,fun}=object
console.log(esm,age,fun())



let obj = {
  name : "Eliyas Nazemi",
  work : "Web Developer",
  age : () => "21"
}
// let {name , work , age} = obj;
// console.log(`hello ${name} your work is ${name} and your age ${age()}`);

// function Car(brand,model,year) {
//   this.brand=brand;
//   this.model=model;
//   this.year=year;
//   this.run=()=>{
//     return 'speed up to 200'
//   }
// }
// console.log(Car.prototype)
// let firstcar= new Car('volvo','x3',2002)
// console.log(firstcar)

class Car{
  constructor(brand,model,year){
    this.brand=brand;
    this.model=model;
    this.year=year;
   
  }
  run(){
    return 'speed up to 200'
  }
}
let firstcar= new Car('volvo','x3',2002)
console.log(firstcar)
console.log(firstcar.__proto__===Car.prototype);

// class Irankhodro extends Car{
//   constructor(brand,model,year,color){
//     super(brand,model,year);
//     this.color=color
//   }
//   por(){
// return this.run();
//   }
//   run(){
//   //  console.log(super.run())
//    console.log(super.run());
//  return 'speed up to 40';
//   }
//   fly(){
//     return 'this car can make you fly'
//   }
//   go(){
//   return 'have a go at driving this car'
//   }
// }
// let mycar= new Irankhodro('Irankhodro','pride',2018,'black')
// console.log(mycar.por())
class Irankhodro extends Car{
  constructor(brand,model,year,color){
    super(brand,model,year);
    this.color=color
  }
 static por(){
return this.run();
  }
   static run(){
  //  console.log(super.run());
 return 'speed up to 40';
  }
  fly(){
    return 'this car can make you fly'
  }
  go(){
  return 'have a go at driving this car'
  }
}
let mycar= new Irankhodro('Irankhodro','pride',2018,'black')
// console.log(mycar.run())
console.log(Irankhodro.run())
// console.log(mycar.por())
// console.log(Irankhodro.por())

// toseeye object Array

class advanceArray extends Array{
 find(value){
let final= this.filter(item=> item===value);
return final.length === 0 ? 'error' : final[0]
 }
}

let list4=new advanceArray('yekta','mehrnaz','hasan');
console.log(list4);  //objecte khali neshon mide
console.log(list4.find('mehrnaz'));


// SETTER GETTER

class Foo{
  constructor(){
    this.log=[]
  }
set current(value){
this.log.push(value)
}

}
let bar=new Foo();
bar.current='a';
console.log(bar.log)