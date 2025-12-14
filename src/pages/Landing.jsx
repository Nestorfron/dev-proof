import { useLanguage } from "../context/LanguageContext";
import Button from "../components/ui/Button";
import TypingTitle from "../components/TypingTitle";

export default function Landing({ onStart }) {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen flex flex-col justify-center px-6">
      <section className="max-w-3xl mx-auto text-center space-y-6">
        <TypingTitle text={t.landing.hero} />

        <p className="text-zinc-500">
          {t.landing.description}
        </p>

        <Button onClick={onStart} className="mx-auto">
          {t.landing.cta}
        </Button>
      </section>
    </main>
  );
}
