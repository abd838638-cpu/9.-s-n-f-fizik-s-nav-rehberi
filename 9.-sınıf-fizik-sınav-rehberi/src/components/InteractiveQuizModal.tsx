import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/physicsData';
import { X, CheckCircle, XCircle, Award, RotateCcw, ArrowRight, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface InteractiveQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveQuizModal: React.FC<InteractiveQuizModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  if (!isOpen) return null;

  const currentQ = QUIZ_QUESTIONS[currentIdx];
  const total = QUIZ_QUESTIONS.length;
  const isAnswered = selectedAnswers[currentQ.id] !== undefined;

  const handleSelect = (optionIdx: number) => {
    if (isAnswered) return;
    setSelectedAnswers(prev => ({ ...prev, [currentQ.id]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const handleFinish = () => {
    setShowResults(true);
    const finalScore = calculateScore();
    if (finalScore >= 7) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 },
      });
    }
  };

  const restartQuiz = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setShowResults(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col border border-slate-200">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-600" />
            <h3 className="font-extrabold text-slate-900 text-lg">
              1. Dönem Fizik Sınav Pratiği
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {!showResults ? (
            <div>
              {/* Progress Bar & Question Info */}
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                <span>
                  Soru {currentIdx + 1} / {total}
                </span>
                <span className="font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  {currentQ.curriculum}
                </span>
              </div>

              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-6">
                <div
                  className="bg-blue-600 h-full rounded-full transition-all"
                  style={{ width: `${((currentIdx + 1) / total) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-6">
                {currentQ.question}
              </h4>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedAnswers[currentQ.id] === idx;
                  const isCorrect = idx === currentQ.correctAnswer;
                  const showFeedback = isAnswered;

                  let optClass = 'border-slate-200 hover:bg-slate-50 text-slate-800';
                  if (showFeedback) {
                    if (isCorrect) {
                      optClass = 'border-emerald-400 bg-emerald-50 text-emerald-950 font-bold';
                    } else if (isSelected) {
                      optClass = 'border-rose-400 bg-rose-50 text-rose-950 font-bold';
                    }
                  } else if (isSelected) {
                    optClass = 'border-blue-600 bg-blue-50 text-blue-900';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={isAnswered}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between text-sm sm:text-base cursor-pointer ${optClass}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-md bg-slate-100 text-slate-700 font-mono font-bold text-xs flex items-center justify-center">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{opt}</span>
                      </div>
                      {showFeedback && isCorrect && (
                        <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {showFeedback && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Banner */}
              {isAnswered && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 font-bold block mb-1">Açıklama:</strong>
                  {currentQ.explanation}
                </div>
              )}
            </div>
          ) : (
            /* Results View */
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-2">Test Tamamlandı!</h4>
              <p className="text-slate-600 text-sm mb-4">
                1. Dönem Fizik Sınav Özeti Değerlendirme Sonucunuz:
              </p>

              <div className="inline-block p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
                <span className="text-4xl font-black text-blue-600 block">
                  {calculateScore()} / {total}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {calculateScore() >= 8
                    ? 'Harika! Sınava oldukça hazırsın!'
                    : calculateScore() >= 5
                    ? 'Güzel çalışma! Bazı eksik konuları özetten tekrar etmelisin.'
                    : 'Özeti tekrar okumanı ve kavramları pekiştirmeni öneririz.'}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          {!showResults ? (
            <>
              <button
                onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
                disabled={currentIdx === 0}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-200 disabled:opacity-40 cursor-pointer"
              >
                Geri
              </button>

              {currentIdx < total - 1 ? (
                <button
                  onClick={() => setCurrentIdx(prev => Math.min(total - 1, prev + 1))}
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Sonraki Soru</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={handleFinish}
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Sonuçları Gör
                </button>
              )}
            </>
          ) : (
            <div className="flex items-center justify-between w-full">
              <button
                onClick={restartQuiz}
                className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Tekrar Çöz</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold cursor-pointer"
              >
                Özete Dön
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
