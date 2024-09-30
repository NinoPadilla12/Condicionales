let ball;
let score = 0;

function setup() {
  createCanvas(600, 400);
  ball = new Ball();
}

function draw() {
  // Cambiar el color del fondo basado en el puntaje
  if (score <= 3) {
    background(100, 150, 255); // Azul
  } else if (score <= 6) {
    background(255, 255, 100); // Amarillo
  } else {
    background(100, 255, 100); // Verde
  }

  ball.update();
  ball.display();

  // Mostrar puntaje
  fill(0);
  textSize(24);
  text(`Puntaje: ${score}`, 10, 30);
}

function mousePressed() {
  // Condicionales para cambiar el puntaje y el color de la bola
  if (ball.isMouseOver()) {
    score++;
    ball.changeColor(); // Cambiar el color de la bola
  } else {
    score--;
  }
}

// Clase para la bola
class Ball {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.radius = 40;
    this.color = color(255, 0, 0); // Rojo inicial
  }

  display() {
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.radius);
  }

  update() {
    // Mover la bola aleatoriamente
    this.position.x += random(-2, 2);
    this.position.y += random(-2, 2);

    // Mantener dentro de los límites
    this.position.x = constrain(
      this.position.x,
      this.radius,
      width - this.radius
    );
    this.position.y = constrain(
      this.position.y,
      this.radius,
      height - this.radius
    );
  }

  isMouseOver() {
    let d = dist(mouseX, mouseY, this.position.x, this.position.y);
    return d < this.radius;
  }

  changeColor() {
    // Cambiar el color aleatoriamente
    this.color = color(random(255), random(255), random(255));
  }
}
