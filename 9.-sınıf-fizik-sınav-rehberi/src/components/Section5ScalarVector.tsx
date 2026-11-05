import React, { useState } from 'react';
import { SCALAR_EXAMPLES, VECTOR_EXAMPLES } from '../data/physicsData';
import { Compass, Gauge, ArrowRight, Bookmark, Navigation } from 'lucide-react';

export const Section5ScalarVector: React.FC = () => {
  const [speedVal, setSpeedVal] = useState(60);
  const [directionChoice, setDirectionChoice] = useState<'Doğu' | 'Batı'>('Doğu');

  return (
    <section id="bolum-5" className="py-12 bg-white border-b border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-mono font-semibold mb-2">
              Kazanım: FİZ.9.2.2
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              5. SKALER VE VEKTÖREL BÜYÜKLÜKLER
            </h2>
          </div>
          <span className="text-sm text-slate-500 font-medium">Bölüm 5 / 8</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* 5.1 Skaler Büyüklükler */}
          <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="text-blue-600">5.1.</span> Skaler Büyüklükler
            </h3>
            <p className="text-slate-700 text-sm mb-4">
              Yalnızca sayısal büyüklüğü ve birimi olan, yön gerektirmeyen fiziksel büyüklüklerdir.
            </p>

            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
              Örnekler:
            </span>
            <div className="overflow-hidden border border-slate-200 rounded-xl bg-white">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100/80 text-slate-800 border-b border-slate-200">
                    <th className="py-2.5 px-4 font-bold">Skaler Büyüklük</th>
                    <th className="py-2.5 px-4 font-bold">Birim</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {SCALAR_EXAMPLES.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/70">
                      <td className="py-2 px-4 font-medium text-slate-900">{item.name}</td>
                      <td className="py-2 px-4 font-mono font-bold text-blue-600 text-xs">
                        {item.unit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 5.2 Vektörel Büyüklükler */}
          <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="text-blue-600">5.2.</span> Vektörel Büyüklükler
            </h3>
            <p className="text-slate-700 text-sm mb-4">
              Hem büyüklüğü hem de yönü olan fiziksel büyüklüklerdir.
            </p>

            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
              Örnekler:
            </span>
            <div className="overflow-hidden border border-slate-200 rounded-xl bg-white">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100/80 text-slate-800 border-b border-slate-200">
                    <th className="py-2.5 px-4 font-bold">Vektörel Büyüklük</th>
                    <th className="py-2.5 px-4 font-bold">Birim</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {VECTOR_EXAMPLES.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/70">
                      <td className="py-2 px-4 font-medium text-slate-900">{item.name}</td>
                      <td className="py-2 px-4 font-mono font-bold text-indigo-600 text-xs">
                        {item.unit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 5.3 Skaler ve Vektörel Büyüklüklerin Farkları */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="text-blue-600">5.3.</span> Skaler ve Vektörel Büyüklüklerin Farkları
          </h3>

          <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-2xs mb-8">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                  <th className="py-3 px-4 font-bold w-1/2">Skaler</th>
                  <th className="py-3 px-4 font-bold w-1/2">Vektörel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-4 text-slate-800">Sadece büyüklüğü vardır.</td>
                  <td className="py-2.5 px-4 text-slate-800 font-semibold text-blue-900">
                    Büyüklüğü ve yönü vardır.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-4 text-slate-800">Yön belirtilmez.</td>
                  <td className="py-2.5 px-4 text-slate-800 font-semibold text-blue-900">
                    Yön belirtilir.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-4 text-slate-700">Örnek: Sürat</td>
                  <td className="py-2.5 px-4 text-slate-700">Örnek: Hız</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-4 text-slate-700">Örnek: Kütle</td>
                  <td className="py-2.5 px-4 text-slate-700">Örnek: Kuvvet</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-4 text-slate-700">Örnek: Zaman</td>
                  <td className="py-2.5 px-4 text-slate-700">Örnek: İvme</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Sürat ve Hız Arasındaki Fark & Interactive Demonstration */}
          <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200 mb-8">
            <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Gauge className="w-5 h-5 text-blue-600" />
              <span>Sürat ve Hız Arasındaki Fark</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
                  Skaler Nicelik
                </div>
                <h5 className="font-extrabold text-slate-900 text-base mb-1">Sürat (Skaler)</h5>
                <p className="text-sm text-slate-700">Bir cismin birim zamanda aldığı yoldur.</p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                  Vektörel Nicelik
                </div>
                <h5 className="font-extrabold text-slate-900 text-base mb-1">Hız (Vektörel)</h5>
                <p className="text-sm text-slate-700">
                  Bir cismin birim zamandaki yer değiştirmesidir.
                </p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200 mb-4">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                Örnek:
              </span>
              <ul className="space-y-2 text-sm font-semibold">
                <li className="flex items-center gap-2 text-slate-800">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>
                    <strong>60 km/h</strong> → Sürat.
                  </span>
                  <span className="text-xs text-slate-500 font-normal">(Yön yok)</span>
                </li>
                <li className="flex items-center gap-2 text-slate-800">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span>
                    <strong>Doğu yönünde 60 km/h</strong> → Hız.
                  </span>
                  <span className="text-xs text-slate-500 font-normal">(Büyüklük + Yön var)</span>
                </li>
              </ul>
            </div>

            {/* Interactive Sürat vs Hız Visualizer */}
            <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-200">
              <span className="text-xs font-bold text-blue-900 block mb-2">
                İnteraktif Karşılaştırma Aracı:
              </span>
              <div className="flex flex-wrap items-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <label className="text-slate-700 font-medium">Değer:</label>
                  <input
                    type="range"
                    min="20"
                    max="140"
                    step="10"
                    value={speedVal}
                    onChange={e => setSpeedVal(Number(e.target.value))}
                    className="w-28 cursor-pointer accent-blue-600"
                  />
                  <span className="font-mono font-bold text-slate-800">{speedVal} km/h</span>
                </div>

                <div className="flex items-center gap-2">
                  <label className="text-slate-700 font-medium">Yön:</label>
                  <button
                    onClick={() => setDirectionChoice('Doğu')}
                    className={`px-2 py-1 rounded text-xs font-semibold cursor-pointer ${
                      directionChoice === 'Doğu' ? 'bg-blue-600 text-white' : 'bg-white text-slate-700 border'
                    }`}
                  >
                    Doğu
                  </button>
                  <button
                    onClick={() => setDirectionChoice('Batı')}
                    className={`px-2 py-1 rounded text-xs font-semibold cursor-pointer ${
                      directionChoice === 'Batı' ? 'bg-blue-600 text-white' : 'bg-white text-slate-700 border'
                    }`}
                  >
                    Batı
                  </button>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                  <span className="text-slate-500 block">Sürat Göstergesi:</span>
                  <span className="font-mono font-extrabold text-amber-700 text-sm">
                    {speedVal} km/h
                  </span>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                  <span className="text-slate-500 block">Hız Göstergesi (Vektör):</span>
                  <span className="font-mono font-extrabold text-blue-700 text-sm">
                    {directionChoice} yönünde {speedVal} km/h
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* EZBERLE Box */}
          <div className="p-6 rounded-2xl bg-amber-500 text-amber-950 font-black text-center shadow-md border-2 border-amber-600">
            <span className="text-xs uppercase tracking-widest text-amber-900 block mb-1">
              EZBERLE:
            </span>
            <div className="text-lg sm:text-2xl tracking-wide">
              Skaler = Büyüklük.
              <br />
              Vektörel = Büyüklük + Yön.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
