let box = document.querySelector('#box_1');
let resultBox = document.querySelector('#result_box');
let calButton = document.querySelector('#cal_button');
let button = document.querySelectorAll('.buttons');
let output = document.querySelector('#give_result');
button.forEach(function (clickButton) {
    clickButton.addEventListener('click', function (e) {
        resultBox.innerHTML += clickButton.textContent
    });
});

output.addEventListener('click', function (e) {
    resultBox.innerHTML = eval(resultBox.innerHTML);
    
});

let clear_Output = document.getElementById('clear_result');

clear_Output.addEventListener('click', function (e) {
    resultBox.innerHTML = '';
})







