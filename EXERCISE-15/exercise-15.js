



// CSS FOR STYLING ONLY
let css1 = `font-size:1rem ; color:blue ; font-weight:bold; padding:0.5rem 1rem; background:yellow`
let red = `background:blue; color:#fff ; padding:0.5rem 1rem;`
let green = `background:green; color:#fff`

// EXERCISE 15 LOOPS
console.log(`%cEXERCISE 15 LOOPS |FOR OF AND FOR IN LOOPS `, css1)
// ..........................................
console.log('%c  FOR OF + FOR IN LOOPS',red);

let students=[
    {Name:'Mohamed', Age:25, City:"Mogadisho"},
    {Name:'Aisha', Age:20, City:"Bosaso"},
    {Name:'Balkisa', Age:30, City:"Hargaisa"}
]

for ( const x of students){
    for (const y in x){
        console.log(` ${y}:  ${x[y]}`) ;
      
    }
   console.log("_____________");
   
}
    


