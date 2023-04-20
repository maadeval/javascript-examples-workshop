const AGE_RANGE = {
  70: 400,
  50: 300,
  30: 200,
  19: 100,
};

const HISTORIC_SALES_RANGE = {
  5: 50,
  10: 100,
  15: 200,
};

const MULTIPLIER_RANGE = 2;

function calcularResultado({ userAge, isPremium = false, historicSales }) {
  let resultado = 0;

  for (const ageRange in AGE_RANGE) {
    if (userAge >= Number(ageRange)) {
      resultado = AGE_RANGE[ageRange];
    }
  }

  if (isPremium) resultado *= MULTIPLIER_RANGE;

  const historicSalesCount = historicSales.length;
  for (const historicSalesRange in HISTORIC_SALES_RANGE) {
    if (historicSalesCount > Number(historicSalesRange)) {
      resultado += HISTORIC_SALES_RANGE[historicSalesRange];
    }
  }

  return resultado;
}

const results = calcularResultado({
  isPremium: true,
  historicSales: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  userAge: 18,
});

console.log({ results });
