import React, { useState } from 'react';
import { EXAM_CRITICAL_POINTS } from '../data/physicsData';
import { Bookmark, Sparkles, Layers, ListOrdered, ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';

export const Section7ImportantFacts: React.FC = () => {
  const [viewMode, setViewMode] = useState<'list' | 'flashcard'>('list');
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const nextCard = () => {
    setIsFlipped(false);
    setActiveCardIndex(prev => (prev + 1) % EXAM_CRITICAL_POINTS.length);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setActiveCardIndex(prev => (prev - 1 + EXAM_CRITICAL_POINTS.length) % EXAM_CRITICAL_POINTS.length);
  };

  return (
    <section id="bolum-7" className="py-12 bg-white border-b border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-800 text-xs font-mono font-semibold mb-2">
              Sınav Öncesi Hızlı Tekrar
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              7. SINAV İÇİN EN ÖNEMLİ BİLGİLER
            </h2>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'list'
                  ? 'bg-white text-blue-700 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ListOrdered className="w-3.5 h-3.5" />
              <span>Tam Liste (24 Madde)</span>
            </button>
            <button
              onClick={() => setViewMode('flashcard')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'flashcard'
                  ? 'bg-white text-blue-700 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Kart / Flashcard Modu</span>
            </button>
          </div>
        </div>

        {/* Verbatim subheader */}
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 mb-8 flex items-center gap-3">
          <Bookmark className="w-5 h-5 text-amber-700 shrink-0" />
          <p className="text-sm sm:text-base font-bold text-amber-950">
            Bu bölümü sınavdan önce mutlaka tekrar et!
          </p>
        </div>

        {/* View Mode: List */}
        {viewMode === 'list' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {EXAM_CRITICAL_POINTS.map((fact, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-amber-300 hover:shadow-xs transition-all flex items-start gap-3"
              >
                <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-bold font-mono text-xs flex items-center justify-center shrink-0 border border-amber-200">
                  {index + 1}
                </span>
                <p className="text-sm font-semibold text-slate-800 leading-snug pt-0.5">
                  {fact}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* View Mode: Interactive Flashcard */}
        {viewMode === 'flashcard' && (
          <div className="max-w-xl mx-auto text-center">
            <div className="text-xs font-semibold text-slate-500 mb-3 flex items-center justify-between">
              <span>Kart {activeCardIndex + 1} / {EXAM_CRITICAL_POINTS.length}</span>
              <span className="text-blue-600 font-mono">Boşluğa tıklayarak çevirin</span>
            </div>

            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="min-h-[220px] p-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50/70 to-white shadow-md flex flex-col items-center justify-center cursor-pointer select-none transition-all hover:shadow-lg"
            >
              <span className="w-10 h-10 rounded-full bg-amber-200 text-amber-950 font-bold text-sm flex items-center justify-center mb-4">
                #{activeCardIndex + 1}
              </span>

              <p className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                {EXAM_CRITICAL_POINTS[activeCardIndex]}
              </p>

              <span className="text-xs text-amber-700 font-semibold mt-4">
                {isFlipped ? '✓ Bilgiyi hatırla ve ezberle!' : 'Kavramı zihninde doğrula'}
              </span>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                onClick={prevCard}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-bold flex items-center gap-1 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Önceki Kart</span>
              </button>

              <button
                onClick={nextCard}
                className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold flex items-center gap-1 cursor-pointer shadow-xs"
              >
                <span>Sonraki Kart</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
