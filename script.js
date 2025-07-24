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
    let result = resultBox.innerHTML;
    let result_1 = eval(result)
    if (result_1 === Infinity || isNaN(result_1) || result_1 === -Infinity) {
        resultBox.innerHTML = "error";
    }
    else {
        resultBox.innerHTML = result_1;
    }
    
});

let clear_Output = document.getElementById('clear_result');

clear_Output.addEventListener('click', function (e) {
    resultBox.innerHTML = '';
})







