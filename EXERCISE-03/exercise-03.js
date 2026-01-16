
// CSS FOR STYLING ONLY
let css1 = `font-size:1rem ; color:blue ; font-weight:bold; padding:0.5rem 1rem; background:yellow`
let css2 = "background:green; color:#fff"


// EXERCISE 03 logical operators
console.log(`%cEXERCISE 03 logical operators And(&&) , Or(||) and Not(!)`, css1)

let isSunny = true, isWeekend = false;

console.log(`let isSunny=true,   isWeekend=false;`)

console.log(`1* And (&&) operator isSunny&&isWeekend   =>  Result = ${isSunny && isWeekend} => you can't go to beach`)

console.log(`%c2* And (&&) operator isSunny||isWeekend   =>  Result =${isSunny || isWeekend} => you can go to beach  `, css2)


console.log(`3* Not (!) operator !(isSunny||isWeekend) =>  Result = ${!(isSunny || isWeekend)} => you can't go to beach`)

console.log(`%c4* Not (!) operator !(isSunny&&isWeekend) =>  Result = ${!(isSunny && isWeekend)} => you can go to beach `, css2)



