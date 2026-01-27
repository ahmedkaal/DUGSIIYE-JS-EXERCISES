



// CSS FOR STYLING ONLY
let css1 = `font-size:1rem ; color:blue ; font-weight:bold; padding:0.5rem 1rem; background:yellow`
let red = `background:blue; color:#fff ; padding:0.5rem 1rem;`
let green = `background:green; color:#fff`


// EXERCISE 22 DESTRUCTURING ARRAYS
console.log(`%cEXERCISE 23 DESTRUCTURING OBJECTS `, css1)
// ..........................................

console.log('%cuse object destructuring to extract make and model properties from the object {make:"Toyota" , model:"Corolla" , year:2020}', red);

let car={
      make:"Toyota",
      model:"Corolla",
      year:2020
}

let {make,model,year}=car;
console.log(`The car was made by [${make}] and it's model is [${model}]`)












































