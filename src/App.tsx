
import React, { useState } from "react";
import "./App.css";

import QuizGame from "./components/QuizGame";
import BossChallenge from "./components/BossChallenge";
import ClientMeeting from "./components/ClientMeeting";
import ProgressTracker from "./components/ProgressTracker";
import ExerciseSelector from "./components/ExerciseSelector";

import type { GameState } from "./types";
import { criticalThinkingQuestions } from "./data/critical";

import { vocabulary1 } from "./data/vocabulary1";
import { vocabulary2 } from "./data/vocabulary2";
import { vocabulary3 } from "./data/vocabulary3";

import { grammar1 } from "./data/grammar1";
import { grammar2 } from "./data/grammar2";
import { grammar3 } from "./data/grammar3";

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentMode: "main",
    score: 0,
    level: 1,
    experience: 0,
    totalQuestions: 0,
    correctAnswers: 0,
  });

  // выбор внутри разделов
  const [selectedVocab, setSelectedVocab] = useState<string | null>(null);
  const [selectedGrammar, setSelectedGrammar] = useState<string | null>(null);

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

  const renderHelpSection = () => (
    <div className="help-section">
      <div className="help-header">
        <h2>📚 Как использовать Интерактивный Офис</h2>
        <button onClick={() => setShowHelp(false)} className="close-btn">×</button>
      </div>
      <div className="help-content">
        <div className="help-card">
          <h3>🎯 Лексика</h3>
          <p>Business Center • Management & Customers • Strategy & Admin.</p>
        </div>
        <div className="help-card">
          <h3>✏️ Грамматика</h3>
          <p>
            Will / Going to • Present Continuous • Would like / Need / Want • Demonstratives •
            Imperatives • Modals • There is/are • Countable/Uncountable • Possessives.
          </p>
        </div>
        <div className="help-card">
          <h3>🧠 Критическое мышление</h3>
          <p>Реальные офисные сценарии и решения.</p>
        </div>
      </div>
    </div>
  );

  const renderMainMenu = () => (
    <div className="main-menu">
      <div className="header-section">
        <h1>🏢 Интерактивный Офис</h1>
        <p>Бизнес-английский • Уровень A1</p>
        <p>Лексика • Грамматика • Критическое мышление • Общение</p>
        <ProgressTracker gameState={gameState} />
      </div>

      <div className="menu-grid">
        <button
          onClick={() => setGameState((p) => ({ ...p, currentMode: "vocabulary" }))}
          className="menu-card vocabulary-card"
        >
          <div className="card-icon">📚</div>
          <h3>Практика Лексики</h3>
          <p>Vocabulary 1 / 2 / 3</p>
        </button>

        <button
          onClick={() => setGameState((p) => ({ ...p, currentMode: "grammar" }))}
          className="menu-card grammar-card"
        >
          <div className="card-icon">✏️</div>
          <h3>Практика Грамматики</h3>
          <p>Grammar 1 / 2 / 3</p>
        </button>

        <button
          onClick={() => setGameState((p) => ({ ...p, currentMode: "critical_thinking" }))}
          className="menu-card thinking-card"
        >
          <div className="card-icon">🧠</div>
          <h3>Критическое мышление</h3>
          <p>Офисные ситуации</p>
        </button>

        <button
          onClick={() => setGameState((p) => ({ ...p, currentMode: "communication" }))}
          className="menu-card communication-card"
        >
          <div className="card-icon">💬</div>
          <h3>Навыки общения</h3>
          <p>Босс и Клиент</p>
        </button>

        <button onClick={() => setShowHelp(true)} className="menu-card help-card">
          <div className="card-icon">❓</div>
          <h3>Помощь и правила</h3>
          <p>Как пользоваться приложением</p>
        </button>

        <button onClick={resetGame} className="menu-card reset-card">
          <div className="card-icon">🔄</div>
          <h3>Сбросить прогресс</h3>
          <p>Начать заново</p>
        </button>
      </div>
    </div>
  );

  const renderCommunicationMenu = () => (
    <div className="communication-menu">
      <div className="header-section">
        <h1>💬 Навыки общения</h1>
        <p>Практика с боссом и клиентом</p>
        <button
          onClick={() => setGameState((p) => ({ ...p, currentMode: "main" }))}
          className="back-btn"
        >
          ← Назад в главное меню
        </button>
      </div>

      <div className="communication-grid">
        <button
          onClick={() => setGameState((p) => ({ ...p, currentMode: "boss" }))}
          className="communication-card boss-card"
        >
          <div className="card-image">
            <img src="/boss.png" alt="Босс" />
          </div>
          <h3>Вызов Босса</h3>
          <p>Профессиональные сценарии</p>
        </button>

        <button
          onClick={() => setGameState((p) => ({ ...p, currentMode: "client" }))}
          className="communication-card client-card"
        >
          <div className="card-image">
            <img src="/client.png" alt="Клиент" />
          </div>
          <h3>Встреча с Клиентом</h3>
          <p>Навыки обслуживания</p>
        </button>
      </div>
    </div>
  );

  // helpers
  const getVocabQuestions = () => {
    switch (selectedVocab) {
      case "vocab1":
        return vocabulary1;
      case "vocab2":
        return vocabulary2;
      case "vocab3":
        return vocabulary3;
      default:
        return [];
    }
  };

  const getGrammarQuestions = () => {
    switch (selectedGrammar) {
      case "grammar1":
        return grammar1;
      case "grammar2":
        return grammar2;
      case "grammar3":
        return grammar3;
      default:
        return [];
    }
  };

  const renderContent = () => {
    if (showHelp) return renderHelpSection();

    switch (gameState.currentMode) {
      case "vocabulary": {
        if (!selectedVocab) {
          return (
            <ExerciseSelector
              title="Выберите упражнение по лексике"
              items={[
                { key: "vocab1", label: "📘 Vocabulary 1 — Business Center" },
                { key: "vocab2", label: "📗 Vocabulary 2 — Management & Customers" },
                { key: "vocab3", label: "📙 Vocabulary 3 — Strategy & Admin" },
              ]}
              onSelect={(key: string) => setSelectedVocab(key)}

              onBack={() => setGameState((p) => ({ ...p, currentMode: "main" }))}
            />
          );
        }

        return (
          <QuizGame
            questions={getVocabQuestions()}
            onAnswer={handleAnswer}
            onBack={() => setSelectedVocab(null)}
          />
        );
      }

      case "grammar": {
        if (!selectedGrammar) {
          return (
            <ExerciseSelector
              title="Выберите раздел грамматики"
              items={[
                { key: "grammar1", label: "✏️ Grammar 1 — Will / Going to / Present Continuous" },
                {
                  key: "grammar2",
                  label: "✏️ Grammar 2 — Would like · Need/Want · Demonstratives · Imperatives",
                },
                {
                  key: "grammar3",
                  label: "✏️ Grammar 3 — Modals · There is/are · Count/Uncount · Possessives",
                },
              ]}
              onSelect={(key: string) => setSelectedVocab(key)}

              onBack={() => setGameState((p) => ({ ...p, currentMode: "main" }))}
            />
          );
        }

        return (
          <QuizGame
            questions={getGrammarQuestions()}
            onAnswer={handleAnswer}
            onBack={() => setSelectedGrammar(null)}
          />
        );
      }

      case "critical_thinking":
        return (
          <QuizGame
            questions={criticalThinkingQuestions}
            onAnswer={handleAnswer}
            onBack={() => setGameState((p) => ({ ...p, currentMode: "main" }))}
          />
        );

      case "communication":
        return renderCommunicationMenu();

      case "boss":
        return (
          <BossChallenge
            onAnswer={handleAnswer}
            onBack={() => setGameState((p) => ({ ...p, currentMode: "communication" }))}
          />
        );

      case "client":
        return (
          <ClientMeeting
            onAnswer={handleAnswer}
            onBack={() => setGameState((p) => ({ ...p, currentMode: "communication" }))}
          />
        );

      default:
        return renderMainMenu();
    }
  };

  return <div className="app">{renderContent()}</div>;
};

export default App;


