const distance = document.getElementById('distance');
const age = document.getElementById('anni');
const button = document.querySelector('button');

let price = 0.27;

button.addEventListener('click', function(){
    let costo= price * distance.value;
    if (age < 18){
        costo= costo*0.8;
    }else if (age > 65){
        costo= costo*0.6;
    }
    document.getElementById('output').innerHTML= costo.toFixed(2) + '&euro;';
})