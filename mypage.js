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
let person= new Person(); 

let arguments=[1,2,3,4]
// function sum(a,b) {
//   console.log(arguments[1])
// }
// console.log(sum(1,2))
let sum=(a,b)=> console.log(arguments);

console.log(sum(1,2))