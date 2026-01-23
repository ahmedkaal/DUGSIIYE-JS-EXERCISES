



// CSS FOR STYLING ONLY
let css1 = `font-size:1rem ; color:blue ; font-weight:bold; padding:0.5rem 1rem; background:yellow`
let red = `background:blue; color:#fff ; padding:0.5rem 1rem;`
let green = `background:green; color:#fff`

// EXERCISE 16 IF-ELSE 
console.log(`%cEXERCISE 16 CONDITIONAL STATEMENTS |IF-ELSE `, css1)
// ..........................................

console.log('%cIF GRADE IS MORETHEN 50=YOU PASSED OTHERSWISE= YOU FAILED', red);

let grade=prompt(`soo geli grade`);

if (grade=='' && typeof grade == "string"){
    console.log('Fadlan geli grade-kaaga oo tiro ah');
}
else if (grade>=50){
    console.log(`your grade is ${grade} so you're "PASSED"`);
}
else{
    console.log(`your grade is less than 50 so you FAILED`);
    
}
   



