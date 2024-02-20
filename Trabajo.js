////Sección 1////
const nombres = ["Ana", "Juan", "Pedro", "María", "José"];
for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}
// Imprimir la longitud del array
console.log(nombres.length); // 5

////Sección 2////
const arrayVacio = []

const nombres = ["Ana", "Juan", "Pedro", "María", "José"];
// Agregar "Push" al final del array
nombres.push("Puse");
console.log(nombres); // ["Ana", "Juan", "Pedro", "María", "José", "Puse"]
const nombres = ["Ana", "Juan", "Pedro", "María", "José"];
nombres.length = 4;
console.log(nombres);
console.log( nombres.at(-0))
document.write(nombres);  

////seccion 3////
const casa = [ "mueble", "cocina", "patio", "cuarto", "1", "2", "3", 
"4","hay agua", "no hay agua" ]
const array = [ "mueble", "cocina", "patio", "cuarto", "1", "2", "3", "4",
 "hay agua", "no hay agua"]
 const valor = "patio";
 const resultado = array.find(element => element === valor);
if resultado {
  console.log(`el elemento `${valor}`se encuentra en el array`);
} else {
  console.log(`el elemento `${valor}`no se encuentra en el array`);
}
String[] casa = {"mueble", "cocina", "patio", "cuarto", "1", "2", "3", 
"4","hay agua", "no hay agua"};
arrays.toString(array);

////seccion 4////
// Importar librería para números aleatorios
const random = require('random');

// Definir tamaño del array
const tamanioArray = 10;

// Crear array vacío
const pc = [];

// Llenar array con números aleatorios
for (let i = 0; i < tamanioArray; i++) {
  array.push(random.int(1, 100));
}

// Imprimir array original
console.log(`Array original: ${array}`);
// Ordenar array ascendente
array.sort((a, b) => a - b);

// Imprimir array ordenado ascendente
console.log(`Array ordenado ascendente: ${array}`);
// Invertir array para obtener orden descendente
array.reverse();

// Imprimir array ordenado descendente
console.log(`Array ordenado descendente: ${array}`);

////seccion 5////
const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Juan", edad: 18 },
  { nombre: "María", edad: 32 },
  { nombre: "Pedro", edad: 15 },
  { nombre: "Laura", edad: 21 },
];

// Edad mínima para ser considerado mayor de edad
const edadMinima = 18;

// Filtrar array para obtener solo los nombres de las personas mayores de edad
const nombresMayoresEdad = personas.filter(persona => persona.edad >= edadMinima).map(persona => persona.nombre);

// Imprimir nombres de las personas mayores de edad
console.log("Nombres de las personas mayores de edad:");
nombresMayoresEdad.forEach(nombre => console.log(nombre));

// Mostrar un mensaje con cada nombre
console.log("\nMostrando un mensaje con cada nombre:");
nombresMayoresEdad.forEach(nombre => console.log(`¡Hola ${nombre}, eres mayor de edad!`));

////seccion 6////
const array1 = ["Manzana", "Naranja", "Plátano"];
const array2 = ["Fresa", "Kiwi", "Uva"];

// Combinar arrays
const arrayCombinado = [...array1, ...array2];

////seccion 7////
// Imprimir array combinado
console.log("Array combinado:", arrayCombinado);
const arrayConDuplicados = ["Manzana", "Naranja", "Plátano", "Manzana", "Fresa", "Kiwi", "Uva", "Kiwi"];

// Eliminar elementos duplicados
const arraySinDuplicados = [...new Set(arrayConDuplicados)];

// Imprimir array sin duplicados
console.log("Array sin duplicados:", arraySinDuplicados);

////seccion 8////
const numeros = [10, 2, 5, 8, 1, 9, 3, 7, 6, 4];

// Encontrar valor máximo
const valorMaximo = Math.max(...numeros);

// Encontrar valor mínimo
const valorMinimo = Math.min(...numeros);

// Imprimir valores máximo y mínimo
console.log(`Valor máximo: ${valorMaximo}`);
console.log(`Valor mínimo: ${valorMinimo}`);

////seccion 9////

const productos = [
  { nombre: "Manzana", color: "Rojo" },
  { nombre: "Naranja", color: "Naranja" },
  { nombre: "Plátano", color: "Amarillo" },
  { nombre: "Fresa", color: "Rojo" },
  { nombre: "Kiwi", color: "Verde" },
  { nombre: "Uva", color: "Morado" },
];

