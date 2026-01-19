
// CSS FOR STYLING ONLY
let css1 = `font-size:1rem ; color:blue ; font-weight:bold; padding:0.5rem 1rem; background:yellow`
let red = `background:red; color:#fff`



// EXERCISE 07 ARRAYS
console.log(`%cEXERCISE 09 OBJECTS `, css1)
// ..........................................
let car={
    title:"BMW",
    price: 35000,
    model:2026,
    start:function(){
        return "the car has started"
    }
}

console.log(`%c WOOOOOOOW  NER CAR ARRIVED`,red)
console.log(`IT IS [${car.title}]`)
console.log(`IT IS SOOOOO CHEAP IT'S PRICE IS  [$${car.price}]`)
console.log(`IT IS THE LATEST MODEL OF  [${car.model}]`)
console.log(`%c Lets goooooooooo  [${car.start()}]`,red)
