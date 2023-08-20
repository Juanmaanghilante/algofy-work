window.addEventListener('load',function(){


let label=document.querySelector('#label')
let input=document.querySelector('input')
console.log(label);
console.log(input);
label.addEventListener('keyup',function(){
    if (input.value == '') {
        label.style.display = 'block';
    } else {
        label.style.display = 'none';
        label.style.backgroundColor= 'red';
    }
});

})



