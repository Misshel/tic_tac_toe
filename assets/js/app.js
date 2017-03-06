// Type to see the difference in when these are called
/*var lugar1 = getElementById("1");
lugarT = keyPressed;
keyPressed = function(t) {
  println("pressed " + (key) + " " + keyCode);
alert("mi turno");
};

keyTyped = function(y) {
  println("typed " + (key) + " " + keyCode);

};

keyReleased = function(u) {
  println("released " + (key) + " " + keyCode);
};
keyPressed = function(t) {
  println("pressed " + (key) + " " + keyCode);

};

keyTyped = function(y) {
  println("typed " + (key) + " " + keyCode);

};

keyReleased = function(u) {
  println("released " + (key) + " " + keyCode);
};
*/
var turno = function(x, y) {
    this.x = x;
    this.y = y;
    this.width = 70;
  }

  turno.prototype.fichaVolteada = function() {
      fill(102, 217, 70);
      strokeWeight(2);
      rect(this.x, this.y, this.width, this.width, 10);
      ellipse(this.x+36, this.y+36, this.width-25, this.width-25);
  };

var turnos = [];

var numColum = 3;
var numFil = 3;
for (var i = 0; i < numColum; i++) {
    for (var j = 0; j < numFil; j++) {
      turnos.push(new turno(i * 78 + 81, j * 78 + 81));
    }
}

for (var i = 0; i < turnos.length; i++) {
    turnos[i].fichaVolteada();
}
