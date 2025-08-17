import React, { useState } from "react";

interface ClientMeetingProps {
  onAnswer: (isCorrect: boolean, points: number, questionType: string) => void;
  onBack: () => void;
}

interface ClientScenario {
  id: number;
  scenario: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  points: number;
}

const ClientMeeting: React.FC<ClientMeetingProps> = ({ onAnswer, onBack }) => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [meetingComplete, setMeetingComplete] = useState(false);

  const scenarios: ClientScenario[] = [
    { id: 1, scenario: "A client says 'Hello'. What do you say?", options: ["Hello", "Goodbye", "Thank you", "Please"], correctAnswer: "Hello", explanation: "Say 'Hello' back when a client greets you.", points: 15 },
    { id: 2, scenario: "A client asks 'How much does it cost?'. What do you say?", options: ["I don't know", "It costs $50", "Goodbye", "Please"], correctAnswer: "It costs $50", explanation: "Tell the client the price when they ask.", points: 15 },
    { id: 3, scenario: "A client says 'Thank you'. What do you say?", options: ["Hello", "Goodbye", "You're welcome", "Please"], correctAnswer: "You're welcome", explanation: "Say 'You're welcome' when a client thanks you.", points: 15 },
    { id: 4, scenario: "A client asks 'When can you deliver?'. What do you say?", options: ["Never", "Next week", "Goodbye", "Please"], correctAnswer: "Next week", explanation: "Tell the client when you can deliver.", points: 15 },
    { id: 5, scenario: "A client says 'I'm not happy with this'. What do you say?", options: ["I don't care", "I'm sorry to hear that. How can I help?", "That's your problem", "Goodbye"], correctAnswer: "I'm sorry to hear that. How can I help?", explanation: "Show empathy and offer to help solve the problem.", points: 20 },
    { id: 6, scenario: "A client asks 'Can you help me?'. What do you say?", options: ["No", "Yes, I can help you", "I don't know", "Maybe"], correctAnswer: "Yes, I can help you", explanation: "Always offer help to clients when possible.", points: 20 },
    { id: 7, scenario: "A client says 'This is too expensive'. What do you say?", options: ["Too bad", "I understand. Let me show you other options", "That's the price", "Go somewhere else"], correctAnswer: "I understand. Let me show you other options", explanation: "Show understanding and offer alternatives.", points: 20 },
    { id: 8, scenario: "A client asks 'Do you have this in blue?'. What do you say?", options: ["No", "Yes, we do", "I don't know", "Maybe"], correctAnswer: "Yes, we do", explanation: "Give clear, helpful answers to client questions.", points: 20 },
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
      setMeetingComplete(true);
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
    setMeetingComplete(false);
  };

  if (meetingComplete) {
    return (
      <div className="relative z-20 max-w-3xl mx-auto rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl text-white p-6 shadow-[0_12px_40px_rgba(0,0,0,.22)]">
        <div className="flex items-center gap-4 pb-5 border-b border-white/10">
          <div className="w-14 h-14 rounded-full grid place-items-center bg-gradient-to-br from-emerald-400 to-teal-500 text-2xl shadow">🤝</div>
          <div>
            <h2 className="text-2xl font-bold">🎉 Meeting Complete!</h2>
            <p className="text-slate-300">Outstanding customer service skills!</p>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button onClick={handleRestart} className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 transition">Try Again</button>
          <button onClick={onBack} className="px-4 py-2 rounded-lg bg-slate-500/80 hover:bg-slate-500 transition">Back to Menu</button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-20 max-w-3xl mx-auto rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl text-white p-6 shadow-[0_12px_40px_rgba(0,0,0,.22)]">
      {/* Header */}
      <div className="flex items-center gap-4 pb-5 border-b border-white/10">
        <div className="w-14 h-14 rounded-full grid place-items-center bg-gradient-to-br from-emerald-400 to-teal-500 text-2xl shadow">🤝</div>
        <div>
          <h2 className="text-2xl font-bold">Client Meeting</h2>
          <p className="text-slate-300">
            Customer Service • Scenario {currentScenarioIndex + 1} / {scenarios.length}
          </p>
        </div>
      </div>

      {/* Scenario */}
      <div className="mt-5 p-4 rounded-xl bg-white/5 border border-white/10">
        <h3 className="font-semibold mb-2">What would you say to your client?</h3>
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
          <h4 className="font-semibold mb-1">Customer Service Tip</h4>
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
            {isLastScenario ? "Finish Meeting" : "Next Scenario"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ClientMeeting;

