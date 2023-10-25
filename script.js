const count = document.querySelector("#count");

var curValue = 0;

var btnadd = document.querySelector("#add");
var btnsub = document.querySelector("#sub");
var btnreset = document.querySelector("#reset");



btnadd.addEventListener('click', () => {
    curValue += 1;
    // curValue++;              Another method to add number
    // curValue += curValue;    Another method to add number

    count.textContent = curValue;
});
btnreset.addEventListener('click', () => {
    curValue = 0;

    count.textContent = curValue;
});

btnsub.addEventListener('click', () => {
    curValue -= 1;
    // curValue--;              Another method to add number
    // curValue -= curValue;    Another method to add number

    count.textContent = curValue;
});




