import { useState } from "react";
import Button from "./ui/Button";
import { useLanguage } from "../context/LanguageContext";

export default function ProofCard({ proof }) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const textToCopy = `
🚀 ${proof.title}

🗂️ Proyecto: ${proof.project || "-"}
🔗 Enlace: ${proof.link || "-"}

💻 Tecnologías: ${proof.tech?.join(", ") || "-"}

📝 Descripción:
${proof.description || "-"}

🎯 Aprendizaje / Impacto:
${proof.learning || "-"}
`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Error copiando al portapapeles", err);
    }
  };

  return (
    <div className="border border-zinc-200 rounded-lg p-4 bg-white shadow-sm space-y-2">
      <h2 className="font-semibold text-lg">{proof.title}</h2>
      {proof.project && (
        <p className="text-sm text-zinc-500">Proyecto: {proof.project}</p>
      )}
      {proof.link && (
        <p className="text-sm text-blue-600 hover:underline">
          <a href={proof.link} target="_blank" rel="noopener noreferrer">
            Ver proyecto
          </a>
        </p>
      )}
      {proof.tech?.length > 0 && (
        <p className="text-sm text-zinc-500">
          Tecnologías: {proof.tech.join(", ")}
        </p>
      )}
      {proof.description && <p className="text-sm">{proof.description}</p>}
      {proof.learning && <p className="text-sm italic">{proof.learning}</p>}

      <Button onClick={handleCopy} className="mt-2 text-sm" variant="outline">
        {copied ? t.copiedFeedback : t.copyButton}
      </Button>
    </div>
  );
}
