import type { Question } from "../types";

export const criticalThinkingQuestions: Question[] = [
  {
    id: 301,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "A visitor arrives without a pass. What should you do first?",
    options: [
      "Let them in quickly",
      "Ask them to wait outside",
      "Politely check their name and call reception/security",
      "Tell them to come tomorrow"
    ],
    correctAnswer: "Politely check their name and call reception/security",
    explanation: "Verify identity and follow building procedure before access.",
    explanationRu: "Сначала проверь личность и действуй по процедуре (позвонить на ресепшн/охране).",
    points: 25,
    category: "Security & Access",
    hintRu: "Ключ — безопасность и процедура доступа, а не скорость."
  },
  {
    id: 302,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "A client says: “I’m not happy with the service.” What’s your best first reply?",
    options: [
      "It's not our problem",
      "Calm down",
      "I’m sorry to hear that. Could you tell me more so I can help?",
      "Please write an email"
    ],
    correctAnswer: "I’m sorry to hear that. Could you tell me more so I can help?",
    explanation: "Acknowledge the feeling and invite details to resolve the issue.",
    explanationRu: "Признай эмоцию клиента и попроси детали, чтобы решить проблему.",
    points: 25,
    category: "Customer Care",
    hintRu: "Сочувствие + уточняющие вопросы — база клиентского сервиса."
  },
  {
    id: 303,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "Your teammate made a small mistake in a shared document. What should you do?",
    options: [
      "Publicly point it out in the chat",
      "Quietly fix it and say nothing",
      "Fix it and send a polite note with context",
      "Delete the document"
    ],
    correctAnswer: "Fix it and send a polite note with context",
    explanation: "Collaborative fix + respectful notification avoids repeated errors.",
    explanationRu: "Исправь и вежливо сообщи с контекстом — так ошибка не повторится.",
    points: 25,
    category: "Teamwork",
    hintRu: "Не публичный стыд и не молчание — вежливое уведомление."
  },
  {
    id: 304,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "You are 10 minutes late to a meeting. What is the best action?",
    options: [
      "Skip the meeting",
      "Enter and start explaining traffic",
      "Enter quietly and apologize briefly",
      "Wait until the break"
    ],
    correctAnswer: "Enter quietly and apologize briefly",
    explanation: "Minimize disruption and acknowledge the delay succinctly.",
    explanationRu: "Войди тихо, кратко извинись — не отвлекай команду надолго.",
    points: 25,
    category: "Professional Behavior",
    hintRu: "Краткость и уважение к времени других."
  },
  {
    id: 305,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "A colleague asks for help while you have a deadline soon. What’s best?",
    options: [
      "Ignore them",
      "Agree and miss your deadline",
      "Say when you can help or suggest another resource",
      "Tell them to ask someone else rudely"
    ],
    correctAnswer: "Say when you can help or suggest another resource",
    explanation: "Respect your commitments and still provide support options.",
    explanationRu: "Сохрани дедлайн и помоги: назначь время или предложи ресурс/коллегу.",
    points: 25,
    category: "Prioritization",
    hintRu: "Баланс: твои сроки + помощь коллеге."
  },
  {
    id: 306,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "You receive confidential data by mistake. What should you do?",
    options: [
      "Forward it to your friends",
      "Delete it and say nothing",
      "Inform the sender and follow company policy",
      "Upload it to a public folder"
    ],
    correctAnswer: "Inform the sender and follow company policy",
    explanation: "Data incidents require transparency and policy-compliant actions.",
    explanationRu: "Сообщи отправителю и следуй политике безопасности данных.",
    points: 25,
    category: "Compliance",
    hintRu: "Безопасность данных > инициатива в одиночку."
  },
  {
    id: 307,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "A customer asks for a discount you cannot give. Best response?",
    options: [
      "Say no and end the call",
      "Offer alternatives or value (bundle, trial, extended support)",
      "Promise a discount without approval",
      "Ignore the request"
    ],
    correctAnswer: "Offer alternatives or value (bundle, trial, extended support)",
    explanation: "If discount is unavailable, propose other benefits within policy.",
    explanationRu: "Нет скидки — предложи альтернативную ценность по правилам компании.",
    points: 25,
    category: "Negotiation",
    hintRu: "Предложение ценности вместо запрещённой скидки."
  },
  {
    id: 308,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "You don’t understand a task from your manager. What do you do?",
    options: [
      "Do something random",
      "Wait and hope",
      "Ask clarifying questions and confirm expectations",
      "Say it’s impossible"
    ],
    correctAnswer: "Ask clarifying questions and confirm expectations",
    explanation: "Clarification avoids rework and shows responsibility.",
    explanationRu: "Задай уточнения и подтверди ожидания — меньше переделок.",
    points: 25,
    category: "Communication",
    hintRu: "Уточнение > угадывание."
  },
  {
    id: 309,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "There is a safety hazard (wet floor) near reception. Best action?",
    options: [
      "Walk away",
      "Take a photo and post it online",
      "Warn people and report it immediately",
      "Wait for the cleaner"
    ],
    correctAnswer: "Warn people and report it immediately",
    explanation: "Act to reduce risk and escalate per procedure.",
    explanationRu: "Предупреди людей и сообщи ответственным — снижай риск сразу.",
    points: 25,
    category: "Safety",
    hintRu: "Сначала — безопасность окружающих."
  },
  {
    id: 310,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "A client speaks quickly and you can’t catch details. Best phrase?",
    options: [
      "Speak slower!",
      "Can you repeat that more slowly, please?",
      "I don’t care",
      "Just email me"
    ],
    correctAnswer: "Can you repeat that more slowly, please?",
    explanation: "Polite request ensures accurate understanding.",
    explanationRu: "Вежливая просьба повторить медленнее — для точности.",
    points: 25,
    category: "Customer Communication",
    hintRu: "Вежливость + ясность."
  },
  {
    id: 311,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "You found an error in a report that will be sent today. Best action?",
    options: [
      "Ignore it to save time",
      "Fix it silently after sending",
      "Alert the owner, suggest a quick fix, and help if needed",
      "Delete the report"
    ],
    correctAnswer: "Alert the owner, suggest a quick fix, and help if needed",
    explanation: "Escalate early with a solution mindset.",
    explanationRu: "Скажи владельцу, предложи быстрое решение и помоги — не молчи.",
    points: 25,
    category: "Quality",
    hintRu: "Сообщить сразу + предложить решение."
  },
  {
    id: 312,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "Your colleague shares personal data in a public chat. What do you do?",
    options: [
      "Ignore it",
      "Share it to warn others",
      "Ask them to delete it and move conversation to a private channel; report if needed",
      "Download it for backup"
    ],
    correctAnswer: "Ask them to delete it and move conversation to a private channel; report if needed",
    explanation: "Reduce exposure and follow data protection policy.",
    explanationRu: "Попроси удалить, продолжай в приватном канале, при необходимости сообщи.",
    points: 25,
    category: "Privacy",
    hintRu: "Минимизируй распространение и следуй политике."
  }
];
