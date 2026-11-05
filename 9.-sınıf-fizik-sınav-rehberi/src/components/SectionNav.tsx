import React from 'react';

const SECTIONS = [
  { id: 'bolum-1', title: '1. Fizik Bilimi', code: 'FİZ.9.1.1' },
  { id: 'bolum-2', title: '2. Alt Dallar', code: 'FİZ.9.1.2' },
  { id: 'bolum-3', title: '3. Kariyer & Kurumlar', code: 'FİZ.9.1.4' },
  { id: 'bolum-4', title: '4. SI Birimleri', code: 'FİZ.9.2.1' },
  { id: 'bolum-5', title: '5. Skaler & Vektörel', code: 'FİZ.9.2.2' },
  { id: 'bolum-6', title: '6. Vektörler (Simülatör)', code: 'FİZ.9.2.3' },
  { id: 'bolum-7', title: '7. Önemli Bilgiler', code: '24 Madde' },
  { id: 'bolum-8', title: '8. Kontrol Listesi', code: 'Test' },
];

export const SectionNav: React.FC = () => {
  return (
    <nav aria-label="Bölüm Gezintisi" className="sticky top-16 z-30 bg-slate-900 text-white shadow-md no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 overflow-x-auto py-2.5 no-scrollbar scroll-smooth">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-1 pr-2 hidden md:inline">
            Bölümler:
          </span>
          {SECTIONS.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5"
            >
              <span>{item.title}</span>
              <span className="text-[10px] bg-slate-800 px-1.5 py-0.2 rounded text-blue-300 font-mono">
                {item.code}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
