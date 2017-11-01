var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function drawTriangle(xIni, yIni, xA, yA, xB, yB){
  ctx.strokeStyle = '#B21E4B';
  ctx.lineWidth = '2.5';
  ctx.fillStyle = '#B21E4B';

  ctx.beginPath();
  ctx.moveTo(xIni, yIni);
  ctx.lineTo(xA, yA);
  ctx.lineTo(xB, yB);
  ctx.stroke();
  ctx.closePath();
  ctx.fill();
}

function drawTriangles(width){
  ctx.clearRect(0, 0, canvas.height, canvas.width);
  //Left Triangle
  drawTriangle(0, canvas.height, 0, canvas.height - width, width, canvas.height);
  //Right Triangle
  drawTriangle(canvas.width, 0, canvas.width - width, 0, canvas.width, width);
}

document.getElementById('slider').addEventListener('input', function(){
  var value = document.getElementById('slider').value;
  drawTriangles(value);
});