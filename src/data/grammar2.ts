import type { Question } from "../types";

/**
 * Grammar 2 — Would like / Need / Want · Demonstratives · Imperatives
 * Очки: 15 за правильный ответ
 */
export const grammar2: Question[] = [
  // ——— Would like / Need / Want ———
  {
    id: 907,
    type: "grammar",
    difficulty: "beginner",
    question: "I ___ to speak to the manager, please. (polite)",
    options: ["would like", "want", "am like", "will"],
    correctAnswer: "would like",
    explanation: "'Would like to' is a polite request.",
    explanationRu: "'Would like to' — вежливая просьба.",
    points: 15,
    category: "Would like to",
    hintRu: "Вежливее, чем want."
  },
  {
    id: 908,
    type: "grammar",
    difficulty: "beginner",
    question: "We ___ more time to finish this task. (necessary)",
    options: ["need", "would like", "are needing", "should"],
    correctAnswer: "need",
    explanation: "Use 'need' for necessity.",
    explanationRu: "'Need' — необходимость.",
    points: 15,
    category: "Need / Want",
    hintRu: "Нужно ≠ хочу."
  },
  {
    id: 909,
    type: "grammar",
    difficulty: "beginner",
    question: "The client ___ a discount. (desire)",
    options: ["wants", "want", "would like to", "is want"],
    correctAnswer: "wants",
    explanation: "Use 'want(s)' for desire; add -s with 'he/she/it'.",
    explanationRu: "'Want' выражает желание; с he/she/it добавляем -s.",
    points: 15,
    category: "Need / Want",
    hintRu: "3-е лицо ед. числа → -s."
  },

  // ——— Demonstratives ———
  {
    id: 910,
    type: "grammar",
    difficulty: "beginner",
    question: "___ document is for you. (near, singular)",
    options: ["This", "These", "That", "Those"],
    correctAnswer: "This",
    explanation: "'This' for something near (singular).",
    explanationRu: "'This' — близко, один предмет.",
    points: 15,
    category: "Demonstratives",
    hintRu: "В руке."
  },
  {
    id: 911,
    type: "grammar",
    difficulty: "beginner",
    question: "___ folders on the shelf are new. (near, plural)",
    options: ["These", "This", "That", "Those"],
    correctAnswer: "These",
    explanation: "'These' for things near (plural).",
    explanationRu: "'These' — близко, много предметов.",
    points: 15,
    category: "Demonstratives",
    hintRu: "Рядом и больше одного."
  },
  {
    id: 912,
    type: "grammar",
    difficulty: "beginner",
    question: "Is ___ the meeting room on the 3rd floor? (far, singular)",
    options: ["that", "this", "these", "those"],
    correctAnswer: "that",
    explanation: "'That' for something far (singular).",
    explanationRu: "'That' — далеко, один предмет.",
    points: 15,
    category: "Demonstratives",
    hintRu: "На расстоянии."
  },

  // ——— Imperatives ———
  {
    id: 913,
    type: "grammar",
    difficulty: "beginner",
    question: "___ your keycard at the gate, please. (instruction)",
    options: ["Badge", "Badging", "To badge", "Badged"],
    correctAnswer: "Badge",
    explanation: "Imperative = base form without 'to'.",
    explanationRu: "Повелительное наклонение — bare infinitive без 'to'.",
    points: 15,
    category: "Imperatives",
    hintRu: "Короткая инструкция."
  },
  {
    id: 914,
    type: "grammar",
    difficulty: "beginner",
    question: "___ late for the meeting. (negative advice)",
    options: ["Don’t be", "Not be", "No be", "Doesn’t be"],
    correctAnswer: "Don’t be",
    explanation: "Negative imperative: 'Don’t + base form'.",
    explanationRu: "Отрицательная форма: 'Don’t + глагол'.",
    points: 15,
    category: "Imperatives",
    hintRu: "Вежливый запрет."
  },
  {
    id: 929,
    type: "grammar",
    difficulty: "beginner",
    question: "___ the form carefully before you sign.",
    options: ["Read", "Reads", "To read", "Reading"],
    correctAnswer: "Read",
    explanation: "Imperative uses the base verb.",
    explanationRu: "Повелительное наклонение — базовая форма.",
    points: 15,
    category: "Imperatives",
    hintRu: "Инструкция."
  }
];
