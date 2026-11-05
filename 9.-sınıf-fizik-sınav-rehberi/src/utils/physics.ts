import { Direction, ResultantVector, VectorItem } from '../types/physics';

/**
 * Calculates resultant vector for vectors along the same line (East-West axis).
 * Follows curriculum rules:
 * - Same direction: R = F1 + F2 (direction same as components)
 * - Opposite direction: R = |F1 - F2| (direction of the larger vector)
 * - Equal and opposite: R = 0 (direction is none / zero)
 */
export function calculateResultant1D(f1: VectorItem, f2: VectorItem): ResultantVector {
  // Convert to signed scalar on East(+) / West(-) axis
  const v1 = f1.direction === 'Doğu' ? f1.magnitude : -f1.magnitude;
  const v2 = f2.direction === 'Doğu' ? f2.magnitude : -f2.magnitude;
  const sum = v1 + v2;

  if (sum === 0) {
    return {
      magnitude: 0,
      direction: 'Yönsüz (Sıfır)',
      isZero: true,
      explanation: 'İki vektör eşit büyüklükte ve zıt yönde olduğundan birbirini dengeler. Bileşke vektör sıfırdır.',
      formulaUsed: 'R = F₁ - F₂ = 0 N',
    };
  }

  const magnitude = Math.abs(sum);
  const direction: Direction = sum > 0 ? 'Doğu' : 'Batı';

  if (f1.direction === f2.direction) {
    return {
      magnitude,
      direction,
      isZero: false,
      explanation: `Aynı doğrultuda ve aynı yönde olan vektörler toplanır. Bileşke vektör ${magnitude} N'dur ve iki vektörle aynı yöndedir (${direction}).`,
      formulaUsed: `R = F₁ + F₂ = ${f1.magnitude} + ${f2.magnitude} = ${magnitude} N`,
    };
  }

  const largerName = f1.magnitude >= f2.magnitude ? f1.name : f2.name;
  return {
    magnitude,
    direction,
    isZero: false,
    explanation: `Aynı doğrultuda fakat zıt yönde olan vektörler çıkarılır. Bileşke vektör büyük vektörün (${largerName}) yönündedir (${direction}).`,
    formulaUsed: `R = Büyük vektör − Küçük vektör = ${Math.max(f1.magnitude, f2.magnitude)} − ${Math.min(f1.magnitude, f2.magnitude)} = ${magnitude} N (${direction})`,
  };
}

/**
 * Checks if a physical quantity is one of the 7 fundamental SI quantities.
 * M-K-S-K-A-M-C (KISA MUZ kuralı):
 * Kütle, Işık şiddeti, Sıcaklık, Akım, Madde miktarı, Uzunluk, Zaman
 */
export const FUNDAMENTAL_QUANTITIES = [
  'Uzunluk',
  'Kütle',
  'Zaman',
  'Sıcaklık',
  'Elektrik Akımı',
  'Madde Miktarı',
  'Işık Şiddeti',
] as const;

export function isFundamentalQuantity(name: string): boolean {
  const normalized = name.trim().toLowerCase();
  return FUNDAMENTAL_QUANTITIES.some(q => q.toLowerCase() === normalized);
}

/**
 * Checks if a physical quantity is a vector quantity according to curriculum.
 */
export const VECTOR_QUANTITIES = [
  'Kuvvet',
  'Hız',
  'İvme',
  'Yer Değiştirme',
  'Ağırlık',
] as const;

export function isVectorQuantity(name: string): boolean {
  const normalized = name.trim().toLowerCase();
  return VECTOR_QUANTITIES.some(q => q.toLowerCase() === normalized);
}

/**
 * Calculates completion percentage of the checklist.
 */
export function calculateProgress(totalItems: number, completedCount: number): number {
  if (totalItems <= 0) return 0;
  return Math.min(100, Math.round((completedCount / totalItems) * 100));
}
