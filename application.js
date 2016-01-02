$(document).ready(function(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var xMove = 5;
  var yMove = 3;
  var x = canvas.width/3;
  var y = 300;
  var color = "#FF0000";
  var draw = function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x,y,25,25);
    ctx.closePath();
    if(y + yMove < 0 || y + yMove > canvas.height - 25){
      yMove = -yMove;
    }
    if(x + xMove < 0 || x + xMove > canvas.width - 25){
      xMove = -xMove;
    }
    x += xMove;
    y += yMove;
  }
  setInterval(draw, 10);
})