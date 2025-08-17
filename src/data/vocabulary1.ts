import type { Question } from "../types";

/**
 * Vocabulary 1 — Business Center & Front Desk
 * Темы: офисные сущ., действия на работе, описания пространства, фронт-деск фразы
 * Очки: 10 за правильный ответ
 */
export const vocabulary1: Question[] = [
  // ——— Business Center · Nouns ———
  {
    id: 601,
    type: "vocabulary",
    difficulty: "beginner",
    question: "Which word means the place where people work?",
    options: ["reception", "office", "workspace", "cabinet"],
    correctAnswer: "office",
    explanation: "An office is a place where people work.",
    explanationRu: "Office — это место, где люди работают.",
    points: 10,
    category: "Business Center · Nouns",
    hintRu: "Думаем о месте, а не о мебели."
  },
  {
    id: 602,
    type: "vocabulary",
    difficulty: "beginner",
    question: "Visitors usually wait or check in at the ___.",
    options: ["reception", "cafeteria", "headquarter", "workspace"],
    correctAnswer: "reception",
    explanation: "Reception is the front desk area for visitors.",
    explanationRu: "Reception — стойка ресепшн для посетителей.",
    points: 10,
    category: "Business Center · Nouns",
    hintRu: "Там спрашивают: “Can I help you?”"
  },
  {
    id: 603,
    type: "vocabulary",
    difficulty: "beginner",
    question: "You use a ___ to enter a secure building.",
    options: ["keycard", "folder", "memo", "stamp"],
    correctAnswer: "keycard",
    explanation: "A keycard lets you badge in to enter.",
    explanationRu: "Keycard — пропуск/карта для входа в здание.",
    points: 10,
    category: "Business Center · Nouns",
    hintRu: "Карта-пропуск для турникета."
  },
  {
    id: 604,
    type: "vocabulary",
    difficulty: "beginner",
    question: "Employees eat lunch in the ___.",
    options: ["cafeteria", "cabinet", "meeting", "workflow"],
    correctAnswer: "cafeteria",
    explanation: "Cafeteria is a place for meals at work.",
    explanationRu: "Cafeteria — столовая.",
    points: 10,
    category: "Business Center · Nouns",
    hintRu: "Не путай с cabinet (шкаф/кабинет)."
  },
  {
    id: 605,
    type: "vocabulary",
    difficulty: "beginner",
    question: "Papers and documents are stored in a ___.",
    options: ["cabinet", "address", "warranty", "invoice"],
    correctAnswer: "cabinet",
    explanation: "A cabinet is a piece of furniture for storage.",
    explanationRu: "Cabinet — шкаф/кабинет для хранения.",
    points: 10,
    category: "Business Center · Nouns",
    hintRu: "Мебель для документов."
  },
  {
    id: 606,
    type: "vocabulary",
    difficulty: "beginner",
    question: "The company’s location is its ___.",
    options: ["address", "workspace", "headquarter", "manager"],
    correctAnswer: "address",
    explanation: "Address tells where a place is.",
    explanationRu: "Address — адрес места/компании.",
    points: 10,
    category: "Business Center · Nouns",
    hintRu: "Улица, дом, город."
  },
  {
    id: 607,
    type: "vocabulary",
    difficulty: "beginner",
    question: "The main office of a company is the ___.",
    options: ["headquarter", "secretary", "reception", "cafeteria"],
    correctAnswer: "headquarter",
    explanation: "Headquarter = main office (часто говорят “headquarters”).",
    explanationRu: "Headquarter — штаб-квартира (часто: headquarters).",
    points: 10,
    category: "Business Center · Nouns",
    hintRu: "Главный офис."
  },
  {
    id: 608,
    type: "vocabulary",
    difficulty: "beginner",
    question: "A person who answers calls and greets visitors is a ___.",
    options: ["secretary", "investor", "customer", "auditor"],
    correctAnswer: "secretary",
    explanation: "A secretary supports office communication and admin tasks.",
    explanationRu: "Secretary — секретарь.",
    points: 10,
    category: "Business Center · Nouns",
    hintRu: "Телефон, письма, встречи."
  },
  {
    id: 609,
    type: "vocabulary",
    difficulty: "beginner",
    question: "Your desk area with tools and computer is your ___.",
    options: ["workspace", "folder", "agenda", "timeframe"],
    correctAnswer: "workspace",
    explanation: "Workspace = area where you do your job.",
    explanationRu: "Workspace — рабочее место.",
    points: 10,
    category: "Business Center · Nouns",
    hintRu: "Стол, стул, монитор и т. п."
  },

  // ——— Workplace Actions ———
  {
    id: 610,
    type: "vocabulary",
    difficulty: "beginner",
    question: "You ___ your ID at the gate to enter.",
    options: ["badge in", "reprimand", "redline", "audit"],
    correctAnswer: "badge in",
    explanation: "To badge in = to enter by keycard.",
    explanationRu: "Badge in — пройти по пропуску.",
    points: 10,
    category: "Workplace Actions",
    hintRu: "Проход через турникет."
  },
  {
    id: 611,
    type: "vocabulary",
    difficulty: "beginner",
    question: "At 6 p.m. employees usually ___.",
    options: ["clock out", "clock in", "compile", "negotiate"],
    correctAnswer: "clock out",
    explanation: "Clock out = record your finish time.",
    explanationRu: "Clock out — отметить уход.",
    points: 10,
    category: "Workplace Actions",
    hintRu: "Конец смены."
  },
  {
    id: 612,
    type: "vocabulary",
    difficulty: "beginner",
    question: "Please ___ the device to the power socket.",
    options: ["plug in", "test", "announce", "align"],
    correctAnswer: "plug in",
    explanation: "Plug in = connect to electricity.",
    explanationRu: "Plug in — включить в розетку, подключить.",
    points: 10,
    category: "Workplace Actions",
    hintRu: "Про питание устройства."
  },
  {
    id: 613,
    type: "vocabulary",
    difficulty: "beginner",
    question: "When supplies are low, we must ___.",
    options: ["replenish", "fire", "downsize", "terminate"],
    correctAnswer: "replenish",
    explanation: "Replenish = fill up again.",
    explanationRu: "Replenish — пополнить (запасы).",
    points: 10,
    category: "Workplace Actions",
    hintRu: "Бумага, вода, ручки и т.п."
  },
  {
    id: 614,
    type: "vocabulary",
    difficulty: "beginner",
    question: "Please ___ the document with the official seal.",
    options: ["stamp", "forward", "delegate", "reassign"],
    correctAnswer: "stamp",
    explanation: "To stamp = to put a seal on a document.",
    explanationRu: "Stamp — поставить печать.",
    points: 10,
    category: "Workplace Actions",
    hintRu: "Официальное оформление."
  },

  // ——— Descriptions (Adjectives) ———
  {
    id: 615,
    type: "vocabulary",
    difficulty: "beginner",
    question: "A ___ room has a lot of space.",
    options: ["spacious", "cluttered", "out-of-service", "portable"],
    correctAnswer: "spacious",
    explanation: "Spacious = large, with much space.",
    explanationRu: "Spacious — просторный.",
    points: 10,
    category: "Descriptions",
    hintRu: "Противоположно тесному."
  },
  {
    id: 616,
    type: "vocabulary",
    difficulty: "beginner",
    question: "A ___ desk is full of things and not tidy.",
    options: ["cluttered", "ergonomic", "dedicated", "breezy"],
    correctAnswer: "cluttered",
    explanation: "Cluttered = messy, with many items.",
    explanationRu: "Cluttered — захламлённый.",
    points: 10,
    category: "Descriptions",
    hintRu: "Неаккуратный."
  },
  {
    id: 617,
    type: "vocabulary",
    difficulty: "beginner",
    question: "A ___ room blocks noise.",
    options: ["soundproof", "well-stocked", "officially", "open-plan"],
    correctAnswer: "soundproof",
    explanation: "Soundproof = no sound goes through.",
    explanationRu: "Soundproof — звукоизолированный.",
    points: 10,
    category: "Descriptions",
    hintRu: "Про шумоизоляцию переговорок."
  },
  {
    id: 618,
    type: "vocabulary",
    difficulty: "beginner",
    question: "The kitchen is ___ — we have coffee, tea, and snacks.",
    options: ["well-stocked", "out-of-service", "portable", "ergonomic"],
    correctAnswer: "well-stocked",
    explanation: "Well-stocked = fully supplied.",
    explanationRu: "Well-stocked — хорошо укомплектованный.",
    points: 10,
    category: "Descriptions",
    hintRu: "Всего хватает."
  },

  // ——— Front Desk Phrases ———
  {
    id: 619,
    type: "vocabulary",
    difficulty: "beginner",
    question: "Choose the polite phrase for a visitor:",
    options: ["Please have a seat", "Go away", "Be quick", "Wait somewhere"],
    correctAnswer: "Please have a seat",
    explanation: "Polite front-desk language is important.",
    explanationRu: "«Присядьте, пожалуйста».",
    points: 10,
    category: "Front Desk Phrases",
    hintRu: "Фронт-офис, приём посетителей."
  },
  {
    id: 620,
    type: "vocabulary",
    difficulty: "beginner",
    question: "You need time to find information. Say:",
    options: ["Let me check", "I don’t care", "No way", "It’s your problem"],
    correctAnswer: "Let me check",
    explanation: "Use a polite phrase to buy time.",
    explanationRu: "«Позвольте уточнить/проверить».",
    points: 10,
    category: "Front Desk Phrases",
    hintRu: "Нужно чуть времени — скажи это вежливо."
  },
  {
    id: 621,
    type: "vocabulary",
    difficulty: "beginner",
    question: "A guest asks for the toilet. You reply:",
    options: [
      "The restroom is down the hall",
      "Go somewhere",
      "No restroom here",
      "Come tomorrow"
    ],
    correctAnswer: "The restroom is down the hall",
    explanation: "Clear and polite directions help visitors.",
    explanationRu: "«Туалет в конце коридора».",
    points: 10,
    category: "Front Desk Phrases",
    hintRu: "Короткая вежливая навигация."
  },
  {
    id: 622,
    type: "vocabulary",
    difficulty: "beginner",
    question: "You are busy but will help soon. Say:",
    options: [
      "I’ll be right with you",
      "Wait forever",
      "Not my job",
      "Leave now"
    ],
    correctAnswer: "I’ll be right with you",
    explanation: "Polite phrase to show you will help in a moment.",
    explanationRu: "«Я сейчас подойду».",
    points: 10,
    category: "Front Desk Phrases",
    hintRu: "Вежливо попросить подождать чуть-чуть."
  },
  {
    id: 623,
    type: "vocabulary",
    difficulty: "beginner",
    question: "You need a signature on the form. Say:",
    options: [
      "Could you sign here?",
      "Speak faster!",
      "Pay now!",
      "Move away!"
    ],
    correctAnswer: "Could you sign here?",
    explanation: "Use polite requests with could.",
    explanationRu: "«Подпишитесь, пожалуйста, здесь».",
    points: 10,
    category: "Front Desk Phrases",
    hintRu: "Вежливая просьба."
  }
];