// Agrupar productos por color
const productosPorColor = productos.reduce((acumulador, producto) => {
  const color = producto.color;
  acumulador[color] = acumulador[color] || [];
  acumulador[color].push(producto);
  return acumulador;
}, {});

// Imprimir productos agrupados por color//
console.log("Productos agrupados por color:", productosPorColor);

////seccion 10////
const Frutas = ["Manzana", 10, true, { nombre: "Juan" }];

// Convertir array en objeto
const objeto = array.reduce((acumulador, elemento, indice) => {
  acumulador[`elemento${indice}`] = elemento;
  return acumulador;
}, {});

// Imprimir objeto
console.log("Objeto:", objeto);

////seccion 11////
function agregarProducto(nombre, descripcion, precio, stock, categoria) {
  const nuevoProducto = {
    nombre,
    descripcion,
    precio,
    stock,
    categoria,
  };

  productos.push(nuevoProducto);
  console.log(`Producto "${nombre}" agregado correctamente.`);
}

function listarProductos() {
  if (productos.length === 0) {
    console.log("No hay productos en el inventario.");
    return;
  }

  console.log("**Listado de productos:**");
  productos.forEach((producto) => {
    mostrarInformacionProducto(producto);
  });
}

function buscarProducto(nombre) {
  const productoEncontrado = productos.find((producto) => producto.nombre === nombre);

  if (!productoEncontrado) {
    console.log(`No se encontró el producto "${nombre}".`);
    return;
  }

  mostrarInformacionProducto(productoEncontrado);
}

function eliminarProducto(nombre) {
  const indiceProducto = productos.findIndex((producto) => producto.nombre === nombre);

  if (indiceProducto === -1) {
    console.log(`No se encontró el producto "${nombre}".`);
    return;
  }

  productos.splice(indiceProducto, 1);
  console.log(`Producto "${nombre}" eliminado correctamente.`);
}

function actualizarStock(nombre, nuevoStock) {
  const productoEncontrado = productos.find((producto) => producto.nombre === nombre);

  if (!productoEncontrado) {
    console.log(`No se encontró el producto "${nombre}".`);
    return;
  }

  productoEncontrado.stock = nuevoStock;
  console.log(`Cantidad en stock del producto "${nombre}" actualizada a ${nuevoStock}.`);
}

////ejercicio 1////
// Variables
let cliente = {
  documento: "",
  pin: "",
  cuentas: []
};
let transaccion = {
  tipo: "",
  monto: 0,
  cuentaOrigen: "",
  cuentaDestino: ""
};

// Función para iniciar el cajero
function iniciarCajero() {
  // Ingreso de datos del cliente
  cliente.documento = prompt("Ingrese su número de documento: ");
  cliente.pin = prompt("Ingrese su PIN: ");

  // Validación con el banco
  if (validarCliente(cliente.documento, cliente.pin)) {
    // Mostrar menú de transacciones
    while (true) {
      mostrarMenu();
      let opcion = prompt("Seleccione una opción: ");
      procesarTransaccion(opcion);

      // Salir del bucle si el cliente no desea más transacciones
      if (!confirm("¿Desea realizar otra transacción?")) {
        break;
      }
    }
  } else {
    alert("**Error:** PIN incorrecto. Intente nuevamente.");
  }
}

// Función para mostrar el menú de transacciones
function mostrarMenu() {
  console.log("**Menú de transacciones:**");
  console.log("1. Retiro de efectivo");
  console.log("2. Depósito");
  console.log("3. Transferencia");
  console.log("4. Consulta de saldo");
}

// Función para procesar la transacción seleccionada
function procesarTransaccion(opcion) {
  switch (opcion) {
    case "1":
      transaccion.tipo = "retiro";
      transaccion.monto = parseInt(prompt("Ingrese el monto a retirar: "));
      transaccion.cuentaOrigen = prompt("Ingrese la cuenta de origen: ");
      if (solicitarAprobacionBanco(transaccion)) {
        realizarRetiro(transaccion);
      } else {
        alert("**Error:** La transacción no fue aprobada por el banco.");
      }
      break;
    case "2":
      transaccion.tipo = "deposito";
      transaccion.monto = parseInt(prompt("Ingrese el monto a depositar: "));
      transaccion.cuentaDestino = prompt("Ingrese la cuenta de destino: ");
      realizarDeposito(transaccion);
      break;
    case "3":
      transaccion.tipo = "transferencia";
      transaccion.monto = parseInt(prompt("Ingrese el monto a transferir: "));
      transaccion.cuentaOrigen = prompt("Ingrese la cuenta de origen: ");
      transaccion.cuentaDestino = prompt("Ingrese la cuenta de destino: ");
      realizarTransferencia(transaccion);
      break;
    case "4":
      let cuentaConsulta = prompt("Ingrese la cuenta a consultar: ");
      let saldo = consultarSaldo(cuentaConsulta);
      alert(`El saldo de la cuenta ${cuentaConsulta} es: ${saldo}`);
      break;
    default:
      alert("**Error:** Opción inválida.");
  }
}

