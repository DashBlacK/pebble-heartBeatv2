// rocky index.js
var rocky = require('rocky');
//var request = require('request');
var secondcount = 0;
var f = Math.floor(Math.random() * 20);
var finalRate = 60+f;
var address = '0x8fece74c20cc5fbe506701ccac1b3a22ba862dd6';
rocky.on('draw', function(event) {
  // Get the CanvasRenderingContext2D object
  var ctx = event.context;
  
  var d = Math.floor(Math.random() * 20);

  // Clear the screen
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);

  // Determine the width and height of the display
  var w = ctx.canvas.unobstructedWidth;
  var h = ctx.canvas.unobstructedHeight;

  // Set the text color
  ctx.fillStyle = 'white';

  // Center align the text
  ctx.textAlign = 'center';

  // Display the time, in the middle of the screen
  if (secondcount < 7){
    ctx.fillText("Hi, I'm Pebble! Measuring heart rate.", w / 2, h / 2, w);
  }
  else if (secondcount > 6 && secondcount < 15){
    ctx.fillText("Hold tight! \n BPM: "+(60+d), w / 2, h / 2, w);
  }
  else if (secondcount > 14 && secondcount < 16){
    ctx.fillText("Your heart rate is "+finalRate+". \n Submitting to server.", w / 2, h / 2, w);
    //request('http://172.27.165.143:5000/patients/'+address+'/'+finalRate, 'GET', function(respText) {
        //var resp = JSON.parse(respText);
      //});
    rocky.postMessage({'finalRate': finalRate});
  }
  else if (secondcount > 15 && secondcount < 17){
    ctx.fillText("Your heart rate is "+finalRate+". \n Submitting to server..", w / 2, h / 2, w);
  }
  else if (secondcount > 16 && secondcount < 18){
    ctx.fillText("Your heart rate is "+finalRate+". \n Submitting to server...", w / 2, h / 2, w);
  }
  else if (secondcount > 17 && secondcount < 19){
    ctx.fillText("Your heart rate is "+finalRate+". \n Submitting to server.", w / 2, h / 2, w);
  }
  else if (secondcount > 18 && secondcount < 20){
    ctx.fillText("Your heart rate is "+finalRate+". \n Submitting to server..", w / 2, h / 2, w);
  }
  else if (secondcount > 19 && secondcount < 21){
    ctx.fillText("Your heart rate is "+finalRate+". \n Submitting to server...", w / 2, h / 2, w);
  }
  else{
    ctx.fillText("Your heart rate is "+finalRate+". \n Submission successful.", w / 2, h / 2, w);
  }
  secondcount = secondcount + 1;
});

rocky.on('secondchange', function(event) {
  // Display a message in the system logs
  console.log("Another minute with your Pebble!");
  
  // Request the screen to be redrawn on next pass
  rocky.requestDraw();
});
