
// CSS FOR STYLING ONLY
let css1 = `font-size:1rem ; color:blue ; font-weight:bold; padding:0.5rem 1rem; background:yellow`
let red = `background:red; color:#fff`
let green = `background:green; color:#fff`



// EXERCISE 07 ARRAYS
console.log(`%cEXERCISE 10 OBJECTS `, css1)
// ..........................................
let library=[
    {
        title:"MAANA-FAAY",
        author:"ABWAAN SANCAD",
        year:1954
    },
    {
        title:"RAFAAD&RAAXO",
        author:"ABWAAN AHMEDKAAL",
        year:1984
    }
]
console.log(`%cThe title of the first book is ${library[0].title}`,red)

console.log(`%c The author of the second book is  ${library[1].author}`,green)