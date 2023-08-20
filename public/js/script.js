window.addEventListener('load',function(){
console.log('cargando');
    let boton=document.querySelector('.b1')

    let parafo=document.querySelector('.turro')

 
    // let skills=document.querySelector('aboutt')
    // let ule=document.querySelector('.ule')

    boton.addEventListener('click',function(){

if (parafo.style.whiteSpace=='normal') {
    parafo.style.whiteSpace='pre'
}else{
    parafo.style.whiteSpace='normal'
}
console.log("hola");
})






})