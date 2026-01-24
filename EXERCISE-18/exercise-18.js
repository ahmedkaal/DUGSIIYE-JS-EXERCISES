



// CSS FOR STYLING ONLY
let css1 = `font-size:1rem ; color:blue ; font-weight:bold; padding:0.5rem 1rem; background:yellow`
let red = `background:blue; color:#fff ; padding:0.5rem 1rem;`
let green = `background:green; color:#fff`


// EXERCISE 18 TARNARY OPERATOR 
console.log(`%cEXERCISE 18 TARNARY OPERATOR `, css1)
// ..........................................

console.log('%cGRADE MORE THAN 60 PASS OTHERWISE FAIL USING TERNARY OPERATOR', red);

let grade = prompt("soo geli grade 0-100");

 grade > 60 && grade <= 100 ?
   alert("you are PASSED")
: grade < 60 ?
      alert("you are FAILED")

: alert("Fadlan grade sax ah soo geli");








