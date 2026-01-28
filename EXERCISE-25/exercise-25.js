



// CSS FOR STYLING ONLY
let css1 = `font-size:1rem ; color:blue ; font-weight:bold; padding:0.5rem 1rem; background:yellow`
let red = `background:blue; color:#fff ; padding:0.5rem 1rem;`
let green = `background:green; color:#fff`


// EXERCISE 25 SPREAD AND REST PAREMETERS 
console.log(`%cEXERCISE 25 SPREAD AND REST PAREMETERS `, css1)
// ..........................................

console.log('%c [1] use the spread ooperator to combine two arrays [1,2,3] and [4,5,6]    [2]. Create a function MULTIPLY. that takes any number of arguments and returns their product using Rest parameter ', red);

// part one: SPREAD OPERATOR
let arr1=[1,2,3];
let arr2=[...arr1,4,5,6];

  console.log(arr2);
  
// part two: REST PARAMETER
function taran(...tiro){
    return tiro.reduce((total,num)=>total*num ,1);
}
console.log(taran(2,3,4));









































