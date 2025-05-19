
function saludar() {
    const nombre = document.getElementById('saludo-nombre').value.trim();
    if (nombre) {
      document.getElementById('resultado-saludo').textContent = "Hola, " + nombre + "!";
    } else {
      document.getElementById('resultado-saludo').textContent = "Por favor escribe tu nombre.";
    }
  }
  
  function mostrarMensaje() {
    console.log("¡Hola mundo!");
    alert("Mensaje enviado a la consola. Abre la consola para verlo (F12 o Ctrl+Shift+I).");
  }
function sumar() {
    const num1 = Number(document.getElementById('sumar-num1').value);
    const num2 = Number(document.getElementById('sumar-num2').value);
    document.getElementById('resultado-suma').textContent = 'Resultado: ' + (num1 + num2);
  }
  
  function esPar() {
    const numero = Number(document.getElementById('par-num').value);
    let resultado = (numero % 2 === 0) ? "Es par" : "Es impar";
    document.getElementById('resultado-par').textContent = resultado;
  }
  
  function multiplicar(){
    const a = Number(document.getElementById('mult-num1').value);
    const b = Number(document.getElementById('mult-num2').value);
    document.getElementById('resultado-mult').textContent = 'Resultado: ' + (a * b);
  }
  
  function restar(){
    const a = Number(document.getElementById('restar-num1').value);
    const b = Number(document.getElementById('restar-num2').value);
    document.getElementById('resultado-resta').textContent = 'Resultado: ' + (a - b);
  }
  
  function alCuadrado(){
    const num = Number(document.getElementById('cuadrado-num').value);
    document.getElementById('resultado-cuadrado').textContent = 'Resultado: ' + (num * num);
  }
  
  function sonIguales(){
    const p1 = document.getElementById('igual-palabra1').value.trim();
    const p2 = document.getElementById('igual-palabra2').value.trim();
    const resultado = (p1 === p2) ? "Son iguales" : "No son iguales";
    document.getElementById('resultado-igualdad').textContent = resultado;
  }
  
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
  
  function mayorDeEdad(){
    const edad = Number(document.getElementById('edad-num').value);
    if (!edad && edad !== 0) {
      document.getElementById('resultado-edad').textContent = "Por favor ingresa una edad válida.";
      return;
    }
    const resultado = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
    document.getElementById('resultado-edad').textContent = resultado;
  }
  
  // NUEVAS FUNCIONES
  
  function metrosACentimetros(){
    const metros = Number(document.getElementById('metros').value);
    if(isNaN(metros)) {
      document.getElementById('resultado-metros').textContent = "Por favor ingresa un número válido.";
      return;
    }
    const centimetros = metros * 100;
    document.getElementById('resultado-metros').textContent = metros + " metros son " + centimetros + " centímetros.";
  }
  
  function saludoHora(){
    let hora = Number(document.getElementById('hora').value);
    if(isNaN(hora) || hora < 0 || hora > 23) {
      document.getElementById('resultado-hora').textContent = "Por favor ingresa una hora válida entre 0 y 23.";
      return;
    }
    const saludo = (hora < 12) ? "Buenos días" : "Buenas tardes";
    document.getElementById('resultado-hora').textContent = saludo;
  }
  
  function primeraMayuscula(){
    const nombre = document.getElementById('nombre-mayuscula').value.trim();
    if(!nombre) {
      document.getElementById('resultado-mayuscula').textContent = "Por favor ingresa un nombre.";
      return;
    }
    const resultado = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    document.getElementById('resultado-mayuscula').textContent = resultado;
  }
  
  function mayorDeDos(){
    const num1 = Number(document.getElementById('mayor-num1').value);
    const num2 = Number(document.getElementById('mayor-num2').value);
    if(isNaN(num1) || isNaN(num2)) {
      document.getElementById('resultado-mayor').textContent = "Por favor ingresa ambos números.";
      return;
    }
    const mayor = (num1 > num2) ? num1 : num2;
    document.getElementById('resultado-mayor').textContent = "El mayor es: " + mayor;
  }
  
  function perimetroRectangulo(){
    const base = Number(document.getElementById('base').value);
    const altura = Number(document.getElementById('altura').value);
    if(isNaN(base) || isNaN(altura)) {
      document.getElementById('resultado-perimetro').textContent = "Por favor ingresa base y altura válidos.";
      return;
    }
    const perimetro = 2 * (base + altura);
    document.getElementById('resultado-perimetro').textContent = "El perímetro es: " + perimetro;
  }
  
  function posNegCero(){
    const num = Number(document.getElementById('pos-neg-cero').value);
    if(isNaN(num)) {
      document.getElementById('resultado-posnegcero').textContent = "Por favor ingresa un número válido.";
      return;
    }
    let resultado;
    if (num > 0) resultado = "Positivo";
    else if (num < 0) resultado = "Negativo";
    else resultado = "Cero";
    document.getElementById('resultado-posnegcero').textContent = resultado;
  }
  
  function repetirPalabra(){
    const palabra = document.getElementById('palabra-repetir').value.trim();
    const veces = Number(document.getElementById('veces').value);
    if(!palabra) {
      document.getElementById('resultado-repetir').textContent = "Por favor ingresa una palabra.";
      return;
    }
    if(isNaN(veces) || veces < 1) {
      document.getElementById('resultado-repetir').textContent = "Por favor ingresa un número válido mayor o igual a 1.";
      return;
    }
    const resultado = Array(veces).fill(palabra).join(' ');
    document.getElementById('resultado-repetir').textContent = resultado;
  }
  
  function aMinusculas(){
    const texto = document.getElementById('texto-minusculas').value;
    if(!texto) {
      document.getElementById('resultado-minusculas').textContent = "Por favor ingresa un texto.";
      return;
    }
    document.getElementById('resultado-minusculas').textContent = texto.toLowerCase();
  }
  
  function sumarArray(){
    const lista = document.getElementById('lista-numeros').value;
    if(!lista) {
      document.getElementById('resultado-suma-array').textContent = "Por favor ingresa números separados por comas.";
      return;
    }
    const numeros = lista.split(',').map(n => Number(n.trim()));
    if(numeros.some(isNaN)) {
      document.getElementById('resultado-suma-array').textContent = "Por favor ingresa sólo números válidos.";
      return;
    }
    const suma = numeros.reduce((acc, val) => acc + val, 0);
    document.getElementById('resultado-suma-array').textContent = "La suma es: " + suma;
  }
  
  function concatenarCadenas(){
    const c1 = document.getElementById('cadena1').value.trim();
    const c2 = document.getElementById('cadena2').value.trim();
    if(!c1 || !c2) {
      document.getElementById('resultado-concatenar').textContent = "Por favor ingresa ambas cadenas.";
      return;
    }
    document.getElementById('resultado-concatenar').textContent = c1 + " " + c2;
  }