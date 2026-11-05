export type Direction = 'Doğu' | 'Batı';

export interface VectorItem {
  id: string;
  name: string;
  magnitude: number;
  direction: Direction;
  color: string;
}

export interface ResultantVector {
  magnitude: number;
  direction: Direction | 'Yönsüz (Sıfır)';
  isZero: boolean;
  explanation: string;
  formulaUsed: string;
}

export interface SubBranch {
  id: string;
  name: string;
  curriculumCode: string;
  description: string;
  keywords: string[];
  examples: string[];
  icon: string;
  color: string;
  accentBg: string;
}

export interface Institution {
  code: string;
  name: string;
  scope: 'Türkiye' | 'Uluslararası';
  description: string;
  logoText: string;
  tag: string;
}

export interface PhysicalQuantity {
  name: string;
  unit: string;
  symbol: string;
  type: 'Temel' | 'Türetilmiş';
  category: 'Skaler' | 'Vektörel';
}

export interface QuizQuestion {
  id: number;
  curriculum: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  curriculum: string;
}
