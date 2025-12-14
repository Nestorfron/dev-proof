const KEY = "devproof_proofs";

export const getProofs = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const saveProofs = (proofs) => {
  localStorage.setItem(KEY, JSON.stringify(proofs));
};
