import React from 'react';
import { Sparkles, Compass, Layers, Scale, BookmarkCheck, ArrowRight, BookOpen } from 'lucide-react';
import { CURRICULUM_SCOPES } from '../data/physicsData';

interface HeroProps {
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 border-b border-slate-200 py-10 sm:py-14">
      {/* Background scientific decorative grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Main Title Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 text-blue-800 border border-blue-200 text-xs sm:text-sm font-semibold mb-4 shadow-2xs">
            <Sparkles className="w-4 h-4 text-blue-600 animate-spin-slow" />
            <span>9. SINIF FİZİK DERSİ</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            1. DÖNEM SINAVI – TAM ÇALIŞMA ÖZETİ
          </h1>

          {/* Exact curriculum scope string from user prompt */}
          <div className="mt-4 inline-block bg-slate-900 text-slate-100 font-mono text-xs sm:text-sm font-medium px-4 py-2 rounded-xl shadow-xs">
            <span className="text-amber-400 font-bold">Kapsam: </span>
            FİZ.9.1.1 – FİZ.9.1.2 – FİZ.9.1.4 – FİZ.9.2.1 – FİZ.9.2.2 – FİZ.9.2.3
          </div>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Bu rehber, 9. sınıf fizik 1. dönem sınavının tüm konularını, formüllerini, 8 alt dalı, SI birimlerini ve aynı doğrultudaki vektörleri <strong>eksiksiz tek bir kelimesi dahi atlanmadan</strong>, interaktif simülatörler ve testlerle sunar.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#bolum-6"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition-all hover:translate-y-[-1px]"
            >
              <Compass className="w-4 h-4" />
              <span>Vektör Simülatörü</span>
            </a>

            <button
              onClick={onOpenQuiz}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold text-sm shadow-xs transition-all cursor-pointer"
            >
              <BookmarkCheck className="w-4 h-4 text-emerald-600" />
              <span>Deneme Sınavı (10 Soru)</span>
            </button>

            <a
              href="#bolum-7"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-semibold text-sm shadow-xs transition-all"
            >
              <span>24 Kritik Sınav Notu</span>
              <ArrowRight className="w-4 h-4 text-amber-700" />
            </a>
          </div>

          {/* Quick Scope Chips */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-2">
            {CURRICULUM_SCOPES.map(scope => (
              <a
                key={scope.code}
                href={`#${scope.sectionId}`}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-700 rounded-lg text-xs font-medium border border-slate-200 hover:border-blue-300 transition-colors shadow-2xs"
              >
                <span className="font-mono font-semibold text-blue-600">{scope.code}</span>
                <span>{scope.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
