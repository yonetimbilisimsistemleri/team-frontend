let ekle =document.getElementById('ekle');
let gorev =document.getElementById('görev');
let inputtext=document.getElementById('inputtext');
let temizle= document.getElementById('çıkar')

ekle.addEventListener('click',function(){

    let paragraf=document.createElement('p');
    paragraf.classList.add('görevv');
    gorev.appendChild(paragraf);
    paragraf.innerHTML=inputtext.value;
    inputtext.value="";



   paragraf.addEventListener('click', function(){
     paragraf.style.textDecoration = 'line-through';
 })

 paragraf.addEventListener('dblclick' , function(){
     gorev.removeChild(paragraf); 
 })



    temizle.addEventListener('click', function() {
        paragraf.remove();
    })


})







