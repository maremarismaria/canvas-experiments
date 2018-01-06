
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function showText(){
    document.getElementById("output").style.fontSize = "20px";
    document.getElementById("output").innerHTML = "Fibonacci \n sequence";
}

function drawSquare(color, x, y, width, height){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function randomColor(){
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var rgb = "rgb(" + r + "," + g + "," + b +")";
    return rgb;
}

function getValue(elementId){
    var value = document.getElementById(elementId).value;
    var number = parseInt(value);
    var sequence = fibonacciSequence(number);
    var color = randomColor();

    document.getElementById("output").style.color = color;
    document.getElementById("output").innerHTML = "F(" + value + ")";

    for (var i = 0; i < sequence.length; i++) {
        document.getElementById("output").innerHTML += "<br>" + sequence[i];
        var val = sequence[i] * 5;
        drawSquare(color, 25, 30, val, val);
    }

    console.log(number + "->" + fibonacciSequence(number));   
}

function fibonacciSequence(number){

    var sequence = [];

    for (var i = 0; i <= number; i++) {
        if(i < 2){ 
            sequence.push(i); 
        }

        if(i > 1){
            var penultimate = sequence[sequence.length - 2];
            var last = sequence[sequence.length - 1];
            sequence.push(penultimate + last);
        }
    }
    
    return sequence;
}


