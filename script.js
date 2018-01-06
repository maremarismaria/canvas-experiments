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
    document.getElementById("output").innerHTML = value;
    document.getElementById("output").style.color = randomColor();
}