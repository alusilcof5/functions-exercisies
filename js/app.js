// ===== FUNCIONES BÁSICAS =====

// Función para saludar al usuario
function saludar() {
    // Obtener el valor del input con id 'saludo-nombre' y quitar espacios extra al inicio y final
    const nombre = document.getElementById('saludo-nombre').value.trim();
    
    // Verificar si el usuario escribió un nombre (si no está vacío)
    if (nombre) {
        // Si hay nombre, mostrar saludo personalizado en el elemento con id 'resultado-saludo'
        document.getElementById('resultado-saludo').textContent = `Hola, ${nombre}!`;
    } else {
        // Si no hay nombre, mostrar mensaje pidiendo que escriba un nombre
        document.getElementById('resultado-saludo').textContent = "Por favor escribe tu nombre.";
    }
}

// Función para mostrar un mensaje en la consola del navegador
function mostrarMensaje() {
    // Escribir mensaje en la consola del navegador (F12 para ver)
    console.log("¡Hola mundo!");
    // Mostrar una alerta al usuario explicando que debe abrir la consola
    alert("Mensaje enviado a la consola. Abre la consola para verlo (F12 o Ctrl+Shift+I).");
}

// ===== OPERACIONES MATEMÁTICAS =====

// Función para sumar dos números
function sumar() {
    // Obtener el valor del primer input y convertirlo a número
    const numero1 = Number(document.getElementById('sumar-num1').value);
    // Obtener el valor del segundo input y convertirlo a número
    const numero2 = Number(document.getElementById('sumar-num2').value);
    
    // Realizar la suma de los dos números
    const resultado = numero1 + numero2;
    // Mostrar el resultado en el elemento correspondiente usando template literal
    document.getElementById('resultado-suma').textContent = `Resultado: ${resultado}`;
}

// Función para restar dos números
function restar() {
    // Obtener el primer número del input y convertirlo a tipo Number
    const numero1 = Number(document.getElementById('restar-num1').value);
    // Obtener el segundo número del input y convertirlo a tipo Number
    const numero2 = Number(document.getElementById('restar-num2').value);
    
    // Calcular la resta: numero1 menos numero2
    const resultado = numero1 - numero2;
    // Insertar el resultado en el elemento HTML con el id 'resultado-resta'
    document.getElementById('resultado-resta').textContent = `Resultado: ${resultado}`;
}

// Función para multiplicar dos números
function multiplicar() {
    // Capturar el primer número y asegurarse de que sea tipo numérico
    const numero1 = Number(document.getElementById('mult-num1').value);
    // Capturar el segundo número y asegurarse de que sea tipo numérico
    const numero2 = Number(document.getElementById('mult-num2').value);
    
    // Multiplicar los dos números usando el operador *
    const resultado = numero1 * numero2;
    // Mostrar el resultado de la multiplicación en pantalla
    document.getElementById('resultado-mult').textContent = `Resultado: ${resultado}`;
}

// Función para calcular el cuadrado de un número (elevarlo a la potencia 2)
function alCuadrado() {
    // Obtener el número del input y convertirlo a tipo numérico
    const numero = Number(document.getElementById('cuadrado-num').value);
    
    // Calcular el cuadrado multiplicando el número por sí mismo
    const resultado = numero * numero;
    // Mostrar el cuadrado del número en el elemento de resultado
    document.getElementById('resultado-cuadrado').textContent = `Resultado: ${resultado}`;
}

// ===== VERIFICACIONES Y COMPARACIONES =====

// Función para verificar si un número es par o impar
function esPar() {
    // Obtener el número del input y convertirlo a tipo Number
    const numero = Number(document.getElementById('par-num').value);
    
    // Usar el operador módulo (%) para obtener el residuo de dividir entre 2
    // Si el residuo es 0, el número es par; si no, es impar
    if (numero % 2 === 0) {
        // Si el residuo es 0, el número es par
        document.getElementById('resultado-par').textContent = "Es par";
    } else {
        // Si el residuo no es 0, el número es impar
        document.getElementById('resultado-par').textContent = "Es impar";
    }
}

// Función para comparar si dos palabras son exactamente iguales
function sonIguales() {
    // Obtener la primera palabra y quitar espacios extra
    const palabra1 = document.getElementById('igual-palabra1').value.trim();
    // Obtener la segunda palabra y quitar espacios extra
    const palabra2 = document.getElementById('igual-palabra2').value.trim();
    
    // Comparar las dos palabras usando el operador de igualdad estricta ===
    if (palabra1 === palabra2) {
        // Si son exactamente iguales, mostrar mensaje positivo
        document.getElementById('resultado-igualdad').textContent = "Son iguales";
    } else {
        // Si no son iguales, mostrar mensaje negativo
        document.getElementById('resultado-igualdad').textContent = "No son iguales";
    }
}

