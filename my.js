const distance = document.getElementById('input#distance');
const age = document.getElementById('input#anni');
const button = document.querySelector('button');

let price = 0.27;
let costo= price * distance;

button.addEventListener('click', function(){
    if (age < 18){
        costo= costo*0.82;
    }else if (age > 65){
        costo= costo*0.66;
    }
    document.getElementById('output').innerHTML=costo.toFixed(2) + '&euro;';
})