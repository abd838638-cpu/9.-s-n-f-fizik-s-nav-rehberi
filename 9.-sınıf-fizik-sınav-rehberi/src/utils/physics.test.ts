import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateResultant1D,
  isFundamentalQuantity,
  isVectorQuantity,
  calculateProgress,
} from './physics';

test('Vector calculation - Same direction addition (curriculum example: 5N + 8N)', () => {
  const f1 = { id: '1', name: 'F₁', magnitude: 5, direction: 'Doğu' as const, color: 'blue' };
  const f2 = { id: '2', name: 'F₂', magnitude: 8, direction: 'Doğu' as const, color: 'emerald' };

  const res = calculateResultant1D(f1, f2);
  assert.equal(res.magnitude, 13);
  assert.equal(res.direction, 'Doğu');
  assert.equal(res.isZero, false);
  assert.match(res.formulaUsed, /R = F₁ \+ F₂/);
});

test('Vector calculation - Opposite direction subtraction (curriculum example: 12N East, 7N West)', () => {
  const f1 = { id: '1', name: 'F₁', magnitude: 12, direction: 'Doğu' as const, color: 'blue' };
  const f2 = { id: '2', name: 'F₂', magnitude: 7, direction: 'Batı' as const, color: 'emerald' };

  const res = calculateResultant1D(f1, f2);
  assert.equal(res.magnitude, 5);
  assert.equal(res.direction, 'Doğu');
  assert.equal(res.isZero, false);
});

test('Vector calculation - Equal and opposite balance (curriculum example: 10N East, 10N West)', () => {
  const f1 = { id: '1', name: 'F₁', magnitude: 10, direction: 'Doğu' as const, color: 'blue' };
  const f2 = { id: '2', name: 'F₂', magnitude: 10, direction: 'Batı' as const, color: 'emerald' };

  const res = calculateResultant1D(f1, f2);
  assert.equal(res.magnitude, 0);
  assert.equal(res.direction, 'Yönsüz (Sıfır)');
  assert.equal(res.isZero, true);
});

test('Physical quantities classification - Fundamental vs Derived', () => {
  assert.equal(isFundamentalQuantity('Kütle'), true);
  assert.equal(isFundamentalQuantity('Uzunluk'), true);
  assert.equal(isFundamentalQuantity('Zaman'), true);
  assert.equal(isFundamentalQuantity('Sıcaklık'), true);
  assert.equal(isFundamentalQuantity('Kuvvet'), false);
  assert.equal(isFundamentalQuantity('Hız'), false);
  assert.equal(isFundamentalQuantity('Enerji'), false);
});

test('Physical quantities classification - Scalar vs Vector', () => {
  assert.equal(isVectorQuantity('Kuvvet'), true);
  assert.equal(isVectorQuantity('Hız'), true);
  assert.equal(isVectorQuantity('İvme'), true);
  assert.equal(isVectorQuantity('Yer Değiştirme'), true);
  assert.equal(isVectorQuantity('Ağırlık'), true);
  assert.equal(isVectorQuantity('Sürat'), false);
  assert.equal(isVectorQuantity('Kütle'), false);
  assert.equal(isVectorQuantity('Zaman'), false);
});

test('Progress calculation', () => {
  assert.equal(calculateProgress(11, 0), 0);
  assert.equal(calculateProgress(11, 11), 100);
  assert.equal(calculateProgress(10, 5), 50);
});
