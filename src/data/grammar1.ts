import type { Question } from "../types";

/**
 * Grammar 1 — Future (will / going to) · Present Continuous
 * Очки: 15 за правильный ответ
 */
export const grammar1: Question[] = [
  // ——— Future: will ———
  {
    id: 901,
    type: "grammar",
    difficulty: "beginner",
    question: "I ___ call the client now. (decision made now)",
    options: ["will", "am going to", "am", "do"],
    correctAnswer: "will",
    explanation: "Use 'will' for a decision made at the moment of speaking.",
    explanationRu: "Используем 'will' для решения, принятого прямо сейчас.",
    points: 15,
    category: "Future Tense",
    hintRu: "Решил(а) сейчас: I'll call."
  },
  {
    id: 902,
    type: "grammar",
    difficulty: "beginner",
    question: "I think we ___ finish the report today.",
    options: ["will", "are", "have", "going to"],
    correctAnswer: "will",
    explanation: "Use 'will' for predictions/opinions without strong evidence.",
    explanationRu: "'Will' — для предположений/мнений без явных доказательств.",
    points: 15,
    category: "Future Tense",
    hintRu: "Мнение/прогноз."
  },

  // ——— Future: be going to ———
  {
    id: 903,
    type: "grammar",
    difficulty: "beginner",
    question: "We ___ launch the new website next week. (plan)",
    options: ["are going to", "will", "are", "can"],
    correctAnswer: "are going to",
    explanation: "Use 'be going to' for planned future actions.",
    explanationRu: "'Be going to' — для планов на будущее.",
    points: 15,
    category: "Future Tense",
    hintRu: "Уже запланировано."
  },
  {
    id: 904,
    type: "grammar",
    difficulty: "beginner",
    question: "Look at the sky! It ___ rain. (evidence)",
    options: ["is going to", "will", "is", "should"],
    correctAnswer: "is going to",
    explanation: "Use 'going to' with present evidence.",
    explanationRu: "'Going to' — когда есть явные признаки.",
    points: 15,
    category: "Future Tense",
    hintRu: "Тёмные тучи."
  },

  // ——— Present Continuous ———
  {
    id: 905,
    type: "grammar",
    difficulty: "beginner",
    question: "She ___ with a customer right now.",
    options: ["is speaking", "speaks", "will speak", "going to speak"],
    correctAnswer: "is speaking",
    explanation: "Present Continuous for actions happening now.",
    explanationRu: "Present Continuous — действие происходит сейчас.",
    points: 15,
    category: "Present Continuous",
    hintRu: "Right now / at the moment."
  },
  {
    id: 906,
    type: "grammar",
    difficulty: "beginner",
    question: "They ___ lunch in the cafeteria at the moment.",
    options: ["are having", "have", "will have", "had"],
    correctAnswer: "are having",
    explanation: "'Be + V-ing' shows current activity.",
    explanationRu: "'Be + V-ing' — действие в момент речи.",
    points: 15,
    category: "Present Continuous",
    hintRu: "Сейчас едят."
  },
  {
    id: 927,
    type: "grammar",
    difficulty: "beginner",
    question: "I can’t talk now — we ___ a meeting.",
    options: ["are having", "have", "will have", "are going to have"],
    correctAnswer: "are having",
    explanation: "Use Present Continuous for actions happening now.",
    explanationRu: "Сейчас в процессе → Present Continuous.",
    points: 15,
    category: "Present Continuous",
    hintRu: "Прямо сейчас."
  },
  {
    id: 928,
    type: "grammar",
    difficulty: "beginner",
    question: "Listen! The manager ___ an announcement.",
    options: ["is making", "makes", "will make", "going to make"],
    correctAnswer: "is making",
    explanation: "Something happening at the moment → Present Continuous.",
    explanationRu: "В момент речи → is making.",
    points: 15,
    category: "Present Continuous",
    hintRu: "Listen! / Look! — часто PC."
  }
];
