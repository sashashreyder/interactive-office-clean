import type { Question } from "../types";

/**
 * Grammar 3 — Modals · There is/are · Countable/Uncountable · Possessives
 * Очки: 15 за правильный ответ
 */
export const grammar3: Question[] = [
  // ——— Modal Verbs (can / must / should) ———
  {
    id: 915,
    type: "grammar",
    difficulty: "beginner",
    question: "You ___ ask questions if you don’t understand. (advice)",
    options: ["should", "must", "can’t", "are going to"],
    correctAnswer: "should",
    explanation: "'Should' is used for advice.",
    explanationRu: "'Should' — совет/рекомендация.",
    points: 15,
    category: "Modal Verbs",
    hintRu: "Хорошо бы сделать."
  },
  {
    id: 916,
    type: "grammar",
    difficulty: "beginner",
    question: "You ___ wear your badge in the office. (rule/obligation)",
    options: ["must", "can", "should", "are"],
    correctAnswer: "must",
    explanation: "'Must' indicates a strong obligation/rule.",
    explanationRu: "'Must' — строгое правило.",
    points: 15,
    category: "Modal Verbs",
    hintRu: "Обязательный пропуск."
  },
  {
    id: 917,
    type: "grammar",
    difficulty: "beginner",
    question: "I ___ help you with the form. (ability/offer)",
    options: ["can", "must", "should", "am"],
    correctAnswer: "can",
    explanation: "'Can' expresses ability or informal offer to help.",
    explanationRu: "'Can' — способность/предложение помощи.",
    points: 15,
    category: "Modal Verbs",
    hintRu: "Могу помочь."
  },

  // ——— There is / There are ———
  {
    id: 918,
    type: "grammar",
    difficulty: "beginner",
    question: "___ a printer in the office.",
    options: ["There is", "There are", "Is there", "Are there"],
    correctAnswer: "There is",
    explanation: "'There is' for singular nouns.",
    explanationRu: "'There is' — с единственным числом.",
    points: 15,
    category: "There is/There are",
    hintRu: "Один предмет."
  },
  {
    id: 919,
    type: "grammar",
    difficulty: "beginner",
    question: "___ many emails in my inbox.",
    options: ["There are", "There is", "Are there", "Is there"],
    correctAnswer: "There are",
    explanation: "'There are' for plural nouns.",
    explanationRu: "'There are' — со множественным числом.",
    points: 15,
    category: "There is/There are",
    hintRu: "Много писем."
  },
  {
    id: 920,
    type: "grammar",
    difficulty: "beginner",
    question: "___ a meeting room on the second floor?",
    options: ["Is there", "There is", "There are", "Are there"],
    correctAnswer: "Is there",
    explanation: "Question form: 'Is there' (singular).",
    explanationRu: "Вопрос: 'Is there' — ед. число.",
    points: 15,
    category: "There is/There are",
    hintRu: "Про одну переговорку."
  },

  // ——— Countable / Uncountable ———
  {
    id: 921,
    type: "grammar",
    difficulty: "beginner",
    question: "How ___ coffee do we need for the meeting?",
    options: ["much", "many", "a few", "several"],
    correctAnswer: "much",
    explanation: "Use 'much' with uncountable nouns (coffee).",
    explanationRu: "'Much' — с неисчисляемыми (coffee).",
    points: 15,
    category: "Countable/Uncountable",
    hintRu: "Кофе — неисчисляемое."
  },
  {
    id: 922,
    type: "grammar",
    difficulty: "beginner",
    question: "How ___ chairs are there in the room?",
    options: ["many", "much", "a little", "little"],
    correctAnswer: "many",
    explanation: "Use 'many' with countable plural nouns (chairs).",
    explanationRu: "'Many' — с исчисляемыми во множественном числе.",
    points: 15,
    category: "Countable/Uncountable",
    hintRu: "Стулья можно посчитать."
  },
  {
    id: 923,
    type: "grammar",
    difficulty: "beginner",
    question: "We have ___ paper left. Please buy more. (small amount, uncountable)",
    options: ["little", "few", "many", "much"],
    correctAnswer: "little",
    explanation: "'Little' = small amount with uncountables.",
    explanationRu: "'Little' — мало (для неисчисляемых).",
    points: 15,
    category: "Countable/Uncountable",
    hintRu: "Бумага — неисчисляемое."
  },

  // ——— Possessives ———
  {
    id: 924,
    type: "grammar",
    difficulty: "beginner",
    question: "This is ___ desk. (I)",
    options: ["my", "mine", "me", "I"],
    correctAnswer: "my",
    explanation: "Use 'my' + noun.",
    explanationRu: "'My' ставится перед существительным.",
    points: 15,
    category: "Possessive Pronouns",
    hintRu: "Перед словом desk."
  },
  {
    id: 925,
    type: "grammar",
    difficulty: "beginner",
    question: "This desk is ___. (I)",
    options: ["mine", "my", "me", "I"],
    correctAnswer: "mine",
    explanation: "'Mine' = possessive pronoun used without a noun.",
    explanationRu: "'Mine' — без существительного.",
    points: 15,
    category: "Possessive Pronouns",
    hintRu: "Нет слова desk → mine."
  },
  {
    id: 926,
    type: "grammar",
    difficulty: "beginner",
    question: "Is this ___ laptop? (she)",
    options: ["her", "hers", "she", "he"],
    correctAnswer: "her",
    explanation: "'Her' + noun. ('Hers' is used without a noun.)",
    explanationRu: "'Her' — перед существительным. 'Hers' — без него.",
    points: 15,
    category: "Possessive Pronouns",
    hintRu: "Есть слово laptop → her."
  }
];