// Función para verificar si una persona es mayor de edad (18 años o más)
function mayorDeEdad() {
    // Obtener la edad del input y convertirla a número
    const edad = Number(document.getElementById('edad-num').value);
    
    // Verificar si la edad es un número válido y no es negativa
    // isNaN() verifica si el valor NO es un número válido
    if (isNaN(edad) || edad < 0) {
        // Si la edad no es válida, mostrar mensaje de error
        document.getElementById('resultado-edad').textContent = "Por favor ingresa una edad válida.";
        // Salir de la función sin ejecutar el resto del código
        return;
    }
    
    // Comparar la edad con 18 para determinar si es mayor de edad
    if (edad >= 18) {
        // Si tiene 18 años o más, es mayor de edad
        document.getElementById('resultado-edad').textContent = "Eres mayor de edad";
    } else {
        // Si tiene menos de 18 años, es menor de edad
        document.getElementById('resultado-edad').textContent = "Eres menor de edad";
    }
}

// Función para encontrar el mayor de dos números
function mayorDeDos() {
    // Capturar el primer número del input y convertirlo a Number
    const numero1 = Number(document.getElementById('mayor-num1').value);
    // Capturar el segundo número del input y convertirlo a Number
    const numero2 = Number(document.getElementById('mayor-num2').value);
    
    // Verificar que ambos valores sean números válidos
    // isNaN() devuelve true si el valor NO es un número
    if (isNaN(numero1) || isNaN(numero2)) {
        // Si alguno de los valores no es un número, mostrar error
        document.getElementById('resultado-mayor').textContent = "Por favor ingresa ambos números.";
        // Terminar la ejecución de la función
        return;
    }
    
    // Declarar una variable para almacenar el número mayor
    let mayor;
    // Comparar los dos números para ver cuál es mayor
    if (numero1 > numero2) {
        // Si numero1 es mayor, asignarlo a la variable mayor
        mayor = numero1;
    } else {
        // Si numero2 es mayor o son iguales, asignarlo a la variable mayor
        mayor = numero2;
    }
    
    // Mostrar cuál es el número mayor usando template literal
    document.getElementById('resultado-mayor').textContent = `El mayor es: ${mayor}`;
}

// Función para verificar si un número es positivo, negativo o cero
function posNegCero() {
    // Obtener el número del input y convertirlo a tipo Number
    const numero = Number(document.getElementById('pos-neg-cero').value);
    
    // Verificar si el valor ingresado es un número válido
    if (isNaN(numero)) {
        // Si no es un número válido, mostrar mensaje de error
        document.getElementById('resultado-posnegcero').textContent = "Por favor ingresa un número válido.";
        // Salir de la función sin continuar
        return;
    }
    
    // Declarar variable para almacenar el resultado de la clasificación
    let resultado;
    // Verificar si el número es mayor que cero (positivo)
    if (numero > 0) {
        // Asignar "Positivo" si el número es mayor que 0
        resultado = "Positivo";
    } else if (numero < 0) {
        // Asignar "Negativo" si el número es menor que 0
        resultado = "Negativo";
    } else {
        // Si no es mayor ni menor que 0, debe ser exactamente 0
        resultado = "Cero";
    }
    
    // Mostrar la clasificación del número en el elemento correspondiente
    document.getElementById('resultado-posnegcero').textContent = resultado;
}

// ===== TRABAJO CON TEXTO =====

// Función para crear un mensaje personalizado con nombre y edad
function mensajePersonalizado() {
    // Obtener el nombre del input y eliminar espacios al inicio y final
    const nombre = document.getElementById('mp-nombre').value.trim();
    // Obtener la edad del input y eliminar espacios al inicio y final
    const edad = document.getElementById('mp-edad').value.trim();
    
    // Verificar que ambos campos tengan contenido (no estén vacíos)
    // El operador && requiere que ambas condiciones sean verdaderas
    if (nombre && edad) {
        // Si ambos campos tienen contenido, crear mensaje personalizado
        document.getElementById('resultado-mensaje-personalizado').textContent = 
            `Hola, ${nombre}. Tienes ${edad} años.`;
    } else {
        // Si algún campo está vacío, pedir que complete ambos
        document.getElementById('resultado-mensaje-personalizado').textContent = 
            "Por favor completa ambos campos.";
    }
}

