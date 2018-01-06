var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

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
    
    document.getElementById("output").innerHTML = "F(" + value + ")";
    console.log(number + "->" + fibonacciSequence(number));
    document.getElementById("output").style.color = randomColor();
}

function fibonacciSequence(number){

    var sequence = [];
    var j = 0;

    for (var i = 0; i <= number; i++) {
        
        if(i < 3){
            sequence.push(j);
            j++;
        }

        if(i > 2 && i < number){
            var penultimate = sequence[sequence.length - 2];
            var last = sequence[sequence.length - 1];
            sequence.push(penultimate + last);
        }
    }
    
    return sequence;
}

