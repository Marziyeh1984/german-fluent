import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Check, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

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
  const features = [
    ["01", "English & Persian Translations", "Clear meanings in English and Persian to help you learn faster."],
    ["02", "German Pronunciation Audio", "Native-speaker audio files to practice correct German pronunciation."],
    ["03", "Structured Learning Path", "A simple step-by-step system for steady progress."],
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Sprachwasser home">
            <span className="grid size-12 place-items-center rounded-full bg-secondary text-xl font-medium text-secondary-foreground">S</span>
            <span><strong className="block text-base font-medium">Sprachwasser</strong><span className="block text-sm text-muted-foreground">German for beginners</span></span>
          </a>
          <Button size="icon" aria-label="Open menu" className="size-12 rounded-2xl"><Menu className="size-6" /></Button>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-7xl px-5 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20">
        <p className="mb-5 text-sm font-semibold uppercase">PRACTICAL GERMAN · English and PERSIAN SUPPORT</p>
        <h1 className="max-w-6xl text-5xl font-medium uppercase leading-[0.92] md:text-7xl lg:text-8xl">
          Your practical path to learning German
        </h1>
        <div className="mt-12">
          <p className="max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
            Useful German vocabulary, phrases, grammar, pronunciation, and real-life lessons with English and Persian support. Free & premium packages for learning German faster and easier.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-14 rounded-full px-7 text-base"><a href="#pricing">Get the Package Now</a></Button>
            <Button asChild variant="outline" size="lg" className="h-14 rounded-full border-foreground bg-transparent px-7 text-base"><a href="#sample">Free lesson <ArrowDown /></a></Button>
          </div>
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="text-sm font-semibold uppercase text-primary">Inside the package</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-medium uppercase leading-none md:text-6xl">Translations & Pronunciation</h2>
          <div className="mt-12 border-t border-foreground">
            {features.map(([number, title, description]) => (
              <article key={number} className="grid gap-3 border-b border-border py-6 md:grid-cols-[5rem_1fr_1fr] md:items-center">
                <span className="text-sm font-semibold text-primary">{number}</span>
                <h3 className="text-xl font-medium md:text-2xl">{title}</h3>
                <p className="max-w-md leading-relaxed text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sample" className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="text-sm font-semibold uppercase">Free Package</p>
          <h2 className="mt-3 max-w-3xl text-5xl font-medium uppercase leading-none md:text-7xl">Preview lessons before you buy</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-80">English and Persian meaning, audio and a real sentence work together.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3 md:max-w-5xl md:mx-auto">
            {[
              { lesson: "Lesson 01 · Greetings" },
              { lesson: "Lesson 02 · Numbers" },
              { lesson: "Lesson 03 · Phrases" },
            ].map(({ lesson }) => (
              <div key={lesson} className="flex flex-col items-center rounded-3xl bg-card p-6 text-center text-card-foreground md:p-8">
                <span className="text-xs font-semibold uppercase opacity-70">{lesson}</span>
                <span className="mt-3 text-2xl font-medium md:text-3xl">100 Phrases to Start</span>
                <div className="mt-6 flex w-full flex-col gap-2">
                  <Button variant="outline" className="h-10 w-full rounded-full border-foreground bg-transparent text-sm">Download PDF</Button>
                  <Button className="h-10 w-full rounded-full text-sm">Download Voice</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="pricing" className="bg-secondary py-16 text-secondary-foreground md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase">Choose your package. Lifetime access.</p>
            <h2 className="mt-3 text-5xl font-medium uppercase leading-none md:text-7xl">German Foundations</h2>
            <p className="mt-6 max-w-lg text-lg opacity-70">Build useful vocabulary at your own pace, on any phone, tablet or computer.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-[2rem] bg-background p-6 text-foreground">
              <p className="text-xs font-semibold uppercase opacity-70">Starter package</p>
              <div className="mt-3 flex items-end gap-2"><span className="text-5xl font-medium">$3</span><span className="mb-1 text-sm text-muted-foreground">one time</span></div>
              <ul className="mt-5 space-y-2 border-t border-border pt-5 text-sm">
                {["200+ essential German words", "English & Persian meanings", "Native pronunciation audio"].map(item => <li key={item} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{item}</li>)}
              </ul>
              <Button className="mt-6 h-12 w-full rounded-full text-sm">Get Starter</Button>
            </div>
            <div className="rounded-[2rem] bg-background p-6 text-foreground">
              <p className="text-xs font-semibold uppercase opacity-70">Complete package</p>
              <div className="mt-3 flex items-end gap-2"><span className="text-5xl font-medium">$5</span><span className="mb-1 text-sm text-muted-foreground">one time</span></div>
              <ul className="mt-5 space-y-2 border-t border-border pt-5 text-sm">
                {["500+ German words & phrases", "English & Persian meanings", "Native pronunciation audio", "Practical example sentences"].map(item => <li key={item} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{item}</li>)}
              </ul>
              <Button className="mt-6 h-12 w-full rounded-full text-sm">Get Complete</Button>
            </div>
            <div className="rounded-[2rem] bg-background p-6 text-foreground">
              <p className="text-xs font-semibold uppercase opacity-70">Advanced package</p>
              <div className="mt-3 flex items-end gap-2"><span className="text-5xl font-medium">$7</span><span className="mb-1 text-sm text-muted-foreground">one time</span></div>
              <ul className="mt-5 space-y-2 border-t border-border pt-5 text-sm">
                {["1000+ German words & phrases", "Grammar & real-life lessons", "English & Persian meanings", "Native pronunciation audio", "Lifetime updates"].map(item => <li key={item} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{item}</li>)}
              </ul>
              <Button className="mt-6 h-12 w-full rounded-full text-sm">Get Advanced</Button>
            </div>
          </div>
          <p className="mt-8 text-center text-sm opacity-70">Instant download · 30-day guarantee</p>
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-10">
          <h2 className="text-4xl font-medium uppercase leading-none md:text-6xl">Questions, answered</h2>
          <div className="mt-10 border-t border-foreground">
            <FaqItem question="Is this package suitable for beginners?" answer="Yes. It starts at absolute zero and focuses on the most useful everyday German words, with English and Persian meanings plus native pronunciation audio." />
            <FaqItem question="How will I receive the files after purchase?" answer="You’ll receive an instant download link by email immediately after checkout." />
            <FaqItem question="Can I use it on my phone?" answer="Yes. The PDF lessons and audio files work on phones, tablets and computers." />
          </div>
        </div>
      </section>

      <section className="bg-background px-5 py-20 text-center md:px-10 md:py-28">
        <p className="text-sm font-semibold uppercase text-primary">Your first words are waiting</p>
        <h2 className="mx-auto mt-4 max-w-4xl text-5xl font-medium uppercase leading-none md:text-8xl">Start speaking German today</h2>
        <Button asChild size="lg" className="mt-9 h-14 rounded-full px-8 text-base"><a href="#pricing">Choose Your Package</a></Button>
      </section>

      <footer className="border-t border-border bg-background px-5 py-8 md:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between"><strong className="font-medium">Sprachwasser</strong><span className="text-muted-foreground">© 2026 · Learn. Speak. Repeat.</span></div></footer>
    </main>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-border py-6">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-medium">
        {question}
        <span className="text-3xl font-light leading-none text-primary transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{answer}</p>
    </details>
  );
}
