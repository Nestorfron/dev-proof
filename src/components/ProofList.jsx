import ProofCard from "./ProofCard";

export default function ProofList({ proofs }) {
  if (!proofs || proofs.length === 0) {
    return (
      <p className="text-center text-zinc-500 mt-6">
        Todavía no hay pruebas registradas
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
      {proofs.map((proof) => (
        <ProofCard key={proof.id} proof={proof} />
      ))}
    </div>
  );
}
