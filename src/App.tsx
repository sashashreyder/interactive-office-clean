import React, { useState } from "react";
import "./App.css";

import QuizGame from "./components/QuizGame.tsx";
import BossChallenge from "./components/BossChallenge.tsx";
import ClientMeeting from "./components/ClientMeeting.tsx";
import ProgressTracker from "./components/ProgressTracker.tsx";
import ExerciseSelector from "./components/ExerciseSelector.tsx";

import type { GameState } from "./types";
import { criticalThinkingQuestions } from "./data/critical";

import { vocabulary1 } from "./data/vocabulary1";
import { vocabulary2 } from "./data/vocabulary2";
import { vocabulary3 } from "./data/vocabulary3";
import { grammar1 } from "./data/grammar1";
import { grammar2 } from "./data/grammar2";
import { grammar3 } from "./data/grammar3";

type VocabKey = "vocab1" | "vocab2" | "vocab3";
type GrammarKey = "grammar1" | "grammar2" | "grammar3";

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentMode: "main",
    score: 0,
    level: 1,
    experience: 0,
    totalQuestions: 0,
    correctAnswers: 0,
  });

  const [selectedVocab, setSelectedVocab] = useState<VocabKey | null>(null);
  const [selectedGrammar, setSelectedGrammar] = useState<GrammarKey | null>(null);
  const [showHelp, setShowHelp] = useState(false);

  const handleAnswer = (isCorrect: boolean, points: number) => {
    const gained = isCorrect ? points : 0;
    setGameState((prev) => {
      const experience = prev.experience + gained;
      return {
        ...prev,
        score: prev.score + gained,
        level: Math.floor(experience / 100) + 1,
        experience,
        totalQuestions: prev.totalQuestions + 1,
        correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
      };
    });
  };

  const resetGame = () => {
    setGameState({
      currentMode: "main",
      score: 0,
      level: 1,
      experience: 0,
      totalQuestions: 0,
      correctAnswers: 0,
    });
    setSelectedVocab(null);
    setSelectedGrammar(null);
  };

  const getVocabQuestions = () => {
    switch (selectedVocab) {
      case "vocab1": return vocabulary1;
      case "vocab2": return vocabulary2;
      case "vocab3": return vocabulary3;
      default: return [];
    }
  };
  const getGrammarQuestions = () => {
    switch (selectedGrammar) {
      case "grammar1": return grammar1;
      case "grammar2": return grammar2;
      case "grammar3": return grammar3;
      default: return [];
    }
  };


  const Header = () => (
    <div className="relative z-10 text-center mb-10">
      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full
                      bg-white/10 backdrop-blur-xl ring-1 ring-white/20 text-white
                      text-base md:text-lg font-extrabold shadow-lg">
        <span className="text-2xl">🏢</span>
        <span>Интерактивный офис</span>
      </div>

      <p className="text-slate-200 mt-3">Бизнес-английский • Уровень A1</p>
      <p className="text-slate-200/90 font-medium">
        Лексика • Грамматика • Критическое мышление • Общение
      </p>


      <div className="mt-5">
        <ProgressTracker gameState={gameState} />
      </div>
    </div>
  );


  const Card = ({
    children,
    accent,
  }: {
    children: React.ReactNode;
    accent: "blue" | "red" | "purple" | "amber" | "teal" | "zinc";
  }) => {
    const ring =
      accent === "blue" ? "ring-sky-300/40" :
      accent === "red" ? "ring-rose-300/40" :
      accent === "purple" ? "ring-violet-300/40" :
      accent === "amber" ? "ring-amber-300/40" :
      accent === "teal" ? "ring-teal-300/40" :
      "ring-white/30";

    const left =
      accent === "blue" ? "before:bg-sky-400/80" :
      accent === "red" ? "before:bg-rose-400/80" :
      accent === "purple" ? "before:bg-violet-400/80" :
      accent === "amber" ? "before:bg-amber-400/80" :
      accent === "teal" ? "before:bg-teal-400/80" :
      "before:bg-white/60";

    return (
      <div
        className={[
          "relative h-[210px] min-h-[210px] p-6 rounded-2xl",
          "bg-white/10 backdrop-blur-xl ring-1", ring,
          "shadow-[0_10px_30px_rgba(0,0,0,.18)]",
          "flex flex-col items-center justify-center text-center text-slate-100",
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,.28)]",
          "overflow-hidden"
        ].join(" ")}
      >

        <span className={`absolute inset-y-0 left-0 w-1 ${left}`} />

        <span className="pointer-events-none absolute inset-0 -left-full hover:left-full transition-[left] duration-700 ease-linear
                         before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r
                         before:from-transparent before:via-white/15 before:to-transparent" />
        {children}
      </div>
    );
  };

  const MainCards = () => (
    <div className="grid gap-6 max-w-[1000px] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <button
        onClick={() => setGameState((p) => ({ ...p, currentMode: "vocabulary" }))}
        className="focus:outline-none"
      >
        <Card accent="blue">
          <div className="text-[42px] mb-2">📚</div>
          <h3 className="text-lg font-semibold text-white">Практика Лексики</h3>
          <p className="text-slate-200/80 text-sm">Vocabulary 1/2/3</p>
        </Card>
      </button>

      <button
        onClick={() => setGameState((p) => ({ ...p, currentMode: "grammar" }))}
        className="focus:outline-none"
      >
        <Card accent="red">
          <div className="text-[42px] mb-2">✏️</div>
          <h3 className="text-lg font-semibold text-white">Практика Грамматики</h3>
          <p className="text-slate-200/80 text-sm">Grammar 1/2/3</p>
        </Card>
      </button>

      <button
        onClick={() => setGameState((p) => ({ ...p, currentMode: "critical_thinking" }))}
        className="focus:outline-none"
      >
        <Card accent="purple">
          <div className="text-[42px] mb-2">🧠</div>
          <h3 className="text-lg font-semibold text-white">Критическое мышление</h3>
          <p className="text-slate-200/80 text-sm">Офисные ситуации</p>
        </Card>
      </button>

      <button
        onClick={() => setGameState((p) => ({ ...p, currentMode: "communication" }))}
        className="focus:outline-none"
      >
        <Card accent="amber">
          <div className="text-[42px] mb-2">💬</div>
          <h3 className="text-lg font-semibold text-white">Навыки общения</h3>
          <p className="text-slate-200/80 text-sm">Босс и Клиент</p>
        </Card>
      </button>

      <button onClick={() => setShowHelp(true)} className="focus:outline-none">
        <Card accent="teal">
          <div className="text-[42px] mb-2">❓</div>
          <h3 className="text-lg font-semibold text-white">Помощь и правила</h3>
          <p className="text-slate-200/80 text-sm">Как пользоваться приложением</p>
        </Card>
      </button>

      <button onClick={resetGame} className="focus:outline-none">
        <Card accent="zinc">
          <div className="text-[42px] mb-2">🔄</div>
          <h3 className="text-lg font-semibold text-white">Сбросить прогресс</h3>
          <p className="text-slate-200/80 text-sm">Начать заново</p>
        </Card>
      </button>
    </div>
  );

  const renderHelpSection = () => (
    <div className="max-w-[1200px] mx-auto overflow-hidden rounded-[15px] shadow-[0_8px_32px_rgba(0,0,0,.28)] bg-white/10 text-slate-100 ring-1 ring-white/15 backdrop-blur-xl relative z-10">
      <div className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-6 py-5 flex items-center justify-between">
        <h2 className="text-[1.8rem] font-semibold">📚 Как использовать Интерактивный Офис</h2>
        <button
          onClick={() => setShowHelp(false)}
          className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-2xl grid place-items-center"
          aria-label="закрыть"
        >
          ×
        </button>
      </div>

      <div className="p-6 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
        <div className="bg-white/10 backdrop-blur-xl ring-1 ring-white/10 rounded-[12px] p-6 hover:bg-white/15 transition">
          <h3 className="text-[1.3rem] font-semibold text-white mb-3">🎯 Лексика</h3>
          <p className="text-slate-200">Business Center • Management & Customers • Strategy & Admin</p>
        </div>
        <div className="bg-white/10 backdrop-blur-xl ring-1 ring-white/10 rounded-[12px] p-6 hover:bg-white/15 transition">
          <h3 className="text-[1.3rem] font-semibold text-white mb-3">✏️ Грамматика</h3>
          <p className="text-slate-200">
            Will/going to • Present Continuous vs Simple • would like to • need/want • demonstratives • imperatives •
            modals • there is/are • count/uncount • possessives
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-xl ring-1 ring-white/10 rounded-[12px] p-6 hover:bg-white/15 transition">
          <h3 className="text-[1.3rem] font-semibold text-white mb-3">🧠 Критическое мышление</h3>
          <p className="text-slate-200">Реальные офисные сценарии.</p>
        </div>
      </div>
    </div>
  );

  const renderMainMenu = () => (
    <div className="max-w-[1200px] mx-auto px-4">
      <Header />
      <MainCards />
    </div>
  );

  const renderCommunicationMenu = () => (
    <div className="max-w-[1200px] mx-auto text-center animate-[fadeIn_.8s_ease-out] px-4">
      <div className="mb-6 p-6 rounded-[15px] bg-white/10 backdrop-blur-xl ring-1 ring-white/15 text-slate-100">
        <h1 className="text-3xl font-bold mb-1">💬 Навыки общения</h1>
        <p className="text-slate-200">Практика с боссом и клиентом</p>
        <button
          onClick={() => setGameState((p) => ({ ...p, currentMode: "main" }))}
          className="mt-4 inline-flex items-center justify-center rounded-full text-white px-4 py-2 text-sm shadow
                     bg-gradient-to-br from-slate-400/80 to-slate-600/80 hover:brightness-110 transition"
        >
          ← Назад в главное меню
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 max-w-[900px] mx-auto">
        <button
          onClick={() => setGameState((p) => ({ ...p, currentMode: "boss" }))}
          className="group relative rounded-[15px] bg-white/10 backdrop-blur-xl ring-1 ring-white/15 p-8 text-slate-100
                     hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,.35)] transition"
        >
          <div className="w-30 h-30 mx-auto mb-5 rounded-full overflow-hidden border-4 border-rose-400/70 shadow">
            <img src="/boss.png" alt="Босс" className="w-[120px] h-[120px] object-cover mx-auto transition-transform group-hover:scale-110" />
          </div>
          <h3 className="text-[1.6rem] font-semibold text-white mb-2">Вызов Босса</h3>
          <p className="text-slate-200 text-[1.1rem]">Профессиональные сценарии</p>
        </button>

        <button
          onClick={() => setGameState((p) => ({ ...p, currentMode: "client" }))}
          className="group relative rounded-[15px] bg-white/10 backdrop-blur-xl ring-1 ring-white/15 p-8 text-slate-100
                     hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,.35)] transition"
        >
          <div className="w-30 h-30 mx-auto mb-5 rounded-full overflow-hidden border-4 border-emerald-400/70 shadow">
            <img src="/client.png" alt="Клиент" className="w-[120px] h-[120px] object-cover mx-auto transition-transform group-hover:scale-110" />
          </div>
          <h3 className="text-[1.6rem] font-semibold text-white mb-2">Встреча с Клиентом</h3>
          <p className="text-slate-200 text-[1.1rem]">Навыки обслуживания</p>
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    if (showHelp) return renderHelpSection();

    switch (gameState.currentMode) {
      case "vocabulary": {
        if (!selectedVocab) {
          return (
            <div className="px-4">
              <div className="max-w-[1200px] mx-auto mt-6 rounded-[15px] bg-white/10 backdrop-blur-xl ring-1 ring-white/15 p-6 text-slate-100">
                <ExerciseSelector
                  title="Выберите упражнение по лексике"
                  items={[
                    { key: "vocab1", label: "📘 Vocabulary 1 — Business Center" },
                    { key: "vocab2", label: "📗 Vocabulary 2 — Management & Customers" },
                    { key: "vocab3", label: "📙 Vocabulary 3 — Strategy & Admin" },
                  ]}
                  onSelect={(key: VocabKey) => setSelectedVocab(key)}
                  onBack={() => setGameState((p) => ({ ...p, currentMode: "main" }))}
                />
              </div>
            </div>
          );
        }
        return (
          <div className="px-4">
            <div className="max-w-[800px] mx-auto mt-6 rounded-[15px] bg-white/10 backdrop-blur-xl ring-1 ring-white/15 p-6 text-slate-100">
              <QuizGame
                key={`vocab-${selectedVocab}`}
                questions={getVocabQuestions()}
                onAnswer={handleAnswer}
                onBack={() => setSelectedVocab(null)}
              />
            </div>
          </div>
        );
      }

      case "grammar": {
        if (!selectedGrammar) {
          return (
            <div className="px-4">
              <div className="max-w-[1200px] mx-auto mt-6 rounded-[15px] bg-white/10 backdrop-blur-xl ring-1 ring-white/15 p-6 text-slate-100">
                <ExerciseSelector
                  title="Выберите упражнение по грамматике"
                  items={[
                    { key: "grammar1", label: "✏️ Grammar 1 — Will / Going to" },
                    { key: "grammar2", label: "✏️ Grammar 2 — Present Continuous vs Simple" },
                    { key: "grammar3", label: "✏️ Grammar 3 — Would like • Need/Want • Modals • There is/are • etc." },
                  ]}
                  onSelect={(key: GrammarKey) => setSelectedGrammar(key)}
                  onBack={() => setGameState((p) => ({ ...p, currentMode: "main" }))}
                />
              </div>
            </div>
          );
        }
        return (
          <div className="px-4">
            <div className="max-w-[800px] mx-auto mt-6 rounded-[15px] bg-white/10 backdrop-blur-xl ring-1 ring-white/15 p-6 text-slate-100">
              <QuizGame
                key={`grammar-${selectedGrammar}`}
                questions={getGrammarQuestions()}
                onAnswer={handleAnswer}
                onBack={() => setSelectedGrammar(null)}
              />
            </div>
          </div>
        );
      }

      case "critical_thinking":
        return (
          <div className="px-4">
            <div className="max-w-[800px] mx-auto mt-6 rounded-[15px] bg-white/10 backdrop-blur-xl ring-1 ring-white/15 p-6 text-slate-100">
              <QuizGame
                key="critical"
                questions={criticalThinkingQuestions}
                onAnswer={handleAnswer}
                onBack={() => setGameState((p) => ({ ...p, currentMode: "main" }))}
              />
            </div>
          </div>
        );

      case "communication":
        return renderCommunicationMenu();

      case "boss":
        return (
          <div className="px-4">
            <div className="max-w-[800px] mx-auto mt-6 rounded-[15px] bg-white/10 backdrop-blur-xl ring-1 ring-white/15 p-6 text-slate-100">
              <BossChallenge
                onAnswer={handleAnswer}
                onBack={() => setGameState((p) => ({ ...p, currentMode: "communication" }))}
              />
            </div>
          </div>
        );

      case "client":
        return (
          <div className="px-4">
            <div className="max-w-[800px] mx-auto mt-6 rounded-[15px] bg-white/10 backdrop-blur-xl ring-1 ring-white/15 p-6 text-slate-100">
              <ClientMeeting
                onAnswer={handleAnswer}
                onBack={() => setGameState((p) => ({ ...p, currentMode: "communication" }))}
              />
            </div>
          </div>
        );

      default:
        return renderMainMenu();
    }
  };

  return (
    <div className="app min-h-screen p-5 sm:p-6 md:p-8 relative text-white">
      <div className="bg">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
        <div className="grid-overlay" />
      </div>
      {renderContent()}
    </div>
  );
};

export default App;

