import React, { useState } from 'react';
import { Atom, Zap, Wind, Compass, Sparkles, Sun, Thermometer, ArrowRight, CheckCircle, Lightbulb, Beaker } from 'lucide-react';
import { INTERDISCIPLINARY_RELATIONS } from '../data/physicsData';

export const Section1PhysicsScience: React.FC = () => {
  const [activeReasoning, setActiveReasoning] = useState<'inductive' | 'deductive'>('inductive');

  const physicsTopics = [
    { title: 'Madde', en: 'Matter', icon: Atom, desc: 'Kütlesi ve hacmi olan her şey.' },
    { title: 'Enerji', en: 'Energy', icon: Zap, desc: 'İş yapabilme kapasitesi ve dönüşümleri.' },
    { title: 'Hareket', en: 'Motion', icon: Wind, desc: 'Cismin zamanla konum değiştirmesi.' },
    { title: 'Kuvvet', en: 'Force', icon: Compass, desc: 'Cisimlerin hareketini veya şeklini değiştiren etki.' },
    { title: 'Elektrik', en: 'Electricity', icon: Zap, desc: 'Elektrik yükleri ve akımların davranışları.' },
    { title: 'Manyetizma', en: 'Magnetism', icon: Sparkles, desc: 'Manyetik alanlar, kutuplar ve mıknatıslar.' },
    { title: 'Işık', en: 'Light', icon: Sun, desc: 'Elektromanyetik dalgalar ve fotonlar.' },
    { title: 'Isı ve sıcaklık', en: 'Heat and temperature', icon: Thermometer, desc: 'Termal enerji aktarımı ve molekül titreşimleri.' },
  ];

  return (
    <section id="bolum-1" className="py-12 bg-white border-b border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-mono font-semibold mb-2">
              Kazanım: FİZ.9.1.1
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              1. FİZİK BİLİMİ VE ÖZELLİKLERİ
            </h2>
          </div>
          <span className="text-sm text-slate-500 font-medium">Bölüm 1 / 8</span>
        </div>

        {/* 1.1 Fizik Biliminin Tanımı */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-blue-600">1.1.</span> Fizik Biliminin Tanımı
          </h3>

          <div className="p-5 bg-blue-50/70 border border-blue-200 rounded-2xl mb-6">
            <p className="text-slate-800 text-lg leading-relaxed">
              <strong className="text-blue-900 font-bold">Fizik:</strong> Madde, enerji, hareket ve bunlar arasındaki etkileşimleri inceleyen temel bilim dalıdır.
            </p>
          </div>

          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
            Fiziğin incelediği bazı konular:
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {physicsTopics.map((topic, i) => {
              const Icon = topic.icon;
              return (
                <div
                  key={i}
                  className="p-3.5 sm:p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-blue-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-2 rounded-lg bg-blue-100/70 text-blue-700">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 italic">({topic.en})</span>
                  </div>
                  <h5 className="font-bold text-slate-900 text-sm sm:text-base">{topic.title}</h5>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">{topic.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 1.2 Fizik Biliminin Diğer Bilimlerle İlişkisi */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-blue-600">1.2.</span> Fizik Biliminin Diğer Bilimlerle İlişkisi
          </h3>
          <p className="text-slate-700 mb-4">Fizik, birçok bilim dalıyla ilişkilidir.</p>

          <div className="overflow-hidden border border-slate-200 rounded-xl shadow-2xs">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100/90 text-slate-800 border-b border-slate-200">
                  <th className="py-3 px-4 font-bold w-1/3">Bilim Dalı</th>
                  <th className="py-3 px-4 font-bold">Fizikle İlişkisi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {INTERDISCIPLINARY_RELATIONS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      {row.field}
                    </td>
                    <td className="py-3 px-4 text-slate-700">{row.relation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 1.3 Bilimsel Araştırma ve Akıl Yürütme */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-blue-600">1.3.</span> Bilimsel Araştırma ve Akıl Yürütme
          </h3>
          <p className="text-slate-700 mb-6">
            Bilimsel araştırmalarda gözlem, deney, ölçüm ve çıkarım yapılır.
          </p>

          {/* Interactive Reasoning Toggle */}
          <div className="flex border border-slate-200 p-1 rounded-xl bg-slate-100 max-w-md mb-6">
            <button
              onClick={() => setActiveReasoning('inductive')}
              className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeReasoning === 'inductive'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tümevarım (Inductive)
            </button>
            <button
              onClick={() => setActiveReasoning('deductive')}
              className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeReasoning === 'deductive'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tümdengelim (Deductive)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tümevarımsal Akıl Yürütme Card */}
            <div
              className={`p-6 rounded-2xl border transition-all ${
                activeReasoning === 'inductive'
                  ? 'border-blue-400 bg-blue-50/50 shadow-md ring-2 ring-blue-200'
                  : 'border-slate-200 bg-slate-50/60 opacity-90'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-bold text-slate-900">
                  Tümevarımsal Akıl Yürütme <span className="text-sm font-normal text-slate-500 font-mono">(Inductive Reasoning)</span>
                </h4>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">
                  Özelden Genele
                </span>
              </div>
              <p className="text-slate-700 font-medium mb-4">
                Özel durumlardan genel bir sonuca ulaşmaktır.
              </p>

              <div className="bg-white p-4 rounded-xl border border-slate-200 mb-4 shadow-2xs">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                  Örnek:
                </span>
                <ul className="space-y-1.5 text-sm text-slate-800 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    Demir ısıtılınca genleşir.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    Bakır ısıtılınca genleşir.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    Alüminyum ısıtılınca genleşir.
                  </li>
                </ul>
              </div>

              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-sm font-bold flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sonuç: Metaller ısıtılınca genleşir.</span>
              </div>
            </div>

            {/* Tümdengelimsel Akıl Yürütme Card */}
            <div
              className={`p-6 rounded-2xl border transition-all ${
                activeReasoning === 'deductive'
                  ? 'border-indigo-400 bg-indigo-50/50 shadow-md ring-2 ring-indigo-200'
                  : 'border-slate-200 bg-slate-50/60 opacity-90'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-bold text-slate-900">
                  Tümdengelimsel Akıl Yürütme <span className="text-sm font-normal text-slate-500 font-mono">(Deductive Reasoning)</span>
                </h4>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800">
                  Genelden Özele
                </span>
              </div>
              <p className="text-slate-700 font-medium mb-4">
                Genel bir bilgiden özel bir sonuca ulaşmaktır.
              </p>

              <div className="bg-white p-4 rounded-xl border border-slate-200 mb-4 shadow-2xs">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                  Örnek:
                </span>
                <ul className="space-y-1.5 text-sm text-slate-800 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    Bütün metaller ısıtılınca genleşir.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    Demir bir metaldir.
                  </li>
                </ul>
              </div>

              <div className="p-3 bg-indigo-100/70 border border-indigo-200 rounded-xl text-indigo-950 text-sm font-bold flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Sonuç: O hâlde demir ısıtılınca genleşir.</span>
              </div>
            </div>
          </div>

          {/* ÖNEMLİ Callout Box */}
          <div className="mt-6 p-5 rounded-2xl bg-amber-50 border-2 border-amber-300 shadow-xs flex items-start gap-4">
            <div className="p-2 rounded-xl bg-amber-200 text-amber-900 shrink-0">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-extrabold text-amber-900 text-base mb-1 tracking-wide">
                ÖNEMLİ:
              </h5>
              <ul className="space-y-1 text-sm font-bold text-amber-950">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-600" />
                  <span>Tümevarım = Özelden genele.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-600" />
                  <span>Tümdengelim = Genelden özele.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
