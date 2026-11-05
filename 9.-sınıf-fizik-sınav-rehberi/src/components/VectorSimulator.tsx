import React, { useState } from 'react';
import { Direction, VectorItem } from '../types/physics';
import { calculateResultant1D } from '../utils/physics';
import { ArrowLeft, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';

export const VectorSimulator: React.FC = () => {
  const [f1Mag, setF1Mag] = useState<number>(5);
  const [f1Dir, setF1Dir] = useState<Direction>('Doğu');

  const [f2Mag, setF2Mag] = useState<number>(8);
  const [f2Dir, setF2Dir] = useState<Direction>('Doğu');

  const f1: VectorItem = {
    id: 'f1',
    name: 'F₁',
    magnitude: f1Mag,
    direction: f1Dir,
    color: '#2563eb', // Blue
  };

  const f2: VectorItem = {
    id: 'f2',
    name: 'F₂',
    magnitude: f2Mag,
    direction: f2Dir,
    color: '#059669', // Emerald
  };

  const resultant = calculateResultant1D(f1, f2);

  // Preset loaders for the 3 textbook examples
  const loadPreset = (type: 1 | 2 | 3) => {
    if (type === 1) {
      // Örnek 1: F1=5N, F2=8N same direction
      setF1Mag(5);
      setF1Dir('Doğu');
      setF2Mag(8);
      setF2Dir('Doğu');
    } else if (type === 2) {
      // Örnek 2: F1=12N Doğu, F2=7N Batı
      setF1Mag(12);
      setF1Dir('Doğu');
      setF2Mag(7);
      setF2Dir('Batı');
    } else {
      // Örnek 3: F1=10N Doğu, F2=10N Batı
      setF1Mag(10);
      setF1Dir('Doğu');
      setF2Mag(10);
      setF2Dir('Batı');
    }
  };

  // Canvas visual scaling
  // Center is x = 300, max scale: 20N = 220px, so 11px per Newton
  const centerX = 300;
  const scale = 11;

  const f1Len = f1Mag * scale;
  const f2Len = f2Mag * scale;
  const rLen = resultant.magnitude * scale;

  return (
    <div className="bg-white rounded-2xl border-2 border-indigo-200 shadow-md p-5 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-slate-100 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 block">
            İnteraktif Laboratuvar
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
            Aynı Doğrultuda Vektör & Bileşke Simülatörü
          </h3>
        </div>

        {/* Example Presets */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-semibold text-slate-500 mr-1 hidden sm:inline">
            Örnekleri Yükle:
          </span>
          <button
            onClick={() => loadPreset(1)}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200 transition-colors cursor-pointer"
          >
            Örnek 1 (5N + 8N)
          </button>
          <button
            onClick={() => loadPreset(2)}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 transition-colors cursor-pointer"
          >
            Örnek 2 (12N − 7N)
          </button>
          <button
            onClick={() => loadPreset(3)}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-purple-50 text-purple-800 hover:bg-purple-100 border border-purple-200 transition-colors cursor-pointer"
          >
            Örnek 3 (10N = 10N)
          </button>
        </div>
      </div>

      {/* SVG Canvas for Vector Display */}
      <div className="w-full bg-slate-900 rounded-xl p-4 sm:p-6 text-white overflow-x-auto shadow-inner mb-6">
        <div className="min-w-[580px]">
          {/* Axis Header */}
          <div className="flex justify-between text-xs font-mono text-slate-400 mb-2 px-4">
            <span className="flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> BATI (−)
            </span>
            <span className="font-bold text-slate-300">Doğu-Batı Doğrultusu</span>
            <span className="flex items-center gap-1">
              DOĞU (+) <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <svg viewBox="0 0 600 240" className="w-full h-auto select-none">
            {/* Grid Lines */}
            <defs>
              <pattern id="grid" width="22" height="22" patternUnits="userSpaceOnUse">
                <path d="M 22 0 L 0 0 0 22" fill="none" stroke="#1e293b" strokeWidth="0.8" />
              </pattern>
              {/* Arrow Markers */}
              <marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#3b82f6" />
              </marker>
              <marker id="arrow-emerald" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#10b981" />
              </marker>
              <marker id="arrow-purple" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#a855f7" />
              </marker>
            </defs>

            <rect width="600" height="240" fill="url(#grid)" />

            {/* Central Axis Zero Line */}
            <line x1={centerX} y1="10" x2={centerX} y2="230" stroke="#475569" strokeWidth="1.5" strokeDasharray="4 4" />
            <text x={centerX} y="235" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="monospace">
              Başlangıç Noktası (0)
            </text>

            {/* F1 Vector Row */}
            <g transform="translate(0, 50)">
              <text x="30" y="5" fill="#93c5fd" fontSize="13" fontWeight="bold">
                F₁ = {f1Mag} N ({f1Dir})
              </text>
              {/* Reference Baseline */}
              <line x1="50" y1="15" x2="550" y2="15" stroke="#334155" strokeWidth="1" />
              {/* Vector Arrow */}
              {f1Dir === 'Doğu' ? (
                <>
                  <line
                    x1={centerX}
                    y1="15"
                    x2={centerX + f1Len}
                    y2="15"
                    stroke="#3b82f6"
                    strokeWidth="4"
                    markerEnd="url(#arrow-blue)"
                  />
                  <circle cx={centerX} cy="15" r="4" fill="#3b82f6" />
                </>
              ) : (
                <>
                  <line
                    x1={centerX}
                    y1="15"
                    x2={centerX - f1Len}
                    y2="15"
                    stroke="#3b82f6"
                    strokeWidth="4"
                    markerEnd="url(#arrow-blue)"
                  />
                  <circle cx={centerX} cy="15" r="4" fill="#3b82f6" />
                </>
              )}
            </g>

            {/* F2 Vector Row */}
            <g transform="translate(0, 110)">
              <text x="30" y="5" fill="#6ee7b7" fontSize="13" fontWeight="bold">
                F₂ = {f2Mag} N ({f2Dir})
              </text>
              <line x1="50" y1="15" x2="550" y2="15" stroke="#334155" strokeWidth="1" />
              {f2Dir === 'Doğu' ? (
                <>
                  <line
                    x1={centerX}
                    y1="15"
                    x2={centerX + f2Len}
                    y2="15"
                    stroke="#10b981"
                    strokeWidth="4"
                    markerEnd="url(#arrow-emerald)"
                  />
                  <circle cx={centerX} cy="15" r="4" fill="#10b981" />
                </>
              ) : (
                <>
                  <line
                    x1={centerX}
                    y1="15"
                    x2={centerX - f2Len}
                    y2="15"
                    stroke="#10b981"
                    strokeWidth="4"
                    markerEnd="url(#arrow-emerald)"
                  />
                  <circle cx={centerX} cy="15" r="4" fill="#10b981" />
                </>
              )}
            </g>

            {/* Resultant Vector Row */}
            <g transform="translate(0, 175)">
              <text x="30" y="5" fill="#d8b4fe" fontSize="14" fontWeight="bold">
                Bileşke Vektör R = {resultant.magnitude} N ({resultant.direction})
              </text>
              <line x1="50" y1="15" x2="550" y2="15" stroke="#475569" strokeWidth="1" />

              {resultant.isZero ? (
                <g transform={`translate(${centerX}, 15)`}>
                  <circle cx="0" cy="0" r="7" fill="#a855f7" />
                  <circle cx="0" cy="0" r="12" fill="none" stroke="#c084fc" strokeWidth="2" strokeDasharray="3 3" />
                  <text x="18" y="4" fill="#f3e8ff" fontSize="12" fontWeight="bold">
                    R = 0 N (Dengelenmiş)
                  </text>
                </g>
              ) : resultant.direction === 'Doğu' ? (
                <>
                  <line
                    x1={centerX}
                    y1="15"
                    x2={centerX + rLen}
                    y2="15"
                    stroke="#a855f7"
                    strokeWidth="5"
                    markerEnd="url(#arrow-purple)"
                  />
                  <circle cx={centerX} cy="15" r="5" fill="#a855f7" />
                </>
              ) : (
                <>
                  <line
                    x1={centerX}
                    y1="15"
                    x2={centerX - rLen}
                    y2="15"
                    stroke="#a855f7"
                    strokeWidth="5"
                    markerEnd="url(#arrow-purple)"
                  />
                  <circle cx={centerX} cy="15" r="5" fill="#a855f7" />
                </>
              )}
            </g>
          </svg>
        </div>
      </div>

      {/* Control Sliders & Directions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        {/* F1 Controls */}
        <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-blue-900 text-sm">F₁ Vektörü Kontrolleri</span>
            <span className="font-mono font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200 text-xs">
              {f1Mag} N ({f1Dir})
            </span>
          </div>

          <div className="mb-3">
            <label className="text-xs font-semibold text-slate-600 block mb-1">
              Büyüklük: {f1Mag} N
            </label>
            <input
              type="range"
              min="1"
              max="20"
              value={f1Mag}
              onChange={e => setF1Mag(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600 block mb-1">Yön:</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setF1Dir('Batı')}
                className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1 ${
                  f1Dir === 'Batı' ? 'bg-blue-600 text-white shadow-xs' : 'bg-white text-slate-700 border hover:bg-slate-50'
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Batı (−)</span>
              </button>
              <button
                onClick={() => setF1Dir('Doğu')}
                className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1 ${
                  f1Dir === 'Doğu' ? 'bg-blue-600 text-white shadow-xs' : 'bg-white text-slate-700 border hover:bg-slate-50'
                }`}
              >
                <span>Doğu (+)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* F2 Controls */}
        <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-emerald-900 text-sm">F₂ Vektörü Kontrolleri</span>
            <span className="font-mono font-bold text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-200 text-xs">
              {f2Mag} N ({f2Dir})
            </span>
          </div>

          <div className="mb-3">
            <label className="text-xs font-semibold text-slate-600 block mb-1">
              Büyüklük: {f2Mag} N
            </label>
            <input
              type="range"
              min="1"
              max="20"
              value={f2Mag}
              onChange={e => setF2Mag(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600 block mb-1">Yön:</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setF2Dir('Batı')}
                className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1 ${
                  f2Dir === 'Batı' ? 'bg-emerald-600 text-white shadow-xs' : 'bg-white text-slate-700 border hover:bg-slate-50'
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Batı (−)</span>
              </button>
              <button
                onClick={() => setF2Dir('Doğu')}
                className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1 ${
                  f2Dir === 'Doğu' ? 'bg-emerald-600 text-white shadow-xs' : 'bg-white text-slate-700 border hover:bg-slate-50'
                }`}
              >
                <span>Doğu (+)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Resultant Explanation Card */}
      <div className="p-5 rounded-xl bg-purple-50 border border-purple-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-purple-900 uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-4 h-4 text-purple-600" />
            Bileşke Vektör Analizi (R):
          </span>
          <span className="text-sm font-mono font-black text-purple-800 bg-white px-3 py-1 rounded-lg border border-purple-200">
            {resultant.formulaUsed}
          </span>
        </div>
        <p className="text-sm text-purple-950 font-semibold leading-relaxed">
          {resultant.explanation}
        </p>
      </div>
    </div>
  );
};
