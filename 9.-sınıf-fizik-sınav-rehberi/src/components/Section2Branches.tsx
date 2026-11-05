import React, { useState } from 'react';
import { SUB_BRANCHES } from '../data/physicsData';
import {
  Cpu,
  Flame,
  Zap,
  Activity,
  Eye,
  Sparkles,
  Radiation,
  Atom,
  AlertTriangle,
  Search,
  Check,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Cpu,
  Flame,
  Zap,
  Activity,
  Eye,
  Sparkles,
  Radiation,
  Atom,
};

export const Section2Branches: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState<string | null>(null);
  const [keywordFilter, setKeywordFilter] = useState('');

  const comparisonRows = [
    { keyword: 'Kristal, yarı iletken', branch: 'Katı Hâl Fiziği', branchId: 'kati-hal' },
    { keyword: 'Isı, sıcaklık', branch: 'Termodinamik', branchId: 'termodinamik' },
    { keyword: 'Elektrik, manyetizma', branch: 'Elektromanyetizma', branchId: 'elektromanyetizma' },
    { keyword: 'Kuvvet, hareket', branch: 'Mekanik', branchId: 'mekanik' },
    { keyword: 'Işık, yansıma, kırılma', branch: 'Optik', branchId: 'optik' },
    { keyword: 'Parçacık, plazma', branch: 'Yüksek Enerji ve Plazma Fiziği', branchId: 'yuksek-enerji' },
    { keyword: 'Çekirdek, nükleer tepkime', branch: 'Nükleer Fizik', branchId: 'nukleer-fizik' },
    { keyword: 'Elektron, enerji seviyeleri', branch: 'Atom Fiziği', branchId: 'atom-fizigi' },
  ];

  const filteredBranches = SUB_BRANCHES.filter(branch => {
    if (!keywordFilter.trim()) return true;
    const term = keywordFilter.toLowerCase();
    return (
      branch.name.toLowerCase().includes(term) ||
      branch.keywords.some(k => k.toLowerCase().includes(term)) ||
      branch.examples.some(e => e.toLowerCase().includes(term)) ||
      branch.description.toLowerCase().includes(term)
    );
  });

  return (
    <section id="bolum-2" className="py-12 bg-slate-50/70 border-b border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-mono font-semibold mb-2">
              Kazanım: FİZ.9.1.2
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              2. FİZİĞİN ALT DALLARI
            </h2>
          </div>
          <span className="text-sm text-slate-500 font-medium">Bölüm 2 / 8</span>
        </div>

        <p className="text-slate-700 text-base mb-6">
          Fizik bilimi, incelediği konulara göre sekiz temel alt dala ayrılır.
        </p>

        {/* Quick Branch Selector & Filter */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              setSelectedBranchId(null);
              setKeywordFilter('');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              selectedBranchId === null && !keywordFilter
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Tümü (8 Alt Dal)
          </button>
          {SUB_BRANCHES.map(b => (
            <button
              key={b.id}
              onClick={() => setSelectedBranchId(selectedBranchId === b.id ? null : b.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                selectedBranchId === b.id
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {b.name}
            </button>
          ))}
        </div>

        {/* 8 Alt Dal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {filteredBranches.map(branch => {
            const Icon = ICON_MAP[branch.icon] || Atom;
            const isSelected = selectedBranchId === branch.id;

            return (
              <div
                key={branch.id}
                onClick={() => setSelectedBranchId(isSelected ? null : branch.id)}
                className={`bg-white rounded-2xl border p-5 transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-blue-500 ring-2 ring-blue-300 shadow-md scale-[1.02]'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="p-2.5 rounded-xl flex items-center justify-center text-white shadow-xs"
                      style={{ backgroundColor: branch.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[11px] font-mono font-bold text-slate-400">
                      {branch.id === 'kati-hal' && '2.1'}
                      {branch.id === 'termodinamik' && '2.2'}
                      {branch.id === 'elektromanyetizma' && '2.3'}
                      {branch.id === 'mekanik' && '2.4'}
                      {branch.id === 'optik' && '2.5'}
                      {branch.id === 'yuksek-enerji' && '2.6'}
                      {branch.id === 'nukleer-fizik' && '2.7'}
                      {branch.id === 'atom-fizigi' && '2.8'}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">{branch.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {branch.description}
                  </p>

                  <div className="mb-3">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Anahtar kelimeler:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {branch.keywords.map((kw, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 font-medium border border-slate-200"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-500 block mb-0.5">
                    Örnek:
                  </span>
                  <p className="text-xs text-slate-800 font-medium">{branch.examples.join(', ')}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ALT DALLARIN KARŞILAŞTIRILMASI Tablosu */}
        <div className="mb-10 bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
            ALT DALLARIN KARŞILAŞTIRILMASI
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-4">
            Sınavda anahtar kelimeleri gördüğünüzde doğrudan ilgili alt dala yönelin:
          </p>

          <div className="overflow-hidden border border-slate-200 rounded-xl">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-800 border-b border-slate-200">
                  <th className="py-3 px-4 font-bold">Anahtar Kelime</th>
                  <th className="py-3 px-4 font-bold">Fizik Alt Dalı</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-blue-50/50 transition-colors cursor-pointer"
                    onClick={() => setSelectedBranchId(row.branchId)}
                  >
                    <td className="py-3 px-4 font-mono font-medium text-slate-800 text-xs sm:text-sm">
                      {row.keyword}
                    </td>
                    <td className="py-3 px-4 font-bold text-blue-700">{row.branch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* DİKKAT! Atom Fiziği ile Nükleer Fizik Box */}
        <div className="p-6 rounded-2xl bg-rose-50 border-2 border-rose-300 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-rose-200 text-rose-800 shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-extrabold text-rose-900 mb-1 flex items-center gap-2">
                <span>DİKKAT!</span>
              </h4>
              <p className="text-rose-950 font-bold mb-4 text-sm sm:text-base">
                Atom Fiziği ile Nükleer Fizik birbirine karıştırılmamalıdır.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-rose-200 shadow-2xs">
                  <div className="flex items-center gap-2 text-teal-800 font-bold text-sm mb-1">
                    <Atom className="w-4 h-4 text-teal-600" />
                    <span>Atom Fiziği:</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-800">
                    Atom ve elektronlarla ilgilenir.
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Örnek: Elektron dizilimi, spektrumlar, lazerler.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-rose-200 shadow-2xs">
                  <div className="flex items-center gap-2 text-red-800 font-bold text-sm mb-1">
                    <Radiation className="w-4 h-4 text-red-600" />
                    <span>Nükleer Fizik:</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-800">
                    Atom çekirdeğiyle ilgilenir.
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Örnek: Çekirdek tepkimeleri, proton/nötron, radyoaktivite, nükleer santral.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