// Función para convertir la primera letra de un nombre a mayúscula
function primeraMayuscula() {
    // Obtener el nombre del input y quitar espacios extra
    const nombre = document.getElementById('nombre-mayuscula').value.trim();
    
    // Verificar que se haya ingresado un nombre (que no esté vacío)
    if (!nombre) {
        // Si no hay nombre, mostrar mensaje de error
        document.getElementById('resultado-mayuscula').textContent = "Por favor ingresa un nombre.";
        // Salir de la función
        return;
    }
    
    // Obtener la primera letra (posición 0) y convertirla a mayúscula
    const primeraLetra = nombre.charAt(0).toUpperCase();
    // Obtener el resto del nombre desde la posición 1 hasta el final
    const restoDelNombre = nombre.slice(1);
    // Concatenar la primera letra en mayúscula con el resto del nombre
    const resultado = primeraLetra + restoDelNombre;
    
    // Mostrar el nombre con la primera letra en mayúscula
    document.getElementById('resultado-mayuscula').textContent = resultado;
}

// Función para convertir todo un texto a letras minúsculas
function aMinusculas() {
    // Obtener el texto completo del input sin modificaciones
    const texto = document.getElementById('texto-minusculas').value;
    
    // Verificar que se haya ingresado algún texto
    if (!texto) {
        // Si no hay texto, mostrar mensaje pidiendo que ingrese texto
        document.getElementById('resultado-minusculas').textContent = "Por favor ingresa un texto.";
        // Terminar la ejecución de la función
        return;
    }
    
    // Convertir todo el texto a minúsculas usando el método toLowerCase()
    const textoEnMinusculas = texto.toLowerCase();
    // Mostrar el texto convertido a minúsculas
    document.getElementById('resultado-minusculas').textContent = textoEnMinusculas;
}

// Función para repetir una palabra un número específico de veces
function repetirPalabra() {
    // Obtener la palabra que se quiere repetir y quitar espacios extra
    const palabra = document.getElementById('palabra-repetir').value.trim();
    // Obtener cuántas veces se quiere repetir y convertir a número
    const veces = Number(document.getElementById('veces').value);
    
    // Verificar que se haya ingresado una palabra
    if (!palabra) {
        // Si no hay palabra, mostrar mensaje de error
        document.getElementById('resultado-repetir').textContent = "Por favor ingresa una palabra.";
        // Salir de la función
        return;
    }
    
    // Verificar que el número de veces sea válido (número mayor o igual a 1)
    if (isNaN(veces) || veces < 1) {
        // Si no es un número válido o es menor que 1, mostrar error
        document.getElementById('resultado-repetir').textContent = 
            "Por favor ingresa un número válido mayor o igual a 1.";
        // Terminar la función
        return;
    }
    
    // Crear una cadena vacía para ir acumulando las repeticiones
    let resultado = "";
    // Usar un loop for para repetir la palabra el número de veces especificado
    for (let i = 0; i < veces; i++) {
        // Agregar la palabra al resultado
        resultado += palabra;
        // Si no es la última repetición, agregar un espacio
        if (i < veces - 1) {
            resultado += " ";
        }
    }
    
    // Mostrar la palabra repetida el número de veces solicitado
    document.getElementById('resultado-repetir').textContent = resultado;
}

// Función para unir (concatenar) dos cadenas de texto
function concatenarCadenas() {
    // Obtener la primera cadena y quitar espacios extra
    const cadena1 = document.getElementById('cadena1').value.trim();
    // Obtener la segunda cadena y quitar espacios extra
    const cadena2 = document.getElementById('cadena2').value.trim();
    
    // Verificar que ambas cadenas tengan contenido
    // El operador || significa "O": si alguna está vacía, la condición es verdadera
    if (!cadena1 || !cadena2) {
        // Si alguna cadena está vacía, mostrar mensaje de error
        document.getElementById('resultado-concatenar').textContent = "Por favor ingresa ambas cadenas.";
        // Salir de la función
        return;
    }
    
    // Unir las dos cadenas con un espacio en el medio
    const resultado = cadena1 + " " + cadena2;
    // Mostrar las cadenas concatenadas
    document.getElementById('resultado-concatenar').textContent = resultado;
}

// ===== CONVERSIONES Y CÁLCULOS =====

