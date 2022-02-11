// sounds 
 var pop =new Audio("pop.mp3");
 var resultsound = new Audio("result.mp3");
//taking number keys class in variable
const keys = document.querySelector('.keys');
//cancels keys 
const cancels = document.querySelector('.cancels');
let sum = 0,
    count = 1,
    flag = '';
//result that used to show outputs
const result = document.querySelector('.answer');
result.textContent = 0;

//taking inputs in result variables

keys.addEventListener('click', (e) => {

    if (e.target.innerHTML == 0 || e.target.innerHTML == 1 || e.target.innerHTML == 2 || e.target.innerHTML == 3 || e.target.innerHTML == 4 || e.target.innerHTML == 5 || e.target.innerHTML == 6 || e.target.innerHTML == 7 || e.target.innerHTML == 8 || e.target.innerHTML == 9) {
        if (result.textContent == '0' && e.target.innerHTML == 0) {
            result.textContent = '0';
            pop.play();
        } else {
            if (result.textContent == '0') {
                result.textContent = e.target.innerHTML;
                pop.play();
            } else {
                result.textContent += e.target.innerHTML;
                pop.play();
            }
        }
        flag = result.textContent[result.textContent.length - 1];
    } else if (e.target.innerHTML == '+' || e.target.innerHTML == '-' || e.target.innerHTML == '/' || e.target.innerHTML == '*') {
        if (flag != '+' && flag != '-' && flag != '*' && flag != '/')
            result.textContent += e.target.innerHTML;
            pop.play();
        flag = e.target.innerHTML;

    }
});

cancels.addEventListener('click', (e) => {
    if (e.target.innerHTML == 'C') {
        result.textContent = 0;
        flag = result.textContent[result.textContent.length - 1];
        pop.play();
    }

    if (e.target.innerHTML == 'DEL' && result.textContent.length > 1) {
        result.textContent = result.textContent.substring(0, (result.textContent.length - 1));
        flag = result.textContent[result.textContent.length - 1];
        pop.play();
    }
    if (e.target.innerHTML == 'ans') {
        resultsound.play();
        result.textContent = eval(result.textContent);
        flag = result.textContent[result.textContent.length - 1];
        
    }

});