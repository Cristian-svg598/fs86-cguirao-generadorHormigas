
document
  .getElementById("generarCuadrado")
  .addEventListener("click", generarCuadrado);

function generarCuadrado() {
    const container = document.getElementById("container");
   
    const cuadrado = document.createElement("div");
    cuadrado.classList.add("cuadrado");

    // Dimensiones del contenedor 
    const ancho = container.offsetWidth;
    const alto = container.offsetHeight;

    // Para Insertar el cuadrado en una ubicación aleatoria dentro del contenedor
    const randomX = Math.random() * (ancho - 20); 
    const randomY = Math.random() * (alto - 20); 

    cuadrado.style.left = `${randomX}px`;
    cuadrado.style.top = `${randomY}px`;

    // Agregar el cuadrado al contenedor
    container.appendChild(cuadrado);

    // Las velocidades de los ejes X e Y para la animación
    let velocidadX = 2; 
    let velocidadY = 2; 

    // Función para mover el cuadrado
    const moverCuadrado = () => {
        let posX = parseFloat(cuadrado.style.left);
        let posY = parseFloat(cuadrado.style.top);

        // Verificar colisiones con las paredes
        if (posX + 20 >= ancho || posX <= 0) {
            velocidadX = -velocidadX; 
        }

        if (posY + 20 >= alto || posY <= 0) {
            velocidadY = -velocidadY;
        }

        // Mover el cuadrado
        cuadrado.style.left = `${posX + velocidadX}px`;
        cuadrado.style.top = `${posY + velocidadY}px`;
    };

    // Mover el cuadrado cada 16ms 
    const intervalo = setInterval(moverCuadrado, 16);
    
   
}
