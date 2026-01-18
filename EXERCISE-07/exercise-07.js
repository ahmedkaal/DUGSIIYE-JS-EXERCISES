
// CSS FOR STYLING ONLY
let css1 = `font-size:1rem ; color:blue ; font-weight:bold; padding:0.5rem 1rem; background:yellow`
let red = `background:red; color:#fff`
let green = "background:red; color:#fff"
let blue = "background:blue; color:#fff"
let yellow = "background:yellow; color:#fff"


// EXERCISE 07 ARRAYS
console.log(`%cEXERCISE 07 ARRAYS `, css1)
// ..........................................
let colors=["red","green",'blue']

console.log(`original colors`)
console.log(colors)

console.log(`added YELLOW color to the end`)
colors.push("YELLOW")
console.log(colors)

console.log(`removed first color which is RED`)
colors.shift()
console.log(colors)