var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//Line
function drawLine(colour, xIni, yIni, xEnd, yEnd){
  ctx.beginPath();
  ctx.moveTo(xIni, yIni);
  ctx.strokeStyle = colour;
  ctx.lineTo(xEnd, yEnd);
  ctx.stroke();
  ctx.closePath();
}

//Square - Rectangle
function drawSquare(colour, x, y, width, height){
  ctx.beginPath();
  ctx.strokeStyle = colour;
  ctx.rect(x, y, width, height);
  ctx.stroke();
}

//Circle - Arc
function drawArc(colour, x, y, radius, startingAngle, endingAngle, shadow){
  ctx.beginPath();
  ctx.strokeStyle = colour;
  ctx.arc(x, y, radius, startingAngle, endingAngle);

  if (shadow) {
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#F6C90E';
  }

  ctx.stroke();
  ctx.closePath();
}

//Get the distance between two points knowing coordinates
function getDistance (xIni, yIni, xEnd, yEnd){
  var ab = Math.pow(xIni - xEnd, 2) + Math.pow(yIni - yEnd, 2);
  var distance = Math.sqrt(ab);
  return distance;
}

/*main*/

//THE GOLDEN RECTANGLE

//Draw a perfect square
drawSquare('#476D7C', 0, 0, 200, 200);
//Draw a line and show the exact middle
drawLine('#476D7C', 100, 0, 100, 200);
//Draw a diagonal to the opposite corner
drawLine('#476D7C', 100, 200, 200, 0);
//Make an arc using that line as a radius
var radius = getDistance(100, 200, 200, 0);
drawArc('#476D7C', 100, 200, radius, Math.PI * 1.5, 0, false);
//Draw a line from the base of the square to meet the arc
var newX = radius + 100;
drawLine('#476D7C', 0, 200, newX, 200);
//Draw a perpendicular line up from that meeting point
drawLine('#476D7C', newX, 200, newX, 0);
//Continue the line to match the top side of the original square
drawLine('#476D7C', newX, 0, 0, 0);

  //Then, the golden rectangle is...
  var wdt = getDistance(newX, 0, 0, 0);
  var hgt = getDistance(newX, 200, newX, 0);

  //Really? Let's see the numbers...
  var a = 200; //square base
  var b = wdt; //new rectangle width
  var ab = a + b; //rectangle width

  console.log("Phi = " + (1 + Math.sqrt(5)) / 2);
  console.log("a / b = " + a / b);
  console.log("a + b / a = " + ab / a);

//THE GOLDEN SPIRAL

//The golden rectangle!
drawSquare('#FFF', 0, 0, wdt, hgt);

//First arc
drawArc('#F6C90E', 200, 0, 200, Math.PI * 0.5, Math.PI, true);

//Second arc
drawSquare('#FFF', 200, 76.5, radius - 100, radius - 100);
drawArc('#F6C90E', 200, 76.5, radius - 100, 0, Math.PI * 0.5, true);

//Third arc
drawSquare('#FFF', 247, 0, radius - 147, radius - 147);
drawArc('#F6C90E', 247, 76.5, radius - 147, Math.PI * 1.5, 0, true);

//Fourth arc
drawSquare('#FFF', 200, 0, radius - 176.5, radius - 176.5);
drawArc('#F6C90E', 247, 47, radius - 176.5, Math.PI, Math.PI * 1.5, true);

//Fifth arc
drawSquare('#FFF', 200, 47, radius - 194.5, radius - 194.5);
drawArc('#F6C90E', 229.1, 46, radius - 194.5, Math.PI * 0.5, Math.PI, true);

//Sixth arc
drawSquare('#FFF', 229, 59, radius - 206.6, radius - 206.6);
drawArc('#F6C90E', 229.1, 57.9, radius - 206.6, 0, Math.PI * 0.5, true);

//Seventh arc
drawSquare('#FFF', 235, 47, radius - 212, radius - 212);
drawArc('#F6C90E', 234.5, 58, radius - 212, Math.PI * 1.5, 0, true);

//Eighth arc
drawSquare('#FFF', 229, 47, radius - 218, radius - 218);
drawArc('#F6C90E', 235, 52, radius - 218, Math.PI, Math.PI * 1.5, true);
