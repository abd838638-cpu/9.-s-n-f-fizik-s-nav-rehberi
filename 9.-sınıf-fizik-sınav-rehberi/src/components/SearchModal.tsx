import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, BookOpen, Layers, Compass, Scale } from 'lucide-react';
import { SUB_BRANCHES, INSTITUTIONS, FUNDAMENTAL_UNITS, DERIVED_UNITS, EXAM_CRITICAL_POINTS } from '../data/physicsData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  title: string;
  category: string;
  description: string;
  link: string;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle or open handled by parent
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const results: SearchResult[] = [];
  const cleanQ = query.trim().toLowerCase();

  if (cleanQ.length >= 2) {
    // Search Branches
    SUB_BRANCHES.forEach(b => {
      if (
        b.name.toLowerCase().includes(cleanQ) ||
        b.description.toLowerCase().includes(cleanQ) ||
        b.keywords.some(k => k.toLowerCase().includes(cleanQ))
      ) {
        results.push({
          title: b.name,
          category: 'Fiziğin Alt Dalları (FİZ.9.1.2)',
          description: b.description,
          link: '#bolum-2',
        });
      }
    });

    // Search Units
    [...FUNDAMENTAL_UNITS, ...DERIVED_UNITS].forEach(u => {
      if (
        u.name.toLowerCase().includes(cleanQ) ||
        u.unit.toLowerCase().includes(cleanQ) ||
        u.symbol.toLowerCase().includes(cleanQ)
      ) {
        results.push({
          title: `${u.name} (${u.unit} - ${u.symbol})`,
          category: `SI Birimleri (${u.type}) - FİZ.9.2.1`,
          description: `${u.type} büyüklük, ${u.category} nicelik.`,
          link: '#bolum-4',
        });
      }
    });

    // Search Institutions
    INSTITUTIONS.forEach(i => {
      if (
        i.code.toLowerCase().includes(cleanQ) ||
        i.name.toLowerCase().includes(cleanQ) ||
        i.description.toLowerCase().includes(cleanQ)
      ) {
        results.push({
          title: `${i.code} - ${i.name}`,
          category: 'Fizikle İlgili Kurumlar (FİZ.9.1.4)',
          description: i.description,
          link: '#bolum-3',
        });
      }
    });

    // Search 24 Key Facts
    EXAM_CRITICAL_POINTS.forEach((pt, idx) => {
      if (pt.toLowerCase().includes(cleanQ)) {
        results.push({
          title: `Sınav Notu #${idx + 1}`,
          category: 'Sınav İçin En Önemli Bilgiler',
          description: pt,
          link: '#bolum-7',
        });
      }
    });
  }

  const handleSelectResult = (link: string) => {
    onClose();
    window.location.hash = link;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:pt-20 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full overflow-hidden flex flex-col border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
        {/* Search Bar Input */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Kavram, birim, alt dal veya formül ara... (Örn: Kelvin, Mekanik, Tümevarım, CERN)"
            className="flex-1 text-slate-900 placeholder:text-slate-400 outline-none text-sm sm:text-base font-medium"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Box */}
        <div className="max-h-96 overflow-y-auto p-4 divide-y divide-slate-100">
          {cleanQ.length < 2 ? (
            <div className="text-center py-8 text-slate-500 text-xs sm:text-sm">
              Aramak için en az 2 karakter yazın...
              <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                {['Termodinamik', 'Kelvin', 'Hız', 'Bileşke', 'CERN', 'Tümevarım'].map(chip => (
                  <button
                    key={chip}
                    onClick={() => setQuery(chip)}
                    className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 text-xs font-semibold cursor-pointer border border-slate-200 transition-colors"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-8 text-slate-500 text-sm">
              "{query}" ile eşleşen bir sonuç bulunamadı.
            </div>
          ) : (
            results.map((res, i) => (
              <div
                key={i}
                onClick={() => handleSelectResult(res.link)}
                className="py-3 px-2 rounded-xl hover:bg-blue-50/70 transition-colors cursor-pointer group flex items-start justify-between gap-3"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-blue-600 uppercase block mb-0.5">
                    {res.category}
                  </span>
                  <h5 className="font-bold text-slate-900 text-sm group-hover:text-blue-700 transition-colors">
                    {res.title}
                  </h5>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-0.5">{res.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 mt-2" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
