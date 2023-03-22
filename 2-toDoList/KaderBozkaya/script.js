

let EkleButonu= document.getElementById('TDekle')
let ParagrafKismi= document.getElementById('ToDoID')
let TextKismi= document.getElementById('InputText')
let SilmeKismi= document.getElementById('TDcikar')

EkleButonu.addEventListener('click', function() {
    let paragraf=document.createElement('p')
    paragraf.classList.add('paragrafStili')
    ParagrafKismi.appendChild(paragraf)
    paragraf.innerHTML= InputText.value 
    InputText.value= "" 

   
    paragraf.addEventListener('click', function(){
        paragraf.style.textDecoration = 'line-through' 
    })
    paragraf.addEventListener('dblclick' , function(){
        ToDoID.removeChild(paragraf) 
    })
    SilmeKismi.addEventListener('click', function() {
        paragraf.remove() 
    })

}) 


