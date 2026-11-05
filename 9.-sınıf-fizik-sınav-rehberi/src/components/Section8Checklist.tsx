import React, { useState, useEffect } from 'react';
import { CHECKLIST_ITEMS } from '../data/physicsData';
import { CheckCircle2, Circle, Trophy, Award, Sparkles, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Section8ChecklistProps {
  checkedIds: string[];
  onToggleItem: (id: string) => void;
  onSelectAll: () => void;
  onResetAll: () => void;
}

export const Section8Checklist: React.FC<Section8ChecklistProps> = ({
  checkedIds,
  onToggleItem,
  onSelectAll,
  onResetAll,
}) => {
  const total = CHECKLIST_ITEMS.length;
  const count = checkedIds.length;
  const percentage = Math.round((count / total) * 100);

  useEffect(() => {
    if (count === total && total > 0) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [count, total]);

  return (
    <section id="bolum-8" className="py-12 bg-slate-50/80 border-b border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-mono font-semibold mb-2">
              Öz Değerlendirme & Hazırlık
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              8. KENDİNİ TEST ET – SINAV ÖNCESİ KONTROL LİSTESİ
            </h2>
          </div>
          <span className="text-sm text-slate-500 font-medium">Bölüm 8 / 8</span>
        </div>

        {/* Verbatim Subtext */}
        <p className="text-slate-700 text-base font-medium mb-6">
          Aşağıdaki bilgileri ezberlediğinden ve anladığından emin ol.
        </p>

        {/* Progress HUD */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Sınav Hazırlık Durumu
              </span>
              <div className="text-2xl font-black text-slate-900 flex items-center gap-2">
                <span>%{percentage}</span>
                <span className="text-sm font-semibold text-slate-500">
                  ({count} / {total} Tamamlandı)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onSelectAll}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 transition-colors cursor-pointer"
              >
                Tümünü İşaretle
              </button>
              <button
                onClick={onResetAll}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 transition-colors cursor-pointer flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Sıfırla</span>
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Checklist Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
          {CHECKLIST_ITEMS.map(item => {
            const isChecked = checkedIds.includes(item.id);
            return (
              <label
                key={item.id}
                onClick={() => onToggleItem(item.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                  isChecked
                    ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950 shadow-2xs'
                    : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
                }`}
              >
                <div className="pt-0.5 shrink-0">
                  {isChecked ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                  ) : (
                    <Circle className="w-5 h-5 text-slate-400" />
                  )}
                </div>
                <div className="flex-1">
                  <span className="text-sm font-semibold leading-snug block">{item.text}</span>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase mt-1 block">
                    {item.curriculum}
                  </span>
                </div>
              </label>
            );
          })}
        </div>

        {/* BAŞARILAR! and Final Motivational Message (Verbatim from Prompt) */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white shadow-xl text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-md mb-4 text-amber-300">
              <Trophy className="w-8 h-8" />
            </div>

            <h3 className="text-3xl sm:text-4xl font-black tracking-tight mb-4 text-amber-300">
              BAŞARILAR!
            </h3>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
              <strong className="text-white">Unutma:</strong> Fizikte başarılı olmak için sadece ezberlemek yeterli değildir. Kavramları anlamak, örnekleri çözmek ve bilgileri doğru şekilde kullanmak gerekir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
