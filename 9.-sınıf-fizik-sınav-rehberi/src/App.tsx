import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SectionNav } from './components/SectionNav';
import { Section1PhysicsScience } from './components/Section1PhysicsScience';
import { Section2Branches } from './components/Section2Branches';
import { Section3Careers } from './components/Section3Careers';
import { Section4Units } from './components/Section4Units';
import { Section5ScalarVector } from './components/Section5ScalarVector';
import { Section6Vectors } from './components/Section6Vectors';
import { Section7ImportantFacts } from './components/Section7ImportantFacts';
import { Section8Checklist } from './components/Section8Checklist';
import { InteractiveQuizModal } from './components/InteractiveQuizModal';
import { SearchModal } from './components/SearchModal';
import { CHECKLIST_ITEMS } from './data/physicsData';
import { ArrowUp, Award, BookOpen, Compass } from 'lucide-react';

export default function App() {
  const [checkedChecklistIds, setCheckedChecklistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('fizik9_checklist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isReadingSpeech, setIsReadingSpeech] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Save checklist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('fizik9_checklist', JSON.stringify(checkedChecklistIds));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }, [checkedChecklistIds]);

  // Global keyboard shortcuts (Ctrl+K for search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll listener for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleChecklistItem = (id: string) => {
    setCheckedChecklistIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSelectAllChecklist = () => {
    setCheckedChecklistIds(CHECKLIST_ITEMS.map(i => i.id));
  };

  const handleResetAllChecklist = () => {
    setCheckedChecklistIds([]);
  };

  // Turkish Text-to-Speech Web API
  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('Tarayıcınız sesli okuma özelliğini desteklemiyor.');
      return;
    }

    if (isReadingSpeech) {
      window.speechSynthesis.cancel();
      setIsReadingSpeech(false);
      return;
    }

    const textToRead = `9. Sınıf Fizik Dersi 1. Dönem Sınavı Tam Çalışma Özeti. Fizik: Madde, enerji, hareket ve bunlar arasındaki etkileşimleri inceleyen temel bilim dalıdır. SI sisteminde yedi temel büyüklük vardır: Uzunluk, kütle, zaman, sıcaklık, akım, madde miktarı ve ışık şiddeti. Skaler büyüklüklerde yalnızca sayı ve birim varken, vektörel büyüklüklerde büyüklük ve yön vardır.`;

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'tr-TR';
    utterance.rate = 0.95;

    utterance.onend = () => {
      setIsReadingSpeech(false);
    };

    utterance.onerror = () => {
      setIsReadingSpeech(false);
    };

    window.speechSynthesis.speak(utterance);
    setIsReadingSpeech(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Sticky Header */}
      <Header
        completedChecklistCount={checkedChecklistIds.length}
        totalChecklistCount={CHECKLIST_ITEMS.length}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        isReadingSpeech={isReadingSpeech}
        onToggleSpeech={handleToggleSpeech}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenQuiz={() => setIsQuizOpen(true)} />
        <SectionNav />
        <Section1PhysicsScience />
        <Section2Branches />
        <Section3Careers />
        <Section4Units />
        <Section5ScalarVector />
        <Section6Vectors />
        <Section7ImportantFacts />
        <Section8Checklist
          checkedIds={checkedChecklistIds}
          onToggleItem={handleToggleChecklistItem}
          onSelectAll={handleSelectAllChecklist}
          onResetAll={handleResetAllChecklist}
        />
      </main>

      {/* Modern Scientific Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-sm no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-base">
                  F
                </div>
                <span className="text-white font-bold text-base">
                  9. Sınıf Fizik Sınav Hazırlık Platformu
                </span>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
                MEB 9. Sınıf Fizik Dersi 1. Dönem müfredat kazanımları (FİZ.9.1.1, FİZ.9.1.2, FİZ.9.1.4, FİZ.9.2.1, FİZ.9.2.2, FİZ.9.2.3) eksiksiz olarak interaktif görsel simülatörler, birim dönüştürücüler ve kendini test et sınav modülüyle hazırlanmıştır.
              </p>
            </div>

            <div>
              <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
                Hızlı Erişim
              </h5>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <a href="#bolum-1" className="hover:text-white transition-colors">1. Fizik Bilimi ve Özellikleri</a>
                </li>
                <li>
                  <a href="#bolum-2" className="hover:text-white transition-colors">2. Fiziğin 8 Alt Dalı</a>
                </li>
                <li>
                  <a href="#bolum-4" className="hover:text-white transition-colors">4. SI Birim Sistemi (7 Temel Birim)</a>
                </li>
                <li>
                  <a href="#bolum-5" className="hover:text-white transition-colors">5. Skaler ve Vektörel Nicelikler</a>
                </li>
                <li>
                  <a href="#bolum-6" className="hover:text-white transition-colors">6. Vektör Simülatörü</a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
                Sınav Araçları
              </h5>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <button onClick={() => setIsQuizOpen(true)} className="hover:text-white transition-colors cursor-pointer">
                    10 Soruluk Deneme Sınavı
                  </button>
                </li>
                <li>
                  <a href="#bolum-7" className="hover:text-white transition-colors">
                    24 Kritik Sınav Notu
                  </a>
                </li>
                <li>
                  <a href="#bolum-8" className="hover:text-white transition-colors">
                    Sınav Öncesi Kontrol Listesi
                  </a>
                </li>
                <li>
                  <button onClick={() => window.print()} className="hover:text-white transition-colors cursor-pointer">
                    Çalışma Kağıdını Yazdır (PDF)
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>© 9. Sınıf Fizik 1. Dönem Sınavı – Tam Çalışma Özeti. Tüm hakları saklıdır.</span>
            <span className="text-blue-400 font-mono font-medium">Başarılar Dileriz!</span>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all hover:scale-105 cursor-pointer no-print"
          title="Başa Dön"
          aria-label="Başa Dön"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Interactive Modals */}
      <InteractiveQuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
