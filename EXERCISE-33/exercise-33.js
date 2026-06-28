



// CSS FOR STYLING ONLY
let css1 = `font-size:1rem ; color:blue ; font-weight:bold; padding:0.5rem 1rem; background:yellow`
let red = `background:blue; color:#fff ; padding:0.5rem 1rem;`
let green = `background:green; color:#fff`


// EXERCISE 32 querySelector and querySelectorAll 
console.log(`%cExercise-33 |CHANGING CONTENT OF AN ELEMENT `, css1)
console.log(`%cCreate a button wich chamges the content of an element when it clicked..        `,   red)


let changeBtn =document.querySelector('.chamgeBtn')

let textContent=document.querySelector('.textContent')

function changeContent(){
    textContent.textContent='Welcome to new TextContent'
  
}