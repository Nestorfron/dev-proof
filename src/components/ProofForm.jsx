import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Button from "./ui/Button";

export default function ProofForm({ onAdd }) {
  const { t } = useLanguage();

  const [title, setTitle] = useState("");
  const [project, setProject] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [learning, setLearning] = useState("");
  const [tech, setTech] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    const newProof = {
      id: crypto.randomUUID(),
      title,
      project,
      link,
      description,
      learning,
      tech: tech
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t),
      createdAt: new Date().toISOString(),
    };

    onAdd(newProof);

    setTitle("");
    setProject("");
    setLink("");
    setDescription("");
    setLearning("");
    setTech("");
  };

  const titlePlaceholder = t?.form?.titlePlaceholder || "Título";
  const projectPlaceholder = t?.form?.projectPlaceholder || "Proyecto";
  const linkPlaceholder = t?.form?.linkPlaceholder || "Enlace del proyecto (opcional)";
  const descriptionPlaceholder = t?.form?.descriptionPlaceholder || "Describe brevemente qué hiciste";
  const learningPlaceholder = t?.form?.learningPlaceholder || "¿Qué aprendiste o qué impacto tuvo?";
  const techPlaceholder = t?.form?.techPlaceholder || "Tecnologías";
  const addButtonText = t?.form?.addButton || "Agregar";

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-zinc-200 rounded-lg p-5 space-y-4 bg-white shadow-sm"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={titlePlaceholder}
        className="w-full border border-zinc-300 rounded-md px-3 py-2 text-sm"
        required
      />

      <input
        type="text"
        value={project}
        onChange={(e) => setProject(e.target.value)}
        placeholder={projectPlaceholder}
        className="w-full border border-zinc-300 rounded-md px-3 py-2 text-sm"
      />

      <input
        type="url"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder={linkPlaceholder}
        className="w-full border border-zinc-300 rounded-md px-3 py-2 text-sm"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder={descriptionPlaceholder}
        rows={3}
        className="w-full border border-zinc-300 rounded-md px-3 py-2 text-sm"
      />

      <textarea
        value={learning}
        onChange={(e) => setLearning(e.target.value)}
        placeholder={learningPlaceholder}
        rows={2}
        className="w-full border border-zinc-300 rounded-md px-3 py-2 text-sm"
      />

      <input
        type="text"
        value={tech}
        onChange={(e) => setTech(e.target.value)}
        placeholder={techPlaceholder}
        className="w-full border border-zinc-300 rounded-md px-3 py-2 text-sm"
      />

      <div className="flex justify-end">
        <Button type="submit">{addButtonText}</Button>
      </div>
    </form>
  );
}
