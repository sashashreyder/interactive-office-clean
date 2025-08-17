import React, { useState } from "react";

interface BossChallengeProps {
  onAnswer: (isCorrect: boolean, points: number, questionType: string) => void;
  onBack: () => void;
}

interface BossScenario {
  id: number;
  scenario: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  points: number;
}

const BossChallenge: React.FC<BossChallengeProps> = ({ onAnswer, onBack }) => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [challengeComplete, setChallengeComplete] = useState(false);

  const scenarios: BossScenario[] = [
    { id: 1, scenario: "Your boss says 'Good morning'. What do you say?", options: ["Good morning", "Goodbye", "Thank you", "Please"], correctAnswer: "Good morning", explanation: "Say 'Good morning' back when your boss greets you.", points: 15 },
    { id: 2, scenario: "Your boss asks 'How are you?'. What do you say?", options: ["I'm fine, thank you", "Goodbye", "Please", "Thank you"], correctAnswer: "I'm fine, thank you", explanation: "Say 'I'm fine, thank you' when someone asks how you are.", points: 15 },
    { id: 3, scenario: "Your boss says 'Thank you'. What do you say?", options: ["Hello", "Goodbye", "You're welcome", "Please"], correctAnswer: "You're welcome", explanation: "Say 'You're welcome' when someone thanks you.", points: 15 },
    { id: 4, scenario: "Your boss asks 'Can you help me?'. What do you say?", options: ["No", "Yes, I can", "Goodbye", "Please"], correctAnswer: "Yes, I can", explanation: "Say 'Yes, I can' when you can help someone.", points: 15 },
    { id: 5, scenario: "Your boss asks 'When can you finish this work?'. What do you say?", options: ["I don't know", "Tomorrow", "Never", "Maybe"], correctAnswer: "Tomorrow", explanation: "Give a clear, realistic answer about when you can finish work.", points: 20 },
    { id: 6, scenario: "Your boss says 'This is wrong'. What do you say?", options: ["It's not my fault", "I'm sorry, I'll fix it", "I don't care", "Blame someone else"], correctAnswer: "I'm sorry, I'll fix it", explanation: "Take responsibility and offer to fix mistakes.", points: 20 },
    { id: 7, scenario: "Your boss asks 'Do you understand?'. What do you say if you don't understand?", options: ["Yes, I understand", "No, I don't understand. Can you explain?", "I don't know", "Maybe"], correctAnswer: "No, I don't understand. Can you explain?", explanation: "It's better to ask for clarification than to make mistakes.", points: 20 },
    { id: 8, scenario: "Your boss asks 'Can you work overtime?'. What do you say?", options: ["No way", "Yes, I can", "I don't know", "Maybe later"], correctAnswer: "Yes, I can", explanation: "Show willingness to help when possible.", points: 20 },
  ];

  const currentScenario = scenarios[currentScenarioIndex];
  const isLastScenario = currentScenarioIndex === scenarios.length - 1;

  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer) return;
    setSelectedAnswer(answer);
    const isCorrect = answer === currentScenario.correctAnswer;
    onAnswer(isCorrect, currentScenario.points, "scenario");
    setShowExplanation(true);
  };

  const handleNextScenario = () => {
    if (isLastScenario) {
      setChallengeComplete(true);
    } else {
      setCurrentScenarioIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleRestart = () => {
    setCurrentScenarioIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setChallengeComplete(false);
  };

  if (challengeComplete) {
    return (
      <div className="relative z-20 max-w-3xl mx-auto rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl text-white p-6 shadow-[0_12px_40px_rgba(0,0,0,.22)]">
        <div className="flex items-center gap-4 pb-5 border-b border-white/10">
          <div className="w-14 h-14 rounded-full grid place-items-center bg-gradient-to-br from-rose-400 to-orange-500 text-2xl shadow">👔</div>
          <div>
            <h2 className="text-2xl font-bold">🎉 Challenge Complete!</h2>
            <p className="text-slate-300">Excellent professional communication skills!</p>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button onClick={handleRestart} className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 transition">Try Again</button>
          <button onClick={onBack} className="px-4 py-2 rounded-lg bg-slate-500/80 hover:bg-slate-500 transition">Back to Menu</button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-20 max-w-3xl mx-auto rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl text-white p-6 shadow-[0_12px_40px_rgba(0,0,0,.22)]">
      {/* Header */}
      <div className="flex items-center gap-4 pb-5 border-b border-white/10">
        <div className="w-14 h-14 rounded-full grid place-items-center bg-gradient-to-br from-rose-400 to-orange-500 text-2xl shadow">👔</div>
        <div>
          <h2 className="text-2xl font-bold">Boss Challenge</h2>
          <p className="text-slate-300">
            Professional Communication • Scenario {currentScenarioIndex + 1} / {scenarios.length}
          </p>
        </div>
      </div>

      {/* Scenario */}
      <div className="mt-5 p-4 rounded-xl bg-white/5 border border-white/10">
        <h3 className="font-semibold mb-2">What would you say to your boss?</h3>
        <p className="text-slate-200">{currentScenario.scenario}</p>
      </div>

      {/* Options */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {currentScenario.options.map((option, idx) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = option === currentScenario.correctAnswer;
          const base =
            "px-4 py-3 rounded-lg text-left border transition disabled:opacity-90";
          const idle = "bg-white/5 border-white/10 hover:bg-white/10";
          const good = "bg-emerald-500/85 border-emerald-400 text-white";
          const bad = "bg-rose-500/85 border-rose-400 text-white";
          return (
            <button
              key={idx}
              type="button"
              onClick={() => handleAnswerSelect(option)}
              disabled={selectedAnswer !== null}
              className={`${base} ${
                selectedAnswer
                  ? isCorrect
                    ? good
                    : isSelected
                    ? bad
                    : "bg-white/5 border-white/10"
                  : idle
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10">
          <h4 className="font-semibold mb-1">Professional Tip</h4>
          <p className="text-slate-200">{currentScenario.explanation}</p>
        </div>
      )}

      {/* Controls */}
      <div className="mt-6 flex justify-between">
        <button onClick={onBack} className="px-4 py-2 rounded-lg bg-slate-500/80 hover:bg-slate-500 transition">Back to Menu</button>
        {showExplanation && (
          <button
            onClick={handleNextScenario}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition"
          >
            {isLastScenario ? "Finish Challenge" : "Next Scenario"}
          </button>
        )}
      </div>
    </div>
  );
};

export default BossChallenge;

