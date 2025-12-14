import { useState, useEffect } from "react";
import { getProofs, saveProofs } from "../utils/storage";

export default function useProofs() {
  const [proofs, setProofs] = useState([]);

  useEffect(() => {
    setProofs(getProofs());
  }, []);

  const addProof = (proof) => {
    const updated = [proof, ...proofs];
    setProofs(updated);
    saveProofs(updated);
  };

  return {
    proofs,
    addProof,
  };
}
