import React from "react";


export interface ExerciseSelectorProps<T extends string> {
  title?: string;
  items: { key: T; label: string }[];
  onSelect: (key: T) => void;
  onBack: () => void;
}

const ExerciseSelector = <T extends string>({
  title = "Выберите упражнение",
  items,
  onSelect,
  onBack,
}: ExerciseSelectorProps<T>) => {
  return (
    <div className="exercise-selector">
      <div className="header-section">
        <h2>{title}</h2>
        <button onClick={onBack} className="back-btn">← Назад</button>
      </div>

      <ul className="exercise-list">
        {items.map((it) => (
          <li key={it.key}>
            <button className="exercise-btn" onClick={() => onSelect(it.key)}>
              {it.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseSelector;

