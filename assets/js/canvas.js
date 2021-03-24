map = [
  ['-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-'],
  ['-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-'],
  ['-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','-','*','*','*','*','*','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-'],
  ['-','-','-','-','*','*','*','*','*','*','*','-','-','-','-','-','*','-','-','-','*','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-'],
  ['-','-','-','-','*','-','-','-','-','-','*','*','*','*','*','*','*','-','-','-','*','*','*','*','*','*','*','*','*','*','*','*','10','*','*','*','*','11','*','*','*','*','*','*','*','*','*','*','*','*'],
  ['*','*','*','*','*','-','-','-','-','-','*','-','-','-','-','-','*','-','-','-','*','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','*','-','-','-','-','-','-','-','12','-','-','-','-','-'],
  ['-','-','*','-','-','-','-','-','-','-','*','-','-','-','-','-','*','*','*','*','*','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','*','-','-','-','-','-','-','-','*','-','-','-','-','-'],
  ['-','-','*','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','*','-','-','-','-','-','-','-','*','-','-','-','-','-'],
  ['-','-','*','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','*','-','-','-','-','-','-','-','*','-','-','-','-','-'],
  ['-','-','*','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','*','*','*','*','*','13','13','13','*','*','*','*','*','*'],
  ['-','-','*','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','*','-','-','-','-','-','-','-','*','-','-','-','-','-'],
  ['-','-','*','*','*','*','*','-','-','-','*','*','*','*','*','*','*','*','*','*','*','*','-','-','-','-','-','-','-','-','-','*','-','-','-','-','*','-','-','-','-','-','-','-','*','-','-','-','-','-'],
  ['-','-','*','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-','9','-','-','-','-','*','*','*','*','*','*','*','*','*','*','*','*','*','*'],
  ['-','-','*','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','-','-','-','-','-','-','-','-','-','-','-','-','-'],
  ['-','-','*','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-'],
  ['-','-','*','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-'],
  ['-','-','*','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','8','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-'],
  ['*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*'],
  ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-'],
  ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-'],
  ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-'],
  ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','7','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-'],
  ['*','*','*','*','*','*','*','*','*','*','2','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*'],
  ['-','-','-','-','-','-','-','-','-','*','-','-','-','-','-','3','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-'],
  ['-','-','-','-','-','-','-','-','-','*','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-'],
  ['-','-','-','-','-','-','-','-','-','*','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-'],
  ['-','-','-','-','-','-','-','-','-','*','*','*','*','*','*','*','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-'],
  ['-','-','-','-','-','-','-','-','-','*','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-'],
  ['-','-','-','-','-','-','-','-','-','*','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','6','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-'],
  ['-','-','-','-','-','-','-','-','-','*','-','-','-','-','-','*','4','*','*','*','*','*','*','*','*','*','*','*','*','*','5','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*'],
  ['*','*','*','*','*','1','*','*','*','*','-','-','-','-','-','*','-','-','-','*','-','-','-','-','-','-','-','*','-','-','-','*','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-'],
  ['-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','*','-','-','-','*','-','-','-','-','-','-','-','*','-','-','-','*','-','-','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*'],
  ['-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','*','-','-','-','*','-','-','-','-','-','-','-','*','-','-','-','*','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
  ['-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
  ['*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
  ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
  ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],



]
function startEX2() {
  localStorage.startExperiment2 = Date();
  getTimer("ex2");
  
}

var canvas = document.getElementById("canvas_ex2");
canvas.addEventListener("keydown", doKeyMove, true);
// document.body.appendChild("canvas_2");
canvas_context = canvas.getContext("2d");
var car_A = document.getElementById("AudiCar-A");
var car_S = document.getElementById("AudiCar-S");
var car_W = document.getElementById("AudiCar-W");
var car_D = document.getElementById("AudiCar-D");

var map_axis_x = 1000;
var map_axis_y = 720;
var map_x_channel = 50;
var map_y_channel = 37;
var tiles_x = map_axis_x / map_x_channel;
var tiles_y = map_axis_y / map_y_channel;
var x = 2 * tiles_x;
var y = 29 * tiles_y;
var car_x = 50;
var car_y = 55;

drawingImage();

var lastkey = '-';
var discovered = new Set();

function doKeyMove(e) {
  drawMaps();
  canvas_context.fillStyle = "#FF0000";
  let x_in_map = 0;
  if(((x/tiles_x)*10)%10 > 5)
    x_in_map = parseInt(x/tiles_x)+1;
  else
    x_in_map = parseInt(x/tiles_x);
  let y_in_map = 0;
    if(((y/tiles_y)*10)%10 > 5)
      y_in_map = parseInt(y/tiles_y)+1;
    else
      y_in_map = parseInt(y/tiles_y);
  // console.log(' ',map[y_in_map-1][x_in_map],' ');
  // console.log(map[y_in_map][x_in_map-1],map[y_in_map][x_in_map],map[y_in_map][x_in_map+1]);
  // console.log(' ',map[y_in_map+1][x_in_map],' ');

  
  let isRoad = false;
   
  //====================
  //	THE W KEY
  //====================
  if (e.keyCode == 87 && map[y_in_map-1][x_in_map] !='-') {
    clearCanvas();
    drawMaps();
    y = y - tiles_y;
    if (y < 0) {
      y = 0;
    }
    canvas_context.drawImage(car_W, x-15, y-15, car_x, car_y);
    // canvas_context.fillStyle = "#28a745";
    // canvas_context.fillRect(x, y, tiles_x, tiles_y);
    lastkey='W';
    isRoad = true
    let sign = map[y_in_map][x_in_map];
    if ( sign != '*' && sign != '-') {
      // console.log(sign,parseInt(sign));
      discovered.add(parseInt(sign));
    }
  }

  //====================
  //	THE S KEY
  //====================
  if (e.keyCode == 83 && map[y_in_map+1][x_in_map] !='-') {
    clearCanvas();
    drawMaps();
    y = y + tiles_y;
    if (y >= map_axis_y) {
      y = map_axis_y - tiles_y;
    }
    canvas_context.drawImage(car_S, x-15, y-20, car_x, car_y);
    // canvas_context.fillStyle = "#28a745";
    // canvas_context.fillRect(x, y, tiles_x, tiles_y);
    lastkey='S';
    isRoad = true
    let sign = map[y_in_map][x_in_map];
    if ( sign != '*' && sign != '-') {
      // console.log(sign,parseInt(sign));
      discovered.add(parseInt(sign));
    }
  }

  //====================
  //	THE A KEY
  //====================
  if (e.keyCode == 65 && map[y_in_map][x_in_map-1] !='-') {
    clearCanvas();
    drawMaps();
    x = x - tiles_x;
    if (x < 0) {
      x = 0;
    }
    canvas_context.drawImage(car_A, x-15, y-20, car_x, car_y);
    // canvas_context.fillStyle = "#28a745";
    // canvas_context.fillRect(x, y, tiles_x, tiles_y);
    lastkey='A';
    isRoad = true
    let sign = map[y_in_map][x_in_map];
    if ( sign != '*' && sign != '-') {
      // console.log(sign,parseInt(sign));
      discovered.add(parseInt(sign));
    }
  }

  //====================
  //	THE D KEY
  //====================
  if (e.keyCode == 68 && map[y_in_map][x_in_map+1] !='-') {
    clearCanvas();
    drawMaps();
    x = x + tiles_x;
    if (x >= map_axis_x) {
      x = map_axis_x - tiles_x;
    }
    canvas_context.drawImage(car_D, x-25, y-20, car_x, car_y);
    // canvas_context.fillStyle = "#28a745";
    // canvas_context.fillRect(x, y, tiles_x, tiles_y);
    lastkey='D';
    isRoad = true
    let sign = map[y_in_map][x_in_map];
    if ( sign != '*' && sign != '-') {
      // console.log(sign,parseInt(sign));
      discovered.add(parseInt(sign));
    }
  }
  // console.log(lastkey,isRoad);
  
  //====================
  //	THE LAST KEY
  //====================
  if (lastkey != '-' && !isRoad) {
    switch (lastkey) {
      case 'W':canvas_context.drawImage(car_W, x-15, y-15, car_x, car_y);
        break;
      case 'A':canvas_context.drawImage(car_A, x-15, y-20, car_x, car_y);
        break;
      case 'S':canvas_context.drawImage(car_S, x-15, y-20, car_x, car_y);
        break;
      case 'D':canvas_context.drawImage(car_D, x-25, y-20, car_x, car_y);
        break;
      default:
        break;
    }
  }
}

function clearCanvas() {
  canvas.width = canvas.width;
}

function drawMaps() {
  canvas_context.beginPath();
  // // Grid - Vertical line
  //   for (let i = 1; i <= map_y_channel; i++) {
  //     canvas_context.moveTo(0, i * tiles_x);
  //     canvas_context.lineTo(map_axis_x, i * tiles_x);
  //   }

  //  // Grid - Horizontal line
  //   for (let i = 1; i <= map_x_channel; i++) {
  //     canvas_context.moveTo(i * tiles_y, 0);
  //     canvas_context.lineTo(i * tiles_y, map_axis_y);
  //   }
  drawingImage();
  canvas_context.stroke();
}

function drawingImage() {
  var _map = document.getElementById("full-map");
  canvas_context.drawImage(_map, 0, 0, map_axis_x, map_axis_y);
  // road()
}

function road() {
  for (let i = 0; i < map[0].length; i++) { // 100
      for (let j = 0; j <  map.length; j++) { // 75
        if(map[j][i]==='*'){
          // console.log(i,j);
          canvas_context.fillStyle = "#dc3545";
          canvas_context.fillRect(i * tiles_x, j * tiles_y, tiles_x, tiles_y);
        }
      }
    }
}



function getTimer(name) {
  document.getElementById("mainEX2").classList.remove("container");
  document.getElementById("mainEX2").classList.remove("container-fluid");
  let timeleft = 5;
  document.getElementById("explanation_ex2").classList.add("hidden");
  var downloadTimer = setInterval(function () {
    timeleft--;
    document.getElementById("timer").classList.remove("hidden");
    document.getElementById("countdowntimer").textContent = timeleft;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById(name).classList.remove("hidden");
      document.getElementById("timer").classList.add("hidden");
      document.getElementById("banner").classList.add("hidden");
      
    }
  }, 1000);
}

function saveData() {
  localStorage.finishExperiment2 = Date();
  localStorage.result = Array.from(discovered);
  saveDataToSheet();
  // location.replace("thank.html");
  
}