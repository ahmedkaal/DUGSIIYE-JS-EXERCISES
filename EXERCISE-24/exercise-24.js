



// CSS FOR STYLING ONLY
let css1 = `font-size:1rem ; color:blue ; font-weight:bold; padding:0.5rem 1rem; background:yellow`
let red = `background:blue; color:#fff ; padding:0.5rem 1rem;`
let green = `background:green; color:#fff`


// EXERCISE 24 DEFAULT PARAMETERS 
console.log(`%cEXERCISE 24 DEFAULT PARAMETERS `, css1)
// ..........................................

console.log('%ccreate a function calculateArea that takes width and hight as parameters and returns the area. if no height is provided it should default to width(for calculating the are of square) ', red);


function calculateArea(width,height=width){
      return width*height
       
}
console.log(calculateArea(5));
  










































