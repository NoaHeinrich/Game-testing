$(document).ready(function(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var x = canvas.width/3;
  var y = 300;
  var color = "#FF0000";
  ctx.fillStyle = color;
  ctx.fillRect(x,y,25,25);
  $(document).on("keydown", function(event){
    event.preventDefault();
    var code = event.keyCode;
    if(code===37){
      draw("left")
    } else if(code === 38){
      draw("up")
    } else if(code === 39){
      draw("right")
    } else if(code === 40){
      draw("down")
    }
  })

  var draw = function(direction){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x,y,25,25);
    ctx.closePath();
    if(x > 0 && direction === "left"){
      x += -15;
    } else if(y > 200 && direction === "up"){
      y += -15;
    } else if(x + 10 < canvas.width - 20 && direction === "right"){
      x += 15
    } else if(y + 10 < canvas.height - 20 && direction === "down"){
      y += 15
    }
  }
})