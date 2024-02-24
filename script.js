alert(
  "Para continuar con el metodo de pago ingrese el número de compra que enviamos a su correo."
);

let numCompra = Number(prompt("Número de compra: "));
alert("El número ingresado es correcto, puede seguir al metódo de pago");

function saludar(nombre, apellido) {
  alert(
    "¡Hola " +
      nombre +
      " " +
      apellido +
      "!" +
      " Estamos procesando su compra, espere unos instantes... "
  );
}
saludar("Toto", "Perez");

let monto = Number(prompt("Ingrese el monto de su compra"));

do {
  opcion = Number(
    prompt(
      "Ingrese el metodo de pago:\n1 - Efectivo 10%\n2 - Transferencia %15\n3 - 3 cuotas sin interés\n4 - Salir "
    )
  );
  if (opcion === 1) {
    let opcion1 = monto * (10 / 100);
    alert(
      "El total de su compra en efectivo a abonar es: $ " + (monto - opcion1)
    );
  } else if (opcion === 2) {
    let opcion2 = monto * (15 / 100);
    alert(
      "El total de su compra por transferencia a abonar es: $ " +
        (monto - opcion2)
    );
  } else if (opcion === 3) {
    let opcion3 = Number((monto / 3).toFixed(2));
    alert(
      "El total de su compra en 3 cuotas a abonar es: $ " +
        opcion3 +
        " cada cuota."
    );
  } else if (opcion === 4 || isNaN(opcion))
    alert("Usted ha salido del metodo de pago. ");
  break;
} while (opcion !== 0);

function descuento(monto, porcentaje) {
  return (monto * porcentaje) / 100 - monto;
}

descuento(opcion, monto);
