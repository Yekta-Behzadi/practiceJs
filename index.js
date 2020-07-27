
// for (let i = 0; i < 100; i++) {
  
//   console.log(i)

// }
// for(let i = 100; i>0; i--){
//   console.log(i)
// }

// let i = 100;
// while (i>0) {
//   console.log(i)
//   i--
// }

// while (true) {
//   if(i == 0){
//     break;
//   }
//   console.log(i);
//   i--;
// }

// do{
//   console.log('yekta')
// }while (false) 



// function sum(arr) {
//   let total=0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
  
    
//   }
//   return total;
// }

// console.log(sum(array));
   


// function sum(array){
// let total= 0;
// let i=0;
// while (i<array.length) {
  
//   total= total+array[i];
//   i++
// }
// return total;
// }

// console.log(sum(array));
// function sum(array){
//   let total=0;
//   array.forEach(item => {
//     total += item;
//   }
//   );
//   return total

// }
// console.log(sum(list));

// function sum(numbers){
//   return numbers.reduce(function(total,value){
//     console.log(total,value);
//      return total + value;
//    },10);
//   //  return tot;
// }

// console.log(sum(list));
// let list=[1,2,3,4,5,'new']
// console.log(list.indexOf(4));
// console.log(list[list.indexOf('new')]);

// function sum(numbers){
//   let tot =numbers.reduce(function(total,value){
//     console.log(total,value);
//      return total + value;
//    },5)
//    return tot;
//  }
  
//  console.log(sum(list));

// list.push(7)
// list.pop()
// list.pop()
// list.pop()
//  console.log(list.push(7))
//  console.log(list.push(8))
//  console.log(list.push(9))
//  console.log(list.pop(9))

// console.log(list.shift())
// console.log(list.shift())
// console.log(list.shift())

// list.unshift(7)
// let list=[1,2,3,4,5,'new',8]
// lisst.splice(1,14);
// console.log(lisst[lisst.splice(2,2)])
// console.log(lisst.splice(2,18))
// let list=['item',5,6,7,8,9,56]
// console.log(list.slice(3,5))
// let list=[8,5,6,7]

// console.log(list.join('-'))
// let list2= [1,2,3,4]
// let list2= [2,4,3,1]

// newList=list.concat(list2);
// // newList.sort(function(a,b) {return b-a});
// // console.log(newList[0]);
// newList.sort(function(a,b) {return a-b})
// // console.log(newList);
// newList.reverse();
// console.log(newList)
// let filterList = newList.filter(function (item) {
//   return item % 2 == 0 //0
// })
// console.log(filterList);

// let list3=filterList.map(function(item) {
//   return item * 2
// })
// console.log(list3)

// let arayeh=[1,2,5,4,3,6,7,8,10,9,11,12,14,13,16,15,18,20];
// function iterate(number) {
//   let total=[];
//   for(let i=0; i<number.length; i++){
//     total.push(number[i])
//     console.log('the number :' + total )
//   }
// }
// console.log(iterate(arayeh));



// function list (item) {
//   let sum=[];
//   for(let i=0;i<item.length;i++){
    
//     if( item[i] % 2 ===0 ){
//       sum.push(item[i])  
//       }
//   }
//   return 'numbers :'+' '+ sum
// }

// console.log(list(arayeh));

// function forevenNumber(num){
//   evenNumber=[];
// num.forEach(number => {
//   if(number % 2 === 0){
//     evenNumber.push(number)
//   }
// });
// return evenNumber;
// }
// console.log(forevenNumber(arayeh));

// function mapEven(number) {
//   let evenNumber= number.map(num=>{ 
//      // return num % 2 === 0 ? num : null
//      if(num%2===0){
//        return num
//      }
     
//    })
//      return evenNumber;
 
//  }
 
//  console.log(mapEven(arayeh));


// let car={
//   brand:'Ford',
//   model:2007,
//   datails:{
//     color:['red','blue','green','black'],
//     wheels:4
//   },
//   run: function(){
//     console.log('speed up to 220')
//   },

// summary: function(){
//   console.log('car dtails : ' + this.model + ' '+this.brand) 
// }

// }

//  for (x in car){
//   if( typeof car[x] === 'function'){
//     car[x]();
//     continue
//   }

//    console.log(x + ' ' + car[x])

//  }
 
// console.log(car.summary())


// let car2= new Object();
// car2.name = 'ford';
// console.log(car2)

// arayeh.forEach(function(item,index){
//   console.log(`${index} is for number : ${item}`)
// } )

// Object.prototype.sum= function(){
//   return 'sum + 1'
// }
// function Car(model,brand){
// this.brand=brand,
// this.model=model,

  
//  this.run= function(){
//    return 'speed up to 220'
//   },

// this.summary= function(){
//   return 'car dtails : ' + this.model + ' '+this.brand
// }
// }
// let car4=new Car('benz','1990');
// let car5=new Car('bmw','2006');
// // car4.model='Pejoute';
// console.log(car5 instanceof Object);
// ;
//  Car.prototype.run= function(){
//    return 'run'
//  }
//  Car.prototype.hasan= function(){
//   return 'hasan'
// }
// function person(name) {
//   this.name= name;
// }
// let firstPerson= new person('yekta');

// let car6= Object.create(null);
// // sakhtan objecti az car5 yani tamame khososiat car5 ro dashte bashe + bject jadid k color hast.+ yek function jadid

// let newCar=Object.create(car5);
// car5.color='red';
// newCar.makeSmile=function(){
//   console.log(':)')
// }

// let car7=Object.create(newCar);
// car7.brand=1980;
// car7.color='khaki';

let bic={
  color:'red',
  model:1980
}

function prop(year,name){
  console.log(year,name)

return 'this bicycle has the color of '+this.color+' from model '+this.model
}
// prop(1990); //DG AZ APPLY NMISHE ESTEFADE KARD, RAHESH:
console.log(prop.apply(bic,[1990,'ALI']))
