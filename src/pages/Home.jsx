import ProofForm from "../components/ProofForm";
import ProofList from "../components/ProofList";
import useProofs from "../hooks/useProofs";
import { useLanguage } from "../context/LanguageContext";
import Button from "../components/ui/Button";
import { GlobeIcon } from "lucide-react";

export default function Home() {
  const { proofs, addProof } = useProofs();
  const { t, toggleLanguage } = useLanguage();

  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-12">
      {/* Header */}
      <header className="flex items-start justify-between gap-4 mb-10">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
            {t.title}
          </h1>
          <p className="text-sm text-zinc-500 max-w-md">{t.subtitle}</p>
        </div>

        <Button
          onClick={toggleLanguage}
          variant="outline"
          className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border-zinc-300 hover:bg-zinc-100 transition-colors"
        >
          <GlobeIcon className="w-4 h-4" />
          {t.languageButton}
        </Button>
      </header>

      {/* Crear proof */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-zinc-800 mb-4">
          {t.newProofTitle}
        </h2>

        <ProofForm onAdd={addProof} />
      </section>

      {/* Lista de proofs */}
      <section>
        <h2 className="text-lg font-semibold text-zinc-800 mb-4">
          {t.proofsListTitle}
        </h2>

        {proofs.length === 0 ? (
          <p className="text-sm text-zinc-500">{t.emptyState}</p>
        ) : (
          <ProofList proofs={proofs} />
        )}
      </section>
    </main>
  );
}