// Funciones para realizar cada tipo de transacción (retiro, depósito, transferencia, consulta)
// ...

// Función para solicitar aprobación al banco
function solicitarAprobacionBanco(transaccion) {
  // Simulación de la comunicación con el banco

////ejercicio 2////
// Variables para las habitaciones
const habitaciones = {
  individual: {
    disponibles: 3,
    maxPersonas: 1,
    aceptaMascotas: false,
  },
  doble: {
    disponibles: 3,
    maxPersonas: 2,
    aceptaMascotas: false,
  },
  familiar: {
    disponibles: 3,
    maxPersonas: 6,
    aceptaMascotas: true,
  },
};

// Variable para las reservas
let reservas = [];

// Función para registrar una nueva reserva
function registrarReserva(nombre, pais, personas, inicio, fin, tipoHabitacion, mascota) {
  // Validar disponibilidad
  if (!validarDisponibilidad(tipoHabitacion, personas)) {
    return "Lo siento, no hay habitaciones disponibles para la fecha y tipo de habitación seleccionados.";
  }

  // Validar número de personas
  if (personas > habitaciones[tipoHabitacion].maxPersonas) {
    return `El número máximo de personas para una habitación ${tipoHabitacion} es ${habitaciones[tipoHabitacion].maxPersonas}.`;
  }

  // Validar mascotas
  if (mascota && !habitaciones[tipoHabitacion].aceptaMascotas) {
    return "Lo siento, las mascotas no están permitidas en habitaciones " + tipoHabitacion + ".";
  }

  // Registrar la reserva
  const nuevaReserva = {
    nombre,
    pais,
    personas,
    inicio,
    fin,
    tipoHabitacion,
    mascota,
  };
  reservas.push(nuevaReserva);
  habitaciones[tipoHabitacion].disponibles--;

  // Actualizar estadísticas
  actualizarEstadisticas(nuevaReserva);

  return "Reserva registrada exitosamente.";
}

// Función para consultar disponibilidad de habitaciones
function consultarDisponibilidad(tipoHabitacion, personas) {
  return habitaciones[tipoHabitacion].disponibles > 0 && personas <= habitaciones[tipoHabitacion].maxPersonas;
}

// Función para modificar una reserva
function modificarReserva(nombre, nuevaFechaInicio, nuevaFechaFin) {
  // Buscar la reserva
  const indiceReserva = reservas.findIndex((reserva) => reserva.nombre === nombre);
  if (indiceReserva === -1) {
    return "No se encontró una reserva a nombre de " + nombre + ".";
  }

  // Modificar la reserva
  reservas[indiceReserva].inicio = nuevaFechaInicio;
  reservas[indiceReserva].fin = nuevaFechaFin;

  return "Reserva modificada exitosamente.";
}

// Función para cancelar una reserva
function cancelarReserva(nombre) {
  // Buscar la reserva
  const indiceReserva = reservas.findIndex((reserva) => reserva.nombre === nombre);
  if (indiceReserva === -1) {
    return "No se encontró una reserva a nombre de " + nombre + ".";
  }

  // Eliminar la reserva
  const tipoHabitacion = reservas[indiceReserva].tipoHabitacion;
  habitaciones[tipoHabitacion].disponibles++;
  reservas.splice(indiceReserva, 1);

  // Actualizar estadísticas
  actualizarEstadisticas(reservas[indiceReserva], true);

  return "Reserva cancelada exitosamente.";
}

// Función para ver las estadísticas de reservas
function verEstadisticas() {
  // Implementar la lógica para mostrar las estadísticas
}

// Función para actualizar las estadísticas
function actualizarEstadisticas(nuevaReserva, cancelar = false) {
  // Implementar la lógica para actualizar las estadísticas
}