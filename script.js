const inp = document.getElementById('calcinput');
const btn1 = document.getElementById('btn1');
const btn0 = document.getElementById('btn0');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const add = document.getElementById('add')
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const del = document.getElementById('delone');
const clear = document.getElementById('clear');
const submit = document.getElementById('submit');

btn1.addEventListener('click', function(){
    inp.value += '1';
});

btn2.addEventListener('click', function(){
    inp.value += '2';
});
btn3.addEventListener('click', function(){
    inp.value += '3';
});

btn4.addEventListener('click', function(){
    inp.value += '4';
});

btn5.addEventListener('click', function(){
    inp.value += '5';
});

btn6.addEventListener('click', function(){
    inp.value += '6';
});

btn7.addEventListener('click', function(){
    inp.value += '7';
});

btn8.addEventListener('click', function(){
    inp.value += '8';
});

btn9.addEventListener('click', function(){
    inp.value += '9';
});

btn0.addEventListener('click', function(){
    inp.value += '0';
});

add.addEventListener('click', function(){
    handling('+');
});

subtract.addEventListener('click', function() {
    handling('-');
});

multiply.addEventListener('click', function() {
    handling('*');
});

divide.addEventListener('click', function() {
    handling('/');
});

del.addEventListener('click', function(){
    let backspace = inp.value;
    inp.value = backspace.slice(0,-1);
});

clear.addEventListener('click', function(){
    inp.value = "";
});

submit.addEventListener('click', function(){
    inp.value = eval(inp.value);
})


function handling(value){
    let val = inp.value;

    if (val === '' && value === '-') {
        inp.value += value;
        return; 
    }

    let lastChar = val.slice(-1); 

    if (lastChar === '*' && value === '-') {
        inp.value += value;
        return;
    }

    if (['+', '-', '*', '/'].includes(lastChar)) {
        return; 
    }

    inp.value += value;
};

