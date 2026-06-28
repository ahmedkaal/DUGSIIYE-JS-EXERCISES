



// CSS FOR STYLING ONLY
let css1 = `font-size:1rem ; color:blue ; font-weight:bold; padding:0.5rem 1rem; background:yellow`
let red = `background:blue; color:#fff ; padding:0.5rem 1rem;`
let green = `background:green; color:#fff`


// EXERCISE 32 querySelector and querySelectorAll 
console.log(`%cExercise-33 |CHANGING CONTENT OF AN ELEMENT `, css1)
console.log(`%cCreate two buttons one to add and one to remove element from list as shown in the example.`,  red)


let list=document.querySelector('.list');

let add=document.querySelector('.add')
    
let remove=document.querySelector('.remove')




function addItem(){
 let newitem= document.createElement('li')
   newitem.innerText=('item four ');

   list.appendChild(newitem)
   

}

function removeItem(){
    if (list.lastElementChild){
        list.removeChild(list.lastElementChild)
       
    } else{
       alert('Wax la tiro ma yaalo') 
    }
    
} 