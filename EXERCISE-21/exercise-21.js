



// CSS FOR STYLING ONLY
let css1 = `font-size:1rem ; color:blue ; font-weight:bold; padding:0.5rem 1rem; background:yellow`
let red = `background:blue; color:#fff ; padding:0.5rem 1rem;`
let green = `background:green; color:#fff`


// EXERCISE 21 MAP AND REDUCE  METHODS
console.log(`%cEXERCISE 21 REDUCE METHOD `, css1)
// ..........................................

console.log('%cuse reduce () method to multiply all the numbers in the arrat [1,2,3,4]', red);


let numbers=[1,2,3,4]
let taranta=numbers.reduce((taran,num)=>{
      return taran*num
},1)

console.log(`Taranta tirooyinka 1,2,3,4 waa ${taranta}`);














































// FILTER AND REDUCE METHODS
/*
let numbers=[1,2,3,4,5,6]
let rate=numbers.filter((num)=>{
      return num>4
})

console.log(rate);
let scores=[50,60,70,90]
let score=scores.filter((num)=>{
      return num>60
})

console.log(score);

let numbers=[1,2,3,4,5,6]
let sum=numbers.reduce((total,num)=>{
      return total+num
},0)

console.log(sum);

*/