// Función para convertir metros a centímetros
function metrosACentimetros() {
    // Obtener la cantidad de metros del input y convertir a número
    const metros = Number(document.getElementById('metros').value);
    
    // Verificar que el valor ingresado sea un número válido
    if (isNaN(metros)) {
        // Si no es un número válido, mostrar mensaje de error
        document.getElementById('resultado-metros').textContent = "Por favor ingresa un número válido.";
        // Terminar la ejecución de la función
        return;
    }
    
    // Convertir metros a centímetros multiplicando por 100 (1 metro = 100 cm)
    const centimetros = metros * 100;
    // Mostrar el resultado de la conversión usando template literal
    document.getElementById('resultado-metros').textContent = 
        `${metros} metros son ${centimetros} centímetros.`;
}

// Función para dar un saludo apropiado según la hora del día
function saludoHora() {
    // Obtener la hora del input y convertirla a número
    const hora = Number(document.getElementById('hora').value);
    
    // Verificar que la hora esté en el rango válido (0-23 horas)
    // Una hora válida debe ser un número entre 0 y 23 inclusive
    if (isNaN(hora) || hora < 0 || hora > 23) {
        // Si la hora no está en el rango válido, mostrar mensaje de error
        document.getElementById('resultado-hora').textContent = 
            "Por favor ingresa una hora válida entre 0 y 23.";
        // Salir de la función
        return;
    }
    
    // Declarar variable para el saludo apropiado
    let saludo;
    // Determinar el saludo basado en la hora (mañana vs tarde/noche)
    if (hora < 12) {
        // Si es antes de las 12:00 (mediodía), es mañana
        saludo = "Buenos días";
    } else {
        // Si es 12:00 o después, es tarde/noche
        saludo = "Buenas tardes";
    }
    
    // Mostrar el saludo apropiado según la hora
    document.getElementById('resultado-hora').textContent = saludo;
}

// Función para calcular el perímetro de un rectángulo
function perimetroRectangulo() {
    // Obtener la medida de la base del rectángulo y convertir a número
    const base = Number(document.getElementById('base').value);
    // Obtener la medida de la altura del rectángulo y convertir a número
    const altura = Number(document.getElementById('altura').value);
    
    // Verificar que ambos valores sean números válidos
    if (isNaN(base) || isNaN(altura)) {
        // Si alguno no es válido, mostrar mensaje de error
        document.getElementById('resultado-perimetro').textContent = 
            "Por favor ingresa base y altura válidos.";
        // Terminar la función
        return;
    }
    
    // Calcular el perímetro usando la fórmula: 2 * (base + altura)
    // El perímetro es la suma de todos los lados del rectángulo
    const perimetro = 2 * (base + altura);
    // Mostrar el resultado del cálculo del perímetro
    document.getElementById('resultado-perimetro').textContent = `El perímetro es: ${perimetro}`;
}

// ===== TRABAJO CON ARRAYS =====

// Función para sumar todos los números de una lista separada por comas
function sumarArray() {
    // Obtener la cadena de texto que contiene los números separados por comas
    const lista = document.getElementById('lista-numeros').value;
    
    // Verificar que se haya ingresado algún contenido
    if (!lista) {
        // Si no hay contenido, mostrar mensaje explicativo
        document.getElementById('resultado-suma-array').textContent = 
            "Por favor ingresa números separados por comas.";
        // Salir de la función
        return;
    }
    
    // Dividir la cadena por comas para crear un array de strings
    // Luego convertir cada string a número usando map()
    const numeros = lista.split(',').map(function(elemento) {
        // Para cada elemento del array, quitar espacios y convertir a número
        return Number(elemento.trim());
    });
    
    // Verificar que todos los elementos del array sean números válidos
    // Recorrer cada número en el array para validarlo
    for (let i = 0; i < numeros.length; i++) {
        // Si algún elemento no es un número válido
        if (isNaN(numeros[i])) {
            // Mostrar mensaje de error
            document.getElementById('resultado-suma-array').textContent = 
                "Por favor ingresa sólo números válidos.";
            // Salir de la función
            return;
        }
    }
    
    // Inicializar variable acumuladora para la suma en cero
    let suma = 0;
    // Recorrer todos los números del array para sumarlos
    for (let i = 0; i < numeros.length; i++) {
        // Agregar cada número a la suma total
        suma += numeros[i];
    }
    
    // Mostrar el resultado final de la suma
    document.getElementById('resultado-suma-array').textContent = `La suma es: ${suma}`;
}