import React from 'react';
import { BookOpen, Search, CheckCircle2, Award, Printer, Volume2, VolumeX } from 'lucide-react';
import { CURRICULUM_SCOPES } from '../data/physicsData';

interface HeaderProps {
  completedChecklistCount: number;
  totalChecklistCount: number;
  onOpenQuiz: () => void;
  onOpenSearch: () => void;
  isReadingSpeech: boolean;
  onToggleSpeech: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  completedChecklistCount,
  totalChecklistCount,
  onOpenQuiz,
  onOpenSearch,
  isReadingSpeech,
  onToggleSpeech,
}) => {
  const percentage = Math.round((completedChecklistCount / totalChecklistCount) * 100);

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20 font-bold text-lg">
              F
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                  9. Sınıf Fizik
                </span>
                <span className="text-xs text-slate-500 hidden sm:inline">1. Dönem Sınavı</span>
              </div>
              <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-tight">
                Tam Çalışma Özeti
              </h1>
            </div>
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200 cursor-pointer"
              title="Özette Ara (Ctrl+K)"
              aria-label="Özette Ara"
            >
              <Search className="w-4 h-4 text-slate-500" />
              <span className="hidden md:inline">Özette Ara</span>
              <kbd className="hidden md:inline text-[10px] bg-white px-1.5 py-0.5 rounded border border-slate-300 text-slate-500">⌘K</kbd>
            </button>

            {/* Read Aloud Button */}
            <button
              onClick={onToggleSpeech}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors border cursor-pointer ${
                isReadingSpeech
                  ? 'bg-amber-100 text-amber-800 border-amber-300 animate-pulse'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200'
              }`}
              title={isReadingSpeech ? 'Sesli Okumayı Durdur' : 'Türkçe Sesli Oku'}
              aria-label={isReadingSpeech ? 'Sesli Okumayı Durdur' : 'Türkçe Sesli Oku'}
            >
              {isReadingSpeech ? <VolumeX className="w-4 h-4 text-amber-600" /> : <Volume2 className="w-4 h-4 text-slate-600" />}
              <span className="hidden lg:inline">{isReadingSpeech ? 'Durdur' : 'Sesli Oku'}</span>
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="no-print flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200 cursor-pointer"
              title="Yazdır veya PDF Kaydet"
              aria-label="Yazdır veya PDF Kaydet"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span className="hidden sm:inline">PDF / Yazdır</span>
            </button>

            {/* Practice Quiz Trigger */}
            <button
              onClick={onOpenQuiz}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-sm hover:shadow-md cursor-pointer"
              title="10 Soruluk Deneme Sınavını Başlat"
            >
              <Award className="w-4 h-4 text-amber-300" />
              <span>Sınav Pratiği</span>
            </button>

            {/* Checklist Progress Pill */}
            <a
              href="#bolum-8"
              className="hidden xl:flex items-center gap-2 pl-3 pr-2 py-1 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
              title="Kontrol Listesine Git"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <div className="text-left text-xs">
                <span className="text-slate-500 block leading-none text-[10px]">Kontrol</span>
                <span className="font-bold text-slate-800 leading-tight">%{percentage}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
