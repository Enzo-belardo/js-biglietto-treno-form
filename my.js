const distance = document.getElementById('distance');
const age = document.getElementById('age');
const button = document.querySelector('button');

let price = 0.2762;

button.addEventListener('click', function(){
    let costo= price * distance.value;
    if (age.value < 18){
        costo= costo*(100-17.5)/100;
    }else if (age.value > 65){
        costo= costo*(100-33.3)/100;
    }
    document.getElementById('output').innerHTML= costo.toFixed(2) + '&euro;';
})