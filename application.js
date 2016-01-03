$(document).ready(function(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var x = canvas.width/3;
  var y = 300;
  var color = "#FF0000";
  var counter = 0;
  ctx.fillStyle = color;
  ctx.fillRect(x,y,25,25);

  $(document).on("keydown", function(event){
    event.preventDefault();
    var code = event.keyCode;
    if(code === 37){
      draw("left")
    } else if(code === 38){
      draw("up")
    } else if(code === 39){
      draw("right")
    } else if(code === 40){
      draw("down")
    } else if(code === 90){
      inspect()
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

  var inspect = function(){
    if(240 <= x && x <= 300 && y >= 175){
      $("#one").fadeIn(2000);
      $("#bell").trigger("play");
    } else if(135 <= x && x <= 230 && 240 <= y && y <= 315) {
      $("#two").fadeIn(2000);
      $("#bell").trigger("play");
    } else if(690 <= x && x <= 770 && 240 <= y && y <= 290) {
      $("#three").fadeIn(2000);
      $("#bell").trigger("play");
    } else if(725 <= x && x <= 820 && y >= 375) {
      $("#four").fadeIn(2000);
      $("#bell").trigger("play");
    }
  }
})