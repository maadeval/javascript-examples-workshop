import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { calcularResultado } from './ej-1.js';

describe('calcularResultado', () => {
  it('should return 100 for a user with age 19', () => {
    const result = calcularResultado({
      userAge: 19,
      isPremium: false,
      historicSales: [],
    });
    assert.strictEqual(result, 100);
  });

  it('should return error if pass NaN as userAge', () => {
    assert.throws(() => {
      calcularResultado({
        userAge: NaN,
        isPremium: false,
        historicSales: [],
      });
    });
  });

  it('should return error if pass a string as userAge', () => {
    assert.throws(() => {
      calcularResultado({
        userAge: '19',
        isPremium: false,
        historicSales: [],
      });
    });
  });
});
