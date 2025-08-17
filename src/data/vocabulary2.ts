import type { Question } from "../types";

/**
 * Vocabulary 2 — Management & Customers
 * Темы: менеджмент (nouns/verbs), клиентский сервис (nouns/phrases)
 * Очки: 10 за правильный ответ
 */
export const vocabulary2: Question[] = [
  // ——— Management · Nouns ———
  {
    id: 701,
    type: "vocabulary",
    difficulty: "beginner",
    question: "A person who guides and supports a junior employee is a ___.",
    options: ["mentor", "customer", "receptionist", "supplier"],
    correctAnswer: "mentor",
    explanation: "A mentor helps with learning and growth.",
    explanationRu: "Mentor — наставник.",
    points: 10,
    category: "Management · Nouns",
    hintRu: "Помогает учиться и расти."
  },
  {
    id: 702,
    type: "vocabulary",
    difficulty: "beginner",
    question: "A person who is responsible for a team is a ___.",
    options: ["supervisor", "client", "secretary", "investor"],
    correctAnswer: "supervisor",
    explanation: "A supervisor manages people and tasks.",
    explanationRu: "Supervisor — руководитель/куратор.",
    points: 10,
    category: "Management · Nouns",
    hintRu: "Отвечает за людей и задачи."
  },
  {
    id: 703,
    type: "vocabulary",
    difficulty: "beginner",
    question: "Regular team time to discuss work is a ___.",
    options: ["meeting", "warranty", "receipt", "agenda"],
    correctAnswer: "meeting",
    explanation: "A meeting is when people discuss topics together.",
    explanationRu: "Meeting — собрание/встреча.",
    points: 10,
    category: "Management · Nouns",
    hintRu: "Обсуждение задач вместе."
  },
  {
    id: 704,
    type: "vocabulary",
    difficulty: "beginner",
    question: "The result and quality of your work is your ___.",
    options: ["performance", "complaint", "discount", "timeframe"],
    correctAnswer: "performance",
    explanation: "Performance = how well you do your job.",
    explanationRu: "Performance — эффективность/результативность.",
    points: 10,
    category: "Management · Nouns",
    hintRu: "Насколько хорошо работа сделана."
  },
  {
    id: 705,
    type: "vocabulary",
    difficulty: "beginner",
    question: "All employees of a company are its ___.",
    options: ["staff", "assets", "shareholders", "customers"],
    correctAnswer: "staff",
    explanation: "Staff = people who work in an organization.",
    explanationRu: "Staff — персонал/штат.",
    points: 10,
    category: "Management · Nouns",
    hintRu: "Все сотрудники компании."
  },
  {
    id: 706,
    type: "vocabulary",
    difficulty: "beginner",
    question: "Organizing tasks between teams is called ___.",
    options: ["coordination", "evaluation", "complaint", "enforcement"],
    correctAnswer: "coordination",
    explanation: "Coordination = arranging cooperation between parts.",
    explanationRu: "Coordination — координация.",
    points: 10,
    category: "Management · Nouns",
    hintRu: "Согласование между отделами."
  },
  {
    id: 707,
    type: "vocabulary",
    difficulty: "beginner",
    question: "Checking quality and results of work is ___.",
    options: ["evaluation", "discount", "payment", "receipt"],
    correctAnswer: "evaluation",
    explanation: "Evaluation = assessing performance or quality.",
    explanationRu: "Evaluation — оценка работы.",
    points: 10,
    category: "Management · Nouns",
    hintRu: "Оценивание результатов."
  },
  {
    id: 708,
    type: "vocabulary",
    difficulty: "beginner",
    question: "The way tasks move from start to finish is ___.",
    options: ["workflow", "timeframe", "memo", "folder"],
    correctAnswer: "workflow",
    explanation: "Workflow = process of doing work.",
    explanationRu: "Workflow — рабочий процесс.",
    points: 10,
    category: "Management · Nouns",
    hintRu: "Процесс выполнения задач."
  },

  // ——— Management · Verbs ———
  {
    id: 709,
    type: "vocabulary",
    difficulty: "beginner",
    question: "To give tasks to other people is to ___.",
    options: ["delegate", "hire", "proofread", "redline"],
    correctAnswer: "delegate",
    explanation: "Delegate = assign tasks to others.",
    explanationRu: "Delegate — делегировать.",
    points: 10,
    category: "Management · Verbs",
    hintRu: "Передача задач."
  },
  {
    id: 710,
    type: "vocabulary",
    difficulty: "beginner",
    question: "To bring a new person into the company is to ___.",
    options: ["hire", "fire", "downsize", "terminate"],
    correctAnswer: "hire",
    explanation: "Hire = employ someone.",
    explanationRu: "Hire — нанимать.",
    points: 10,
    category: "Management · Verbs",
    hintRu: "Противоположно увольнять."
  },
  {
    id: 711,
    type: "vocabulary",
    difficulty: "beginner",
    question: "To check writing for mistakes is to ___.",
    options: ["proofread", "redline", "audit", "approve"],
    correctAnswer: "proofread",
    explanation: "Proofread = read and correct text.",
    explanationRu: "Proofread — вычитать (поправить ошибки).",
    points: 10,
    category: "Management · Verbs",
    hintRu: "Орфография, пунктуация."
  },
  {
    id: 712,
    type: "vocabulary",
    difficulty: "beginner",
    question: "To mark changes and comments in a document is to ___.",
    options: ["redline", "arrange", "forward", "align"],
    correctAnswer: "redline",
    explanation: "Redline = add edits/changes to a doc.",
    explanationRu: "Redline — вносить правки (пометки) в документ.",
    points: 10,
    category: "Management · Verbs",
    hintRu: "Отметки/исправления в тексте."
  },
  {
    id: 713,
    type: "vocabulary",
    difficulty: "beginner",
    question: "To send an email to another person is to ___.",
    options: ["forward", "follow up", "announce", "badge in"],
    correctAnswer: "forward",
    explanation: "Forward = send something onward to someone.",
    explanationRu: "Forward — пересылать (письмо).",
    points: 10,
    category: "Management · Verbs",
    hintRu: "Кнопка в почте."
  },
  {
    id: 714,
    type: "vocabulary",
    difficulty: "beginner",
    question: "After a meeting, you check progress. You ___.",
    options: ["follow up", "proofread", "hire", "arrange"],
    correctAnswer: "follow up",
    explanation: "Follow up = check if tasks are done.",
    explanationRu: "Follow up — проверить выполнение.",
    points: 10,
    category: "Management · Verbs",
    hintRu: "Вернуться к вопросу позже."
  },
  {
    id: 715,
    type: "vocabulary",
    difficulty: "beginner",
    question: "To organize time, place, and people for an event is to ___.",
    options: ["arrange", "audit", "negotiate", "enforce"],
    correctAnswer: "arrange",
    explanation: "Arrange = plan and organize.",
    explanationRu: "Arrange — организовывать.",
    points: 10,
    category: "Management · Verbs",
    hintRu: "Назначить дату/время/комнату."
  },
  {
    id: 716,
    type: "vocabulary",
    difficulty: "beginner",
    question: "Before we start work, the supervisor will __ the team.",
    options: ["brief", "terminate", "downsize", "reassign"],
    correctAnswer: "brief",
    explanation: "Brief = give a short instruction.",
    explanationRu: "Brief — проинструктировать.",
    points: 10,
    category: "Management · Verbs",
    hintRu: "Короткий инструктаж."
  },

  // ——— Customers · Nouns ———
  {
    id: 717,
    type: "vocabulary",
    difficulty: "beginner",
    question: "A written note that confirms payment is a ___.",
    options: ["receipt", "request", "memo", "guidelines"],
    correctAnswer: "receipt",
    explanation: "A receipt proves you paid for something.",
    explanationRu: "Receipt — чек/квитанция.",
    points: 10,
    category: "Customers · Nouns",
    hintRu: "Выдают после оплаты."
  },
  {
    id: 718,
    type: "vocabulary",
    difficulty: "beginner",
    question: "A customer’s problem about a product/service is a ___.",
    options: ["complaint", "warranty", "discount", "inquiry"],
    correctAnswer: "complaint",
    explanation: "Complaint = statement that something is wrong.",
    explanationRu: "Complaint — жалоба.",
    points: 10,
    category: "Customers · Nouns",
    hintRu: "Отрицательная обратная связь."
  },
  {
    id: 719,
    type: "vocabulary",
    difficulty: "beginner",
    question: "A question from a customer is an ___.",
    options: ["inquiry", "payment", "request", "assistance"],
    correctAnswer: "inquiry",
    explanation: "Inquiry = asking for information.",
    explanationRu: "Inquiry — запрос (вопрос) о чём-то.",
    points: 10,
    category: "Customers · Nouns",
    hintRu: "Просьба рассказать информацию."
  },
  {
    id: 720,
    type: "vocabulary",
    difficulty: "beginner",
    question: "Help or support for a customer is ___.",
    options: ["assistance", "discount", "patience", "warranty"],
    correctAnswer: "assistance",
    explanation: "Assistance = help, support.",
    explanationRu: "Assistance — помощь/поддержка.",
    points: 10,
    category: "Customers · Nouns",
    hintRu: "Помощь клиенту."
  },

  // ——— Customer Phrases ———
  {
    id: 721,
    type: "vocabulary",
    difficulty: "beginner",
    question: "Choose the polite service question:",
    options: ["Can I help you?", "What do you want?", "Speak faster!", "You are wrong"],
    correctAnswer: "Can I help you?",
    explanation: "Use polite tone with customers.",
    explanationRu: "Вежливо: “Могу я вам помочь?”",
    points: 10,
    category: "Customer Phrases",
    hintRu: "Открытый вежливый вопрос."
  },
  {
    id: 722,
    type: "vocabulary",
    difficulty: "beginner",
    question: "A customer wants to return a product. They say:",
    options: [
      "I’d like a refund, please.",
      "I need a discount now.",
      "Hurry up!",
      "Where is your office?"
    ],
    correctAnswer: "I’d like a refund, please.",
    explanation: "A refund = money back.",
    explanationRu: "Refund — возврат денег.",
    points: 10,
    category: "Customer Phrases",
    hintRu: "Вежливая просьба о возврате."
  },
  {
    id: 723,
    type: "vocabulary",
    difficulty: "beginner",
    question: "A customer is unhappy. Best first reply:",
    options: [
      "I’m sorry to hear that. Could you tell me more?",
      "Calm down.",
      "It’s not our problem.",
      "Just email us."
    ],
    correctAnswer: "I’m sorry to hear that. Could you tell me more?",
    explanation: "Acknowledge the feeling and ask for details.",
    explanationRu: "Признать эмоцию и попросить детали — лучшая первая реакция.",
    points: 10,
    category: "Customer Phrases",
    hintRu: "Сочувствие + уточнение."
  },
  {
    id: 724,
    type: "vocabulary",
    difficulty: "beginner",
    question: "A typical request for direction:",
    options: [
      "Where can I find…?",
      "Give me a discount.",
      "Be quick!",
      "You are wrong."
    ],
    correctAnswer: "Where can I find…?",
    explanation: "A polite way to ask for directions.",
    explanationRu: "Вежливо спросить, где найти.",
    points: 10,
    category: "Customer Phrases",
    hintRu: "Навигация в здании/магазине."
  }
];

