var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var botaoAdicionar = document.getElementById('adicionar');
var botaoSubtrair = document.getElementById('subtrair');

botaoAdicionar.addEventListener('click', function(){
    increment();
});

botaoSubtrair.addEventListener('click', function(){
    decrement();
});

function increment(){
    currentNumber = currentNumber + 1; 
    currentNumberWrapper.innerHTML = currentNumber;
    verificaNegativo();   
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    verificaNegativo();
}

function verificaNegativo(){
    var cor = 'black';

    if(currentNumber < 0){
        cor = 'red';
    }
    if(currentNumber > 0){
        cor = 'green';
    }
    if(currentNumber === 0){
        cor = 'black';
    }

    currentNumberWrapper.style.color = cor;
}