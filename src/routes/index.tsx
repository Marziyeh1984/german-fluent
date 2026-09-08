import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Check, Menu, Play } from "lucide-react";

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
            <div className="rounded-3xl bg-card p-5 text-card-foreground md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">Package 1</span>
                  <p className="mt-3 text-sm text-muted-foreground">100 عبارت مهم برای شروع</p>
                  <span className="mt-4 block text-xs text-muted-foreground">Lesson 01 · Greetings</span>
                  <h3 className="mt-2 text-3xl font-medium">Hallo</h3>
                  <p className="mt-1 text-base text-muted-foreground">Hello</p>
                  <p className="mt-1 text-lg">سلام</p>
                </div>
                <Button size="icon" className="size-10 rounded-full" aria-label="Play pronunciation"><Play className="size-4 fill-current" /></Button>
              </div>
              <p className="mt-6 border-t border-border pt-4 text-base">“Hallo, wie geht’s?”</p>
              <div className="mt-4 grid gap-2">
                <Button variant="outline" className="h-10 w-full rounded-full border-foreground bg-transparent text-sm">Download PDF</Button>
                <Button variant="outline" className="h-10 w-full rounded-full border-foreground bg-transparent text-sm">Download audio file</Button>
              </div>
            </div>
            <div className="rounded-3xl bg-card p-5 text-card-foreground md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">Package 1</span>
                  <p className="mt-3 text-sm text-muted-foreground">100 عبارت مهم برای شروع</p>
                  <span className="mt-4 block text-xs text-muted-foreground">Lesson 02 · Numbers</span>
                  <h3 className="mt-2 text-3xl font-medium">Eins</h3>
                  <p className="mt-1 text-base text-muted-foreground">One</p>
                  <p className="mt-1 text-lg">یک</p>
                </div>
                <Button size="icon" className="size-10 rounded-full" aria-label="Play pronunciation"><Play className="size-4 fill-current" /></Button>
              </div>
              <p className="mt-6 border-t border-border pt-4 text-base">“Ich habe eine Frage.”</p>
              <div className="mt-4 grid gap-2">
                <Button variant="outline" className="h-10 w-full rounded-full border-foreground bg-transparent text-sm">Download PDF</Button>
                <Button variant="outline" className="h-10 w-full rounded-full border-foreground bg-transparent text-sm">Download audio file</Button>
              </div>
            </div>
            <div className="rounded-3xl bg-card p-5 text-card-foreground md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">Package 1</span>
                  <p className="mt-3 text-sm text-muted-foreground">100 عبارت مهم برای شروع</p>
                  <span className="mt-4 block text-xs text-muted-foreground">Lesson 03 · Phrases</span>
                  <h3 className="mt-2 text-3xl font-medium">Danke</h3>
                  <p className="mt-1 text-base text-muted-foreground">Thanks</p>
                  <p className="mt-1 text-lg">ممنون</p>
                </div>
                <Button size="icon" className="size-10 rounded-full" aria-label="Play pronunciation"><Play className="size-4 fill-current" /></Button>
              </div>
              <p className="mt-6 border-t border-border pt-4 text-base">“Danke schön!”</p>
              <div className="mt-4 grid gap-2">
                <Button variant="outline" className="h-10 w-full rounded-full border-foreground bg-transparent text-sm">Download PDF</Button>
                <Button variant="outline" className="h-10 w-full rounded-full border-foreground bg-transparent text-sm">Download audio file</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <h2 className="max-w-3xl text-4xl font-medium uppercase leading-none md:text-6xl">Designed around your real life</h2>
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] border border-foreground bg-foreground md:grid-cols-4">
            {["Learn anywhere", "Beginner friendly", "Lifetime access", "Simple & practical"].map((benefit, index) => <div key={benefit} className="min-h-44 bg-background p-5 md:min-h-56 md:p-7"><span className="text-sm text-primary">0{index + 1}</span><p className="mt-14 text-lg font-medium md:mt-24 md:text-xl">{benefit}</p></div>)}
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
