import React from "react";

type CardProps = {
  children: React.ReactNode;
  accent: "blue" | "red" | "purple" | "amber" | "teal" | "zinc";
};

const Card: React.FC<CardProps> = ({ children, accent }) => {
  const ring =
    accent === "blue" ? "ring-sky-300/40" :
    accent === "red" ? "ring-rose-300/40" :
    accent === "purple" ? "ring-violet-300/40" :
    accent === "amber" ? "ring-amber-300/40" :
    accent === "teal" ? "ring-teal-300/40" :
    "ring-white/30";

  const left =
    accent === "blue" ? "before:bg-sky-400/80" :
    accent === "red" ? "before:bg-rose-400/80" :
    accent === "purple" ? "before:bg-violet-400/80" :
    accent === "amber" ? "before:bg-amber-400/80" :
    accent === "teal" ? "before:bg-teal-400/80" :
    "before:bg-white/60";

  return (
    <div
      className={[
        "relative h-[210px] min-h-[210px] p-6 rounded-2xl",
        "bg-white/10 backdrop-blur-xl ring-1", ring,
        "shadow-[0_10px_30px_rgba(0,0,0,.18)]",
        "flex flex-col items-center justify-center text-center text-slate-100",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,.28)]",
        "overflow-hidden"
      ].join(" ")}
    >
      <span className={`absolute inset-y-0 left-0 w-1 ${left}`} />
      <span className="pointer-events-none absolute inset-0 -left-full hover:left-full transition-[left] duration-700 ease-linear
                       before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r
                       before:from-transparent before:via-white/15 before:to-transparent" />
      {children}
    </div>
  );
};

export default Card;
