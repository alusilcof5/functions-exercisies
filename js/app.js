
// 1. Sumar dos números
function sumar() {
  const num1 = Number(document.getElementById('sumar-num1').value);
  const num2 = Number(document.getElementById('sumar-num2').value);
  document.getElementById('resultado-suma').textContent = 'Resultado: ' + (num1 + num2);
}

// 2. Decir si un número es par
function esPar() {
  const numero = Number(document.getElementById('par-num').value);
  let resultado = (numero % 2 === 0) ? "Es par" : "Es impar";
  document.getElementById('resultado-par').textContent = resultado;
}

// 3. Saludar con un nombre
function saludar() {
  const nombre = document.getElementById('saludo-nombre').value.trim();
  if (nombre) {
    document.getElementById('resultado-saludo').textContent = "Hola, " + nombre + "!";
  } else {
    document.getElementById('resultado-saludo').textContent = "Por favor escribe tu nombre.";
  }
}

// 4. Mostrar mensaje en consola
function mostrarMensaje() {
  console.log("¡Hola mundo!");
  alert("Mensaje enviado a la consola. Abre la consola para verlo (F12 o Ctrl+Shift+I).");
}

// 5. Multiplicar dos números
function multiplicar(){
  const a = Number(document.getElementById('mult-num1').value);
  const b = Number(document.getElementById('mult-num2').value);
  document.getElementById('resultado-mult').textContent = 'Resultado: ' + (a * b);
}

// 6. Restar dos números
function restar(){
  const a = Number(document.getElementById('restar-num1').value);
  const b = Number(document.getElementById('restar-num2').value);
  document.getElementById('resultado-resta').textContent = 'Resultado: ' + (a - b);
}

// 7. Decir el número al cuadrado
function alCuadrado(){
  const num = Number(document.getElementById('cuadrado-num').value);
  document.getElementById('resultado-cuadrado').textContent = 'Resultado: ' + (num * num);
}

// 8. Decir si una palabra es igual a otra
function sonIguales(){
  const p1 = document.getElementById('igual-palabra1').value.trim();
  const p2 = document.getElementById('igual-palabra2').value.trim();
  const resultado = (p1 === p2) ? "Son iguales" : "No son iguales";
  document.getElementById('resultado-igualdad').textContent = resultado;
}

// 9. Mostrar mensaje personalizado
function mensajePersonalizado(){
  const nombre = document.getElementById('mp-nombre').value.trim();
  const edad = document.getElementById('mp-edad').value.trim();
  if(nombre && edad) {
    document.getElementById('resultado-mensaje-personalizado').textContent =
      "Hola, " + nombre + ". Tienes " + edad + " años.";
  } else {
    document.getElementById('resultado-mensaje-personalizado').textContent = "Por favor completa ambos campos.";
  }
}

// 10. Decir si una persona es mayor o menor de edad
function mayorDeEdad(){
  const edad = Number(document.getElementById('edad-num').value);
  if (!edad && edad !== 0) {
    document.getElementById('resultado-edad').textContent = "Por favor ingresa una edad válida.";
    return;
  }
  const resultado = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
  document.getElementById('resultado-edad').textContent = resultado;
}