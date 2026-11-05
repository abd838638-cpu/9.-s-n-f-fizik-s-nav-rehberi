import React, { useState } from 'react';
import { FUNDAMENTAL_UNITS, DERIVED_UNITS } from '../data/physicsData';
import { Scale, Star, CheckCircle, HelpCircle, RefreshCw } from 'lucide-react';
import { isFundamentalQuantity } from '../utils/physics';

export const Section4Units: React.FC = () => {
  const [practiceItem, setPracticeItem] = useState('Kuvvet');
  const [practiceFeedback, setPracticeFeedback] = useState<string | null>(null);

  const practiceItemsPool = [
    'Kütle',
    'Alan',
    'Zaman',
    'Hız',
    'Uzunluk',
    'İvme',
    'Sıcaklık',
    'Kuvvet',
    'Elektrik Akımı',
    'Enerji',
    'Madde Miktarı',
    'Basınç',
    'Işık Şiddeti',
    'Yoğunluk',
  ];

  const handleClassify = (choice: 'Temel' | 'Türetilmiş') => {
    const isFund = isFundamentalQuantity(practiceItem);
    const correct = (choice === 'Temel' && isFund) || (choice === 'Türetilmiş' && !isFund);

    if (correct) {
      setPracticeFeedback(
        `Tebrikler! Doğru: ${practiceItem} bir ${isFund ? 'Temel' : 'Türetilmiş'} büyüklüktür.`
      );
    } else {
      setPracticeFeedback(
        `Dikkat! Yanlış: ${practiceItem} bir ${isFund ? 'Temel' : 'Türetilmiş'} büyüklüktür.`
      );
    }
  };

  const nextPractice = () => {
    const currentIndex = practiceItemsPool.indexOf(practiceItem);
    const nextIndex = (currentIndex + 1) % practiceItemsPool.length;
    setPracticeItem(practiceItemsPool[nextIndex]);
    setPracticeFeedback(null);
  };

  return (
    <section id="bolum-4" className="py-12 bg-slate-50/70 border-b border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-mono font-semibold mb-2">
              Kazanım: FİZ.9.2.1
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              4. SI BİRİM SİSTEMİ
            </h2>
          </div>
          <span className="text-sm text-slate-500 font-medium">Bölüm 4 / 8</span>
        </div>

        {/* 4.1 SI Birim Sistemi Nedir? */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-blue-600">4.1.</span> SI Birim Sistemi Nedir?
          </h3>
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-2xs space-y-2">
            <p className="text-slate-800 text-base">
              <strong>SI (International System of Units)</strong>, Uluslararası Birim Sistemi anlamına gelir.
            </p>
            <p className="text-slate-700 text-sm">
              Bilimsel ölçümlerde ortak ve standart birimler kullanmayı sağlar.
            </p>
          </div>
        </div>

        {/* 4.2 Temel Büyüklükler */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
            <span className="text-blue-600">4.2.</span> Temel Büyüklükler
          </h3>
          <p className="text-slate-700 text-sm mb-4">
            Temel büyüklükler, başka fiziksel büyüklükler kullanılarak tanımlanmayan büyüklüklerdir.
            <br />
            SI sisteminde <strong>yedi temel büyüklük</strong> vardır.
          </p>

          <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-2xs mb-6">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100/90 text-slate-800 border-b border-slate-200">
                  <th className="py-3 px-4 font-bold">Temel Büyüklük</th>
                  <th className="py-3 px-4 font-bold">SI Birimi</th>
                  <th className="py-3 px-4 font-bold">Sembol</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {FUNDAMENTAL_UNITS.map((item, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">{item.name}</td>
                    <td className="py-3 px-4 font-semibold text-blue-700">{item.unit}</td>
                    <td className="py-3 px-4 font-mono font-bold text-indigo-700 bg-slate-50/50">
                      {item.symbol}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ÇOK ÖNEMLİ Box */}
          <div className="p-5 rounded-2xl bg-amber-50 border-2 border-amber-300 shadow-xs mb-8">
            <h4 className="font-extrabold text-amber-900 text-base mb-2 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-600 fill-amber-500" />
              <span>ÇOK ÖNEMLİ:</span>
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm font-bold text-amber-950 mb-3">
              <li className="bg-white/80 p-2 rounded-lg border border-amber-200 text-center">
                Uzunluk → metre (m)
              </li>
              <li className="bg-white/80 p-2 rounded-lg border border-amber-200 text-center">
                Kütle → kilogram (kg)
              </li>
              <li className="bg-white/80 p-2 rounded-lg border border-amber-200 text-center">
                Zaman → saniye (s)
              </li>
              <li className="bg-white/80 p-2 rounded-lg border border-amber-200 text-center">
                Sıcaklık → kelvin (K)
              </li>
            </ul>
            <p className="text-xs font-semibold text-amber-800">
              Bunlar sınavda sık karşılaşabileceğin temel birim örnekleridir.
            </p>
          </div>
        </div>

        {/* 4.3 Türetilmiş Büyüklükler */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
            <span className="text-blue-600">4.3.</span> Türetilmiş Büyüklükler
          </h3>
          <p className="text-slate-700 text-sm mb-4">
            Türetilmiş büyüklükler, temel büyüklüklerin matematiksel olarak birleştirilmesiyle elde edilir.
          </p>

          <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-2xs mb-8">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100/90 text-slate-800 border-b border-slate-200">
                  <th className="py-3 px-4 font-bold">Türetilmiş Büyüklük</th>
                  <th className="py-3 px-4 font-bold">Birimi</th>
                  <th className="py-3 px-4 font-bold">Sembolü</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {DERIVED_UNITS.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900">{item.name}</td>
                    <td className="py-3 px-4 text-slate-700">{item.unit}</td>
                    <td className="py-3 px-4 font-mono font-bold text-slate-800 bg-slate-50/40">
                      {item.symbol}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4.4 Temel ve Türetilmiş Büyüklüklerin Farkı */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="text-blue-600">4.4.</span> Temel ve Türetilmiş Büyüklüklerin Farkı
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <h4 className="font-bold text-slate-900 text-base mb-3 text-blue-700 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                Temel Büyüklükler:
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  Doğrudan tanımlanırlar.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  SI sisteminde yedi tanedir.
                </li>
                <li className="flex items-center gap-2 font-medium text-slate-900">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  Örnek: Uzunluk, kütle ve zaman.
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <h4 className="font-bold text-slate-900 text-base mb-3 text-indigo-700 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                Türetilmiş Büyüklükler:
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  Temel büyüklüklerden elde edilirler.
                </li>
                <li className="flex items-center gap-2 font-medium text-slate-900">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  Örnek: Alan, hız, kuvvet ve enerji.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4.5 Fiziksel Büyüklüklerin Sınıflandırılması */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-blue-600">4.5.</span> Fiziksel Büyüklüklerin Sınıflandırılması
          </h3>
          <p className="text-slate-700 text-sm mb-4">
            Fiziksel büyüklükler temel ve türetilmiş olarak sınıflandırılabilir.
          </p>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-3">
              Örnekler:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
              {[
                { name: 'Kütle', type: 'Temel', color: 'bg-blue-100 text-blue-800 border-blue-200' },
                { name: 'Zaman', type: 'Temel', color: 'bg-blue-100 text-blue-800 border-blue-200' },
                { name: 'Uzunluk', type: 'Temel', color: 'bg-blue-100 text-blue-800 border-blue-200' },
                { name: 'Alan', type: 'Türetilmiş', color: 'bg-purple-100 text-purple-800 border-purple-200' },
                { name: 'Hız', type: 'Türetilmiş', color: 'bg-purple-100 text-purple-800 border-purple-200' },
                { name: 'Kuvvet', type: 'Türetilmiş', color: 'bg-purple-100 text-purple-800 border-purple-200' },
                { name: 'Enerji', type: 'Türetilmiş', color: 'bg-purple-100 text-purple-800 border-purple-200' },
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-xl border bg-slate-50/50 text-center">
                  <div className="font-bold text-slate-900 text-sm">{item.name}</div>
                  <div className="text-xs text-slate-400 mt-0.5">→</div>
                  <span className={`inline-block mt-1 text-[11px] font-bold px-2 py-0.5 rounded-md border ${item.color}`}>
                    {item.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Sınıflandırma Mini Alıştırma */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                <h4 className="font-bold text-slate-900 text-sm">
                  Mini Pratik: Temel mi, Türetilmiş mi?
                </h4>
              </div>
              <button
                onClick={nextPractice}
                className="text-xs font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Sıradaki Kavram</span>
              </button>
            </div>

            <div className="bg-white p-4 rounded-xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-500 block">Soru Büyüklüğü:</span>
                <span className="text-xl font-extrabold text-slate-900">{practiceItem}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleClassify('Temel')}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Temel Büyüklük
                </button>
                <button
                  onClick={() => handleClassify('Türetilmiş')}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Türetilmiş Büyüklük
                </button>
              </div>
            </div>

            {practiceFeedback && (
              <p
                className={`mt-3 text-xs sm:text-sm font-bold ${
                  practiceFeedback.includes('Tebrikler') ? 'text-emerald-700' : 'text-rose-700'
                }`}
              >
                {practiceFeedback}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
