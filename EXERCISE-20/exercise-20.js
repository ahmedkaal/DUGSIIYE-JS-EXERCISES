



// CSS FOR STYLING ONLY
let css1 = `font-size:1rem ; color:blue ; font-weight:bold; padding:0.5rem 1rem; background:yellow`
let red = `background:blue; color:#fff ; padding:0.5rem 1rem;`
let green = `background:green; color:#fff`


// EXERCISE 20 MAP METHOD
console.log(`%cEXERCISE 20 MAP METHOD `, css1)
// ..........................................

console.log('%cMAP METHOD', red);

let fruits=['tufaax','muus','canbe']
const newFruit= fruits.map((fruit)=>{
      return fruit.length
})

newFruit.forEach((wordLength,index)=>{
      console.log(`${index+1}- the fruit  length is ${wordLength}`);
      
})



// console.log(newFruit);








