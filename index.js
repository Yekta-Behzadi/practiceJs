
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

let arayeh=[1,2,5,4,3,6,7,8,10,9,11,12,14,13,16,15,18,20];

function list (item) {
  let sum=[];
  for(let i=0;i<item.length;i++){
    
    if( item[i] % 2 ===0 ){
      sum.push(item[i])  
      }
  }
  return 'numbers :'+' '+ sum
}

console.log(list(arayeh));

function forevenNumber(num){
  evenNumber=[];
num.forEach(number => {
  if(number % 2 === 0){
    evenNumber.push(number)
  }
});
return evenNumber;
}
console.log(forevenNumber(arayeh));


function mapEven(number) {
 let evenNumber= number.map(num=>{ 
    // return num % 2 === 0 ? num : null
    if(num%2===0){
      return num
    }else{
      return [];
    }
    
  })
  return evenNumber;

}

console.log(mapEven(arayeh));

// console.log(car.summary())




// arayeh.forEach(function(item,index){
//   console.log(`${index} is for number : ${item}`)
// } )