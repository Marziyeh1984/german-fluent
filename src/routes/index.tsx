import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  Check,
  Infinity,
  Languages,
  MapPin,
  Smartphone,
  Sprout,
  Target,
  Volume2,
} from "lucide-react";

import heroImage from "@/assets/hero-german.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Sprachwasser — Learn German Vocabulary",
      },
      {
        name: "description",
        content:
          "A practical German vocabulary package with Persian translations, pronunciation audio, and real-life examples for beginners.",
      },
      {
        property: "og:title",
        content: "Sprachwasser — Learn German Vocabulary",
      },
      {
        property: "og:description",
        content:
          "A practical German vocabulary package with Persian translations, pronunciation audio, and real-life examples for beginners.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      {/* Atmospheric background */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, #0a4a50, #0d5f63, #07343a)",
        }}
      />
      <div className="pointer-events-none fixed -left-20 -top-20 -z-10 size-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none fixed -right-24 top-40 -z-10 size-72 rounded-full bg-[#5eead4]/15 blur-3xl" />
      <div className="pointer-events-none fixed bottom-10 left-6 -z-10 size-40 animate-ripple rounded-full border border-primary/20" />
      <div className="pointer-events-none fixed right-4 top-64 -z-10 size-56 animate-ripple-slow rounded-full border border-primary/25" />

      <div className="mx-auto max-w-6xl px-5">
        {/* Header */}
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            <div className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-brand font-serif text-lg font-semibold text-white">
              S
            </div>
            <span className="font-serif text-lg tracking-tight text-white">
              Sprachwasser
            </span>
          </div>
          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur-md">
            DE · A1
          </span>
        </header>

        {/* Hero */}
        <section className="grid items-center gap-10 py-8 lg:grid-cols-2 lg:py-14">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              Practical Vocabulary Package
            </p>
            <h1 className="font-serif text-[34px] font-medium leading-[1.08] text-white lg:text-[44px]">
              Learn German Faster with a Practical Vocabulary Package
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/75">
              Master essential German words with clear Persian meanings, native
              pronunciation, and real-life examples — built for true beginners.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="rounded-2xl bg-primary px-6 py-3.5 text-center text-[15px] font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
              >
                Get the Package Now
              </a>
              <a
                href="#sample"
                className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3.5 text-center text-[14px] font-medium text-white backdrop-blur-md transition-transform hover:-translate-y-0.5"
              >
                Preview a Free Lesson
              </a>
            </div>
          </div>

          {/* Hero image card */}
          <div className="rounded-3xl border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-brand/40 outline outline-1 -outline-offset-1 outline-white/10">
              <img
                src={heroImage}
                alt="German vocabulary flashcards floating in a calm teal underwater scene"
                width={1024}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center gap-3 px-2 pb-1 pt-3">
              <div className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-primary to-brand text-sm font-bold text-white">
                4.9
              </div>
              <div className="text-xs leading-snug text-white/80">
                Loved by 2,300+ beginners
                <br />
                <span className="text-primary">Guten Tag, your new German</span>
              </div>
            </div>
          </div>
        </section>

        {/* Product features */}
        <section className="py-10 lg:py-16">
          <div className="mb-8 text-center lg:text-left">
            <h2 className="font-serif text-2xl text-white lg:text-3xl">
              What's inside the package
            </h2>
            <p className="mt-1 text-sm text-white/60">
              Everything you need to speak from day one.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<BookOpen className="size-5" />}
              title="Essential German vocabulary"
              description="500+ must-know words for daily life"
            />
            <FeatureCard
              icon={<Languages className="size-5" />}
              title="Persian translations & examples"
              description="Meanings and practical sentences side by side"
            />
            <FeatureCard
              icon={<Volume2 className="size-5" />}
              title="Pronunciation audio files"
              description="Native-speaker recordings for every word"
            />
            <FeatureCard
              icon={<Smartphone className="size-5" />}
              title="Easy learning system"
              description="Study on any device, at your own pace"
            />
            <FeatureCard
              icon={<Target className="size-5" />}
              title="Practical examples"
              description="Real sentences you'll actually use"
            />
            <FeatureCard
              icon={<Sprout className="size-5" />}
              title="Beginner friendly"
              description="No prior knowledge needed to start"
            />
          </div>
        </section>

        {/* Free sample */}
        <section id="sample" className="py-6 lg:py-10">
          <div className="mx-auto max-w-2xl rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl lg:p-8">
            <span className="inline-block rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground">
              Free Sample
            </span>
            <h3 className="mb-2 mt-3 font-serif text-xl text-white lg:text-2xl">
              Try Lesson 01 — Greetings
            </h3>
            <div className="rounded-xl border border-white/15 bg-white/10 p-4 text-sm">
              <p className="text-white">
                <span className="font-semibold">Hallo</span> — سلام
              </p>
              <p className="mt-1 text-xs text-white/60">
                "Hallo, wie geht's?" — How are you doing?
              </p>
            </div>
            <button
              type="button"
              className="mt-5 block w-full rounded-xl border border-white/15 bg-white/10 py-3 text-center text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              Download free sample
            </button>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-10 lg:py-16">
          <h2 className="mb-5 text-center font-serif text-2xl text-white lg:text-left lg:text-3xl">
            Why learners choose us
          </h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <BenefitCard
              icon={<MapPin className="size-5" />}
              title="Learn anywhere"
            />
            <BenefitCard
              icon={<Sprout className="size-5" />}
              title="Beginner friendly"
            />
            <BenefitCard
              icon={<Infinity className="size-5" />}
              title="Lifetime access"
            />
            <BenefitCard
              icon={<Target className="size-5" />}
              title="Simple & practical"
            />
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-6 lg:py-10">
          <div className="mx-auto max-w-md rounded-3xl border border-primary/30 bg-white/14 p-6 shadow-2xl shadow-black/25 backdrop-blur-xl lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Complete Package
            </p>
            <h3 className="mt-1 font-serif text-2xl text-white">
              German Foundations
            </h3>
            <div className="mt-4 flex items-end gap-2">
              <span className="font-serif text-4xl text-white">€49</span>
              <span className="mb-1 text-sm text-white/40 line-through">
                €89
              </span>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-white/80">
              <li className="flex gap-2">
                <Check className="size-4 shrink-0 text-primary" />
                500+ words with Persian meanings
              </li>
              <li className="flex gap-2">
                <Check className="size-4 shrink-0 text-primary" />
                Full pronunciation audio set
              </li>
              <li className="flex gap-2">
                <Check className="size-4 shrink-0 text-primary" />
                Practical example sentences
              </li>
              <li className="flex gap-2">
                <Check className="size-4 shrink-0 text-primary" />
                Lifetime access & updates
              </li>
            </ul>
            <button
              type="button"
              className="mt-6 block w-full rounded-2xl bg-primary py-4 text-center text-[15px] font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
            >
              Get the Package Now
            </button>
            <p className="mt-3 text-center text-xs text-white/60">
              Instant download · 30-day guarantee
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 lg:py-16">
          <h2 className="mb-4 text-center font-serif text-2xl text-white lg:text-left lg:text-3xl">
            Questions, answered
          </h2>
          <div className="mx-auto max-w-2xl space-y-3">
            <FaqItem
              question="Is this package suitable for beginners?"
              answer="Yes — it starts from absolute zero with the most useful everyday words, so you can begin with no prior German knowledge."
            />
            <FaqItem
              question="How will I receive the files after purchase?"
              answer="You'll get an instant download link by email right after checkout, plus a personal link saved to your account."
            />
            <FaqItem
              question="Can I use it on my phone?"
              answer="Absolutely. The workbook PDFs and audio files open smoothly on any phone, tablet, or computer."
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-6 lg:py-10">
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/30 to-brand/40 p-6 text-center backdrop-blur-xl lg:p-10">
            <h2 className="font-serif text-2xl text-white lg:text-3xl">
              Start speaking German today
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-white/70">
              Your first words are one tap away. Join thousands of learners
              building real confidence.
            </p>
            <a
              href="#pricing"
              className="mt-5 inline-block rounded-2xl bg-white px-8 py-3.5 text-[15px] font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Get the Package Now
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8">
          <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="grid size-6 place-items-center rounded-md bg-gradient-to-br from-primary to-brand font-serif text-[11px] font-semibold text-white">
                S
              </div>
              <span className="font-serif text-sm text-white">Sprachwasser</span>
            </div>
            <p className="text-xs text-white/40">
              © 2025 Sprachwasser · Learn. Speak. Repeat.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/12 p-4 backdrop-blur-xl">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/20 text-primary">
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="text-xs text-white/60">{description}</p>
      </div>
    </div>
  );
}

function BenefitCard({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
      <span className="text-primary">{icon}</span>
      <p className="mt-2 text-sm font-medium text-white">{title}</p>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
      <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-white">
        {question}
        <span className="text-lg leading-none text-primary transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-2 text-sm text-white/60">{answer}</p>
    </details>
  );
}
