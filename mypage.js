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
