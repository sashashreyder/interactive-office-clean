import React, { useState } from "react";

interface Question {
  id: number;
  type: "vocabulary" | "grammar" | "scenario" | "critical_thinking";
  difficulty: "beginner" | "intermediate";
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  explanationRu: string;
  points: number;
  category: string;
  hintRu?: string;
}

interface QuizGameProps {
  questions: Question[];
  onAnswer: (isCorrect: boolean, points: number, questionType: string) => void;
  onBack: () => void;
}

const typeBadge = (t: string) => {
  switch (t) {
    case "vocabulary":        return { icon: "📚", label: "Лексика",               cls: "bg-sky-500" };
    case "grammar":           return { icon: "✏️", label: "Грамматика",            cls: "bg-rose-500" };
    case "critical_thinking": return { icon: "🧠", label: "Критическое мышление",  cls: "bg-violet-500" };
    case "scenario":          return { icon: "💬", label: "Сценарий",              cls: "bg-amber-500" };
    default:                  return { icon: "❓", label: "Вопрос",                 cls: "bg-slate-500" };
  }
};

const QuizGame: React.FC<QuizGameProps> = ({ questions, onAnswer, onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showRussian, setShowRussian] = useState(false);
  const [showHint, setShowHint] = useState(false);

  if (!questions.length) {
    return (
      <div className="rounded-2xl bg-white/10 backdrop-blur-xl ring-1 ring-white/15 p-6 text-white text-center">
        Нет вопросов.
        <button onClick={onBack} className="mt-4 px-4 py-2 rounded-lg bg-slate-500/80 hover:bg-slate-500">
          Вернуться
        </button>
      </div>
    );
  }

  const q = questions[currentQuestionIndex];
  const isLast = currentQuestionIndex === questions.length - 1;
  const badge = typeBadge(q.type);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setShowExplanation(true);
    setShowRussian(false);
    setShowHint(false);
    onAnswer(answer === q.correctAnswer, q.points, q.type);
  };

  const handleNext = () => {
    if (isLast) return;
    setCurrentQuestionIndex(i => i + 1);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowRussian(false);
    setShowHint(false);
  };

  return (
    <div className="rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-white/10 p-6 text-white max-w-3xl mx-auto shadow-[0_10px_30px_rgba(0,0,0,.25)]">
      {/* заголовок */}
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Вопрос {currentQuestionIndex + 1} из {questions.length}
          </h2>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${badge.cls}`}>
            <span>{badge.icon}</span> {badge.label}
          </div>
        </div>
        <p className="text-slate-300 text-sm mt-1">Категория: {q.category}</p>
      </div>

      {/* вопрос */}
      <div className="mb-4 text-base md:text-lg font-medium leading-snug">{q.question}</div>

      {/* варианты */}
      <div className="grid gap-3 mb-4">
        {q.options.map((opt, idx) => {
          const isCorrect = opt === q.correctAnswer;
          const isSelected = opt === selectedAnswer;
          const base = "px-4 py-3 rounded-lg text-left transition";
          const idle = "bg-white/10 hover:bg-white/20";
          const after =
            isCorrect ? "bg-emerald-500/90 text-white"
            : isSelected ? "bg-rose-500/90 text-white"
            : "bg-white/10";
          return (
            <button
              key={idx}
              onClick={() => handleAnswerSelect(opt)}
              disabled={showExplanation}
              className={`${base} ${showExplanation ? after : idle}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {/* подсказка */}
      {q.hintRu && !showExplanation && (
        <button onClick={() => setShowHint(true)} className="text-sm text-amber-300 underline">
          💡 Подсказка
        </button>
      )}

      {/* объяснение */}
      {showExplanation && (
        <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10">
          <h4 className="font-semibold mb-2">
            {selectedAnswer === q.correctAnswer ? "✅ Правильно!" : "❌ Неправильно"}
          </h4>
          <p className="mb-3 text-slate-100/90">{q.explanation}</p>

          <button
            onClick={() => setShowRussian(v => !v)}
            className="px-3 py-1 rounded-full bg-teal-500/80 hover:bg-teal-500 text-white text-xs"
          >
            {showRussian ? "Скрыть перевод" : "Показать перевод"}
          </button>

          {showRussian && (
            <div className="mt-3 p-3 rounded bg-white/10 border border-white/10 text-slate-100/90">
              {q.explanationRu}
            </div>
          )}

          <div className="mt-3 font-semibold">
            {selectedAnswer === q.correctAnswer ? `+${q.points} очков опыта` : "0 очков"}
          </div>
        </div>
      )}

      {/* навигация */}
      <div className="mt-6 flex justify-between">
        <button onClick={onBack} className="px-4 py-2 rounded-lg bg-slate-500/80 hover:bg-slate-500">
          Назад
        </button>
        {showExplanation && (
          <button
            onClick={isLast ? onBack : handleNext}
            className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600"
          >
            {isLast ? "Завершить" : "Следующий вопрос"}
          </button>
        )}
      </div>

      {/* модал подсказки */}
      {showHint && q.hintRu && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowHint(false)}
        >
          <div
            className="bg-slate-900/90 p-6 rounded-xl text-white max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-semibold mb-2">Подсказка</div>
            <div>{q.hintRu}</div>
            <button className="mt-4 px-3 py-1 bg-indigo-500 rounded-lg" onClick={() => setShowHint(false)}>
              Понятно
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizGame;



