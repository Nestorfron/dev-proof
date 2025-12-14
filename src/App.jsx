import { useState } from "react";
import Landing from "./pages/Landing";
import Home from "./pages/Home";

export default function App() {
  const [started, setStarted] = useState(false);

  return started ? (
    <Home />
  ) : (
    <Landing onStart={() => setStarted(true)} />
  );
}
