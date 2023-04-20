import {
  AGE_RANGE,
  HISTORIC_SALES_RANGE,
  MULTIPLIER_RANGE,
} from './constants.js';

export function calcularResultado({
  userAge,
  isPremium = false,
  historicSales,
}) {
  let resultado = 0;

  if (typeof userAge !== 'number') throw new Error('userAge must be a number');
  if (isNaN(userAge)) throw new Error('userAge must be a number');

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
