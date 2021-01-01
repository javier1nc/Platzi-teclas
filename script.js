// script.js

// set up the canvas and context
var canvas = document.getElementById("area_de_dibujo");
var ctx = canvas.getContext("2d");

var ANCHO = canvas.width;
var x = ANCHO/2;
var y = ANCHO/2;
var teclas = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 };

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.getAttribute("height"), canvas.getAttribute("width"));

//report the mouse position on click
document.addEventListener("click", dibujarMouse);

document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("keyup", function (evento) {
  keys = false
});

// Draw point 
dibujarLinea(5, "red", x - 1, y - 1, x + 1, y + 1, ctx);

//Control
function dibujarMouse(evento) {

  var mousePos = getMousePos(canvas, evento);

  var colorcito1 = "silver";
  var colorcito2 = "aqua";
  var colorcito3 = "lime";

  // console.log(mousePos.x + ',' + mousePos.y);

  if (evento.type ==  "click") {
    console.log("Click!");

    xx = mousePos.x;
    yy = mousePos.y;

    dibujarLinea(6, colorcito3, x, y, xx, yy, ctx);
    dibujarLinea(3, colorcito2, x, y, xx, yy, ctx);
    dibujarLinea(1, colorcito1, x, y, xx, yy, ctx);

    x = mousePos.x;
    y = mousePos.y;
  }
}

//Get Mouse Position
function getMousePos(canvas, evento) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evento.clientX - rect.left,
        y: evento.clientY - rect.top
    };
}


function dibujarTeclado(evento) {
  var colorcito1 = "silver";
  var colorcito2 = "aqua";
  var colorcito3 = "lime";
  var MOVIMIENTO = 2;

  keys = evento.keyCode;
  if (keys && keys == teclas.UP) {
    console.log("UP");
    yy = y;
    yy -= MOVIMIENTO;
    dibujarLinea(6, colorcito3, x, y, x, yy, ctx);
    dibujarLinea(3, colorcito2, x, y, x, yy, ctx);
    dibujarLinea(1, colorcito1, x, y, x, yy, ctx);
    y = yy;
  }
  if (keys && keys == teclas.DOWN) {
    console.log("DOWN");
    yy = y;
    yy += MOVIMIENTO;
    dibujarLinea(6, colorcito3, x, y, x, yy, ctx);
    dibujarLinea(3, colorcito2, x, y, x, yy, ctx);
    dibujarLinea(1, colorcito1, x, y, x, yy, ctx);
    y = yy;
  }
  if (keys && keys == teclas.LEFT) {
    console.log("LEFT");
    xx = x;
    xx -= MOVIMIENTO;
    dibujarLinea(6, colorcito3, x, y, xx, y, ctx);
    dibujarLinea(3, colorcito2, x, y, xx, y, ctx);
    dibujarLinea(1, colorcito1, x, y, xx, y, ctx);
    x = xx;
  }
  if (keys && keys == teclas.RIGHT) {
    console.log("RIGHT");
    xx = x;
    xx += MOVIMIENTO;
    dibujarLinea(6, colorcito3, x, y, xx, y, ctx);
    dibujarLinea(3, colorcito2, x, y, xx, y, ctx);
    dibujarLinea(1, colorcito1, x, y, xx, y, ctx);
    x = xx;
  }
}

//functions
function dibujarLinea(lineW, color, x0, y0, x1, y1, lienzo) {
  lienzo.beginPath();
  lienzo.lineWidth = lineW; // Set line width
  lienzo.strokeStyle = color;
  lienzo.moveTo(x0, y0);
  lienzo.lineTo(x1, y1);
  lienzo.stroke();
  lienzo.closePath();
}