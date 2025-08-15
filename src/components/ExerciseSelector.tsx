import React from "react";

type Item = { key: string; label: string };

interface Props {
  title: string;
  items: Item[];
  onSelect: (key: string) => void;
  onBack: () => void;
}

const ExerciseSelector: React.FC<Props> = ({ title, items, onSelect, onBack }) => {
  return (
    <div className="selector">
      <div className="selector-header">
        <h2>{title}</h2>
        <button className="back-btn" onClick={onBack}>← Назад</button>
      </div>
      <div className="selector-grid">
        {items.map((it) => (
          <button key={it.key} className="selector-card" onClick={() => onSelect(it.key)}>
            {it.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExerciseSelector;
