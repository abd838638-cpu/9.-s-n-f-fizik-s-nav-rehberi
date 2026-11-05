import React, { useState } from 'react';
import { CAREER_PROFESSIONS, INSTITUTIONS } from '../data/physicsData';
import { Briefcase, Building2, Globe2, Flag, Lightbulb, ExternalLink } from 'lucide-react';

export const Section3Careers: React.FC = () => {
  const [institutionTab, setInstitutionTab] = useState<'all' | 'Türkiye' | 'Uluslararası'>('all');

  const filteredInstitutions = INSTITUTIONS.filter(
    inst => institutionTab === 'all' || inst.scope === institutionTab
  );

  return (
    <section id="bolum-3" className="py-12 bg-white border-b border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-mono font-semibold mb-2">
              Kazanım: FİZ.9.1.4
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              3. FİZİK BİLİMİ İLE İLGİLİ KARİYER OLANAKLARI
            </h2>
          </div>
          <span className="text-sm text-slate-500 font-medium">Bölüm 3 / 8</span>
        </div>

        <p className="text-slate-700 text-base mb-8">
          Fizik bilimi; teknoloji, sağlık, uzay, savunma, enerji ve araştırma alanlarında önemli bir yere sahiptir.
        </p>

        {/* 3.1 Fizik Alanındaki Meslekler */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="text-blue-600">3.1.</span> Fizik Alanındaki Meslekler
          </h3>

          <div className="overflow-hidden border border-slate-200 rounded-xl shadow-2xs">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100/90 text-slate-800 border-b border-slate-200">
                  <th className="py-3 px-4 font-bold w-1/3">Meslek</th>
                  <th className="py-3 px-4 font-bold">Görevi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {CAREER_PROFESSIONS.map((p, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-blue-600 shrink-0" />
                      {p.profession}
                    </td>
                    <td className="py-3 px-4 text-slate-700 font-medium">{p.duty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3.2 Fizikle İlgili Kurum ve Kuruluşlar */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="text-blue-600">3.2.</span> Fizikle İlgili Kurum ve Kuruluşlar
            </h3>

            {/* Filter buttons */}
            <div className="flex gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-semibold">
              <button
                onClick={() => setInstitutionTab('all')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  institutionTab === 'all' ? 'bg-white text-blue-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Tümü (8 Kurum)
              </button>
              <button
                onClick={() => setInstitutionTab('Türkiye')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1 ${
                  institutionTab === 'Türkiye' ? 'bg-white text-blue-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Flag className="w-3 h-3 text-red-500" />
                Türkiye'deki Kurumlar
              </button>
              <button
                onClick={() => setInstitutionTab('Uluslararası')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1 ${
                  institutionTab === 'Uluslararası' ? 'bg-white text-blue-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Globe2 className="w-3 h-3 text-blue-500" />
                Uluslararası Kurumlar
              </button>
            </div>
          </div>

          {/* Türkiye'deki Kurumlar Subsection */}
          {(institutionTab === 'all' || institutionTab === 'Türkiye') && (
            <div className="mb-8">
              <h4 className="text-md font-bold text-slate-800 mb-3 flex items-center gap-2">
                <Flag className="w-4 h-4 text-red-600" />
                Türkiye'deki Kurumlar
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {INSTITUTIONS.filter(i => i.scope === 'Türkiye').map(inst => (
                  <div
                    key={inst.code}
                    className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-blue-300 hover:shadow-xs transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 font-mono font-bold text-sm">
                        {inst.code}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500">{inst.tag}</span>
                    </div>
                    <h5 className="font-bold text-slate-900 text-sm mb-2">{inst.name}</h5>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <span>{inst.description}</span>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Uluslararası Kurumlar Subsection */}
          {(institutionTab === 'all' || institutionTab === 'Uluslararası') && (
            <div className="mb-8">
              <h4 className="text-md font-bold text-slate-800 mb-3 flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-blue-600" />
                Uluslararası Kurumlar
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {INSTITUTIONS.filter(i => i.scope === 'Uluslararası').map(inst => (
                  <div
                    key={inst.code}
                    className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-blue-300 hover:shadow-xs transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-1 rounded-md bg-indigo-100 text-indigo-800 font-mono font-bold text-sm">
                        {inst.code}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500">{inst.tag}</span>
                    </div>
                    <h5 className="font-bold text-slate-900 text-sm mb-2">{inst.name}</h5>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                        <span>{inst.description}</span>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ÖNEMLİ Box */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <p className="text-sm font-semibold text-amber-950">
              <strong>ÖNEMLİ:</strong> Kurumların isimlerini ve hangi alanlarda çalıştıklarını bilmek sınavda işine yarayabilir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
