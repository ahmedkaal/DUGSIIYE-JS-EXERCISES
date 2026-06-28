



// CSS FOR STYLING ONLY
let css1 = `font-size:1rem ; color:blue ; font-weight:bold; padding:0.5rem 1rem; background:yellow`
let red = `background:blue; color:#fff ; padding:0.5rem 1rem;`
let green = `background:green; color:#fff`


// EXERCISE 32 querySelector and querySelectorAll 
console.log(`%cEXERCISE 32 querySelector and querySelectorAll  `, css1)
console.log(`%c  use querySelector and querySelectorAll to select elements from HTML and log the selected items to the log.        `,   red)


let head=document.querySelector('.head')

head.style.color='darkblue'
console.log(head);


let h3=document.querySelectorAll('h3')
 console.log(h3);
 
 let h4 = document.querySelectorAll('h4')

 console.log(h4);
 