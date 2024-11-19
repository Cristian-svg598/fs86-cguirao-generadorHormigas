document
  .getElementById("generarCuadrado")
  .addEventListener("click", generarCuadrado);

function generarCuadrado() {
  const container = document.getElementById("container");
  const cuadrado = crearCuadrado(container);
  container.appendChild(cuadrado);

  iniciarMovimiento(cuadrado, container);
}

function crearCuadrado(container) {
  const cuadrado = document.createElement("div");
  cuadrado.classList.add("cuadrado");

  const ancho = container.offsetWidth;
  const alto = container.offsetHeight;

  const randomX = Math.random() * (ancho - 20);
  const randomY = Math.random() * (alto - 20);

  cuadrado.style.left = `${randomX}px`;
  cuadrado.style.top = `${randomY}px`;

  return cuadrado;
}

function iniciarMovimiento(cuadrado, container) {
  const ancho = container.offsetWidth;
  const alto = container.offsetHeight;

  let velocidadX = 2;
  let velocidadY = 2;

  const moverCuadrado = () => {
    const posX = parseFloat(cuadrado.style.left);
    const posY = parseFloat(cuadrado.style.top);

    // Verificar colisiones con las paredes
    if (posX + 20 >= ancho || posX <= 0) velocidadX = -velocidadX;
    if (posY + 20 >= alto || posY <= 0) velocidadY = -velocidadY;

    // Actualizar posición
    cuadrado.style.left = `${posX + velocidadX}px`;
    cuadrado.style.top = `${posY + velocidadY}px`;
  };

  setInterval(moverCuadrado, 16); // Ejecutar cada 16ms
}
