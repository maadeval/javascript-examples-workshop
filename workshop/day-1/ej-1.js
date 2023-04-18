function calcularResultado(usuario) {
  let resultado = 0;

  if (usuario.edad > 18 && usuario.edad < 30) {
    resultado = 100;
  } else if (usuario.edad >= 30 && usuario.edad < 50) {
    resultado = 200;
  } else if (usuario.edad >= 50 && usuario.edad < 70) {
    resultado = 300;
  } else if (usuario.edad >= 70) {
    resultado = 400;
  }

  if (usuario.esPremium) {
    resultado *= 2;
  }

  if (usuario.historialCompras.length > 5) {
    resultado += 50;
  }
  if (usuario.historialCompras.length > 10) {
    resultado += 100;
  }
  if (usuario.historialCompras.length > 15) {
    resultado += 200;
  }

  return resultado;
}

const results = calcularResultado({
  edad: 20,
  esPremium: false,
  historialCompras: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
});

console.log({ results });
