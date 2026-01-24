



// CSS FOR STYLING ONLY
let css1 = `font-size:1rem ; color:blue ; font-weight:bold; padding:0.5rem 1rem; background:yellow`
let red = `background:blue; color:#fff ; padding:0.5rem 1rem;`
let green = `background:green; color:#fff`

// EXERCISE 16 IF-ELSE 
console.log(`%cEXERCISE 17CONDITIONAL STATEMENTS |IF-ELSE `, css1)
// ..........................................

console.log('%cTemperature', red);


   let tem=prompt("soo geli cabirka temperature-ka")
   if (tem<0){
    alert(`The tem. is ${tem}deg. it's VERY COLD`);
   }else if (tem>0 && tem<=15){
    alert(`The tem. is ${tem}deg. so it's COLD`)
   }else if (tem>15 && tem<=25){
    alert(`The tem. is ${tem}deg. so it's WARM`)
   }else if (tem>25 && tem<=100){
    alert(`The tem. is ${tem}deg. so it's HOT`)
   }else{
    alert("fadlan tiro sax ah soo gelli")
   }



