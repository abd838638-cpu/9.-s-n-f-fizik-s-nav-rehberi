import React from 'react';
import { VectorSimulator } from './VectorSimulator';
import { MoveRight, ArrowRight, ArrowLeftRight, CheckCheck, Lightbulb, Compass } from 'lucide-react';

export const Section6Vectors: React.FC = () => {
  return (
    <section id="bolum-6" className="py-12 bg-slate-50/70 border-b border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-mono font-semibold mb-2">
              Kazanım: FİZ.9.2.3
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              6. AYNI DOĞRULTUDAKİ VEKTÖRLER
            </h2>
          </div>
          <span className="text-sm text-slate-500 font-medium">Bölüm 6 / 8</span>
        </div>

        {/* 6.1 Vektör Nedir? */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-blue-600">6.1.</span> Vektör Nedir?
          </h3>
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-2xs mb-4">
            <p className="text-slate-800 text-base leading-relaxed mb-2">
              <strong>Vektör</strong>, büyüklüğü ve yönü olan fiziksel niceliktir.
            </p>
            <p className="text-slate-700 text-sm">
              Vektörler oklarla gösterilir.
            </p>
          </div>

          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">
            Bir vektörün özellikleri:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center mb-2">
                1
              </span>
              <h5 className="font-bold text-slate-900 text-sm">Büyüklük:</h5>
              <p className="text-xs text-slate-600 mt-1">Vektörün sayısal değeri.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center mb-2">
                2
              </span>
              <h5 className="font-bold text-slate-900 text-sm">Yön:</h5>
              <p className="text-xs text-slate-600 mt-1">Vektörün hangi tarafa doğru olduğu.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center mb-2">
                3
              </span>
              <h5 className="font-bold text-slate-900 text-sm">Doğrultu:</h5>
              <p className="text-xs text-slate-600 mt-1">Vektörün üzerinde bulunduğu çizginin yönelimi.</p>
            </div>
          </div>
        </div>

        {/* 6.2 Doğrultu ve Yön Arasındaki Fark */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-blue-600">6.2.</span> Doğrultu ve Yön Arasındaki Fark
          </h3>
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-2xs space-y-3 mb-4">
            <p className="text-slate-800 text-sm sm:text-base">
              <strong>Doğrultu</strong>, vektörün bulunduğu çizgidir.
            </p>
            <p className="text-slate-800 text-sm sm:text-base">
              <strong>Yön</strong>, vektörün o çizgi üzerinde hangi tarafa doğru olduğunu belirtir.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-900 block mb-2">
              Örnek:
            </span>
            <ul className="space-y-1.5 text-sm font-semibold text-slate-800">
              <li className="flex items-center gap-2">
                <ArrowLeftRight className="w-4 h-4 text-blue-600" />
                <span>
                  <strong>Doğu-Batı:</strong> Bir doğrultudur.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-emerald-600" />
                <span>
                  <strong>Doğu:</strong> Bir yöndür.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <MoveRight className="w-4 h-4 text-indigo-600 rotate-180" />
                <span>
                  <strong>Batı:</strong> Aynı doğrultudaki zıt yöndür.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Interactive Simulator Hooked Directly into Curriculum */}
        <div className="mb-12">
          <VectorSimulator />
        </div>

        {/* 6.3, 6.4, 6.5 Example Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* 6.3 Aynı Yönlü Vektörler */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                <span className="text-blue-600">6.3.</span> Aynı Yönlü Vektörler
              </h4>
              <p className="text-xs text-slate-600 mb-3">
                Aynı doğrultuda ve aynı yönde olan vektörler toplanır.
              </p>

              <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 mb-3 text-center">
                <span className="text-xs font-mono font-bold text-blue-900">Formül: R = F₁ + F₂</span>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs font-medium space-y-1">
                <div className="text-slate-500 font-bold uppercase text-[10px]">Örnek:</div>
                <div>F₁ = 5 N</div>
                <div>F₂ = 8 N</div>
                <div className="font-mono font-bold text-blue-700">R = 5 + 8 = 13 N</div>
              </div>
            </div>

            <p className="mt-3 text-xs font-semibold text-slate-800 border-t pt-2">
              Bileşke vektör 13 N'dur ve iki vektörle aynı yöndedir.
            </p>
          </div>

          {/* 6.4 Zıt Yönlü Vektörler */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                <span className="text-blue-600">6.4.</span> Zıt Yönlü Vektörler
              </h4>
              <p className="text-xs text-slate-600 mb-3">
                Aynı doğrultuda fakat zıt yönde olan vektörler çıkarılır.
              </p>

              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 mb-3 text-center">
                <span className="text-xs font-mono font-bold text-emerald-900">
                  Formül: R = Büyük vektör − Küçük vektör
                </span>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs font-medium space-y-1">
                <div className="text-slate-500 font-bold uppercase text-[10px]">Örnek:</div>
                <div>F₁ = 12 N (Doğu)</div>
                <div>F₂ = 7 N (Batı)</div>
                <div className="font-mono font-bold text-emerald-700">R = 12 − 7 = 5 N</div>
                <div className="text-[11px] font-bold text-emerald-900">Sonuç: 5 N Doğu yönündedir.</div>
              </div>
            </div>

            <p className="mt-3 text-xs font-bold text-emerald-900 border-t pt-2">
              Bileşke vektör, büyük vektörün yönündedir.
            </p>
          </div>

          {/* 6.5 Eşit ve Zıt Yönlü Vektörler */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                <span className="text-blue-600">6.5.</span> Eşit ve Zıt Yönlü Vektörler
              </h4>
              <p className="text-xs text-slate-600 mb-3">
                İki vektör eşit büyüklükte ve zıt yöndeyse birbirini dengeler.
              </p>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs font-medium space-y-1 mb-3">
                <div className="text-slate-500 font-bold uppercase text-[10px]">Örnek:</div>
                <div>F₁ = 10 N (Doğu)</div>
                <div>F₂ = 10 N (Batı)</div>
                <div className="font-mono font-bold text-purple-700">R = 10 − 10 = 0 N</div>
              </div>
            </div>

            <p className="mt-3 text-xs font-bold text-purple-900 border-t pt-2">
              Sonuç: Bileşke vektör sıfırdır.
            </p>
          </div>
        </div>

        {/* 6.6 Bileşke Vektör (Resultant Vector) & ÖNEMLİ KURALLAR */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
          <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
            <span className="text-blue-600">6.6.</span> Bileşke Vektör{' '}
            <span className="text-sm font-normal text-slate-500 font-mono">(Resultant Vector)</span>
          </h3>
          <p className="text-slate-800 text-sm sm:text-base leading-relaxed mb-3">
            Birden fazla vektörün toplam etkisini gösteren vektöre <strong>bileşke vektör</strong> denir.
          </p>
          <div className="inline-block px-3 py-1 bg-slate-100 rounded-lg text-sm font-mono font-bold text-slate-800 mb-6">
            Sembolü: R
          </div>

          {/* ÖNEMLİ KURALLAR Callout */}
          <div className="p-5 rounded-2xl bg-amber-50 border-2 border-amber-300">
            <h4 className="font-extrabold text-amber-900 text-base mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-600" />
              <span>ÖNEMLİ KURALLAR:</span>
            </h4>
            <ul className="space-y-2 text-sm font-bold text-amber-950">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0" />
                <span>Aynı yönlü vektörler → Toplanır.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0" />
                <span>Zıt yönlü vektörler → Çıkarılır.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0" />
                <span>Eşit ve zıt yönlü vektörler → Bileşke sıfırdır.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0" />
                <span>Bileşke vektörün yönü, büyük vektörün yönüdür.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
