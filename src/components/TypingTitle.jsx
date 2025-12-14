import { useEffect, useState } from "react";

export default function TypingTitle({ text, speed = 50 }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayed(""); // reset cuando cambia el texto

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
      {displayed}
      <span className="animate-pulse">|</span>
    </h1>
  );
}
