
// CSS FOR STYLING ONLY
let css1 = `font-size:1rem ; color:blue ; font-weight:bold; padding:0.5rem 1rem; background:yellow`
let css2 = "background:green; color:#fff"


// EXERCISE 04 Declaration and Expression functions
console.log(`%cEXERCISE 04 FUNCTIONS Declaration and Expression`, css1)

console.log(`%c1* fuction Declaration`,css2)
function add(num1,num2){
    return num1+num2;
}
console.log(`The sum of Num1 and Num2 is ${add(4,5)}`)
console.log(`The sum of Num1 and Num2 is ${add(10,15)}`)


console.log(`%c2* fuction Expression`,css2)
const addition=function(num1,num2){
    return num1+num2;
}
console.log(`The sum of Num1 and Num2 is ${addition(10,50)}`)
console.log(`The sum of Num1 and Num2 is ${addition(1,5)}`)
