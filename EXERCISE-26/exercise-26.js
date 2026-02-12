



// CSS FOR STYLING ONLY
let css1 = `font-size:1rem ; color:blue ; font-weight:bold; padding:0.5rem 1rem; background:yellow`
let red = `background:blue; color:#fff ; padding:0.5rem 1rem;`
let green = `background:green; color:#fff`


// EXERCISE 26 ASYNCHRONOUS PROGRAMMING 
console.log(`%cEXERCISE 26 ASYNCHRONOUS PROGRAMMING `, css1)
// ..........................................

console.log('%c implement a simple blocking fucntion that simulates a delay of 2 seconds before returning a message then implement non-blocking version of the same function using timesetout() ', red);

// Blocking example
function delayBlocking() {
   alert("Fetching user data..."); 
    return "Blocking delay completed!";
}

console.log("Start blocking delay...");
console.log(delayBlocking());
console.log("This message is blocked until the delay is complete.");


// Non-Blocking Example:

function delayNonBlocking(callback) {
    setTimeout(() => {
        callback("Non-blocking delay completed!");
    }, 2000);
}

console.log("Start non-blocking delay...");
delayNonBlocking((message) => {
    console.log(message);
});
console.log("This message is not blocked and runs immediately.");







































