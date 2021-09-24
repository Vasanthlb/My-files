
function send(a) {
    var pre = document.getElementById("screen").value;
    document.getElementById("screen").value = pre + a;
}

function math(b) {
    pre = document.getElementById("screen").value;
    operator = b;
    document.getElementById("screen").value = "";
}

/*
function delet(c){
    var abcd=document.getElementById("screen").value
    document.getElementById("screen").value =abcd + c;
}
*/

function ans() {
    cur = document.getElementById("screen").value;
    var number1 = pre;
    var number2 = cur;
    if (operator == "+") {
        document.getElementById("screen").value = parseInt(number1) + parseInt(number2);
    }

    if (operator == "-") {
        document.getElementById("screen").value = parseInt(number1) - parseInt(number2);
    }

    if (operator == "*") {
        document.getElementById("screen").value = parseInt(number1) * parseInt(number2);
    }

    if (operator == "/") {
        document.getElementById("screen").value = parseInt(number1) / parseInt(number2);
    }
}
