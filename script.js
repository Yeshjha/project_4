let box = document.querySelector('#box_1');
let resultBox = document.querySelector('#result_box');
let calButton = document.querySelector('#cal_button');
let button = document.querySelectorAll('.buttons')

button.forEach(function(clickButton){
    clickButton.addEventListener('click',function(){
        resultBox.innerHTML += clickButton.textContent
    })
    let sum = clickButton + clickButton;
    
    let output = document.querySelector('#give_result')
    output.addEventListener('submit', function(){
        resultBox.textContent = sum;
    })
})







