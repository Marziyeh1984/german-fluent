import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { ArrowDown, Check, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

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
      <div className="page-loader pointer-events-none fixed inset-0 z-50 grid place-items-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <span className="grid size-14 place-items-center rounded-full bg-secondary text-xl font-medium text-secondary-foreground">S</span>
          <span className="h-1 w-40 overflow-hidden rounded-full bg-foreground/15">
            <span className="page-loader__bar block h-full w-full rounded-full bg-foreground" />
          </span>
        </div>
      </div>

      <header className="reveal border-b border-border bg-background" style={{ animationDelay: "0.15s" }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Sprachwasser home">
            <span className="grid size-11 place-items-center rounded-full bg-secondary text-lg font-medium text-secondary-foreground">S</span>
            <span><strong className="block text-base font-medium">Sprachwasser</strong><span className="block text-sm text-muted-foreground">German for beginners</span></span>
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" aria-label="Open menu" className="size-11 rounded-2xl"><Menu className="size-5" /></Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[18rem] border-border bg-background">
              <SheetHeader>
                <SheetTitle className="text-left text-base font-medium uppercase">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-2">
                <SheetClose asChild>
                  <a href="#sample" className="rounded-2xl px-4 py-3 text-base font-medium uppercase transition-colors hover:bg-secondary hover:text-secondary-foreground">Free Package</a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#pricing" className="rounded-2xl px-4 py-3 text-base font-medium uppercase transition-colors hover:bg-secondary hover:text-secondary-foreground">Paid Package</a>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <section id="top" style={{ animationDelay: "0.3s" }} className="reveal mx-auto max-w-7xl px-5 pb-12 pt-10 md:px-10 md:pb-16 md:pt-14">
        <p className="mb-4 text-sm font-semibold uppercase">PRACTICAL GERMAN · English and PERSIAN SUPPORT</p>
        <h1 className="max-w-6xl text-4xl font-medium uppercase leading-[0.92] md:text-6xl lg:text-7xl">
          Your practical path to learning German
        </h1>
        <div className="mt-8">
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Useful German vocabulary, phrases, grammar, pronunciation, and real-life lessons with English and Persian support. Free & premium packages for learning German faster and easier.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 rounded-full px-6 text-base"><a href="#pricing">Get the Package Now</a></Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-full border-foreground bg-transparent px-6 text-base"><a href="#sample">Free lesson <ArrowDown /></a></Button>
          </div>
        </div>
      </section>

      <section style={{ animationDelay: "0.45s" }} className="reveal bg-card py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="text-sm font-semibold uppercase text-primary">Inside the package</p>
          <h2 className="mt-2 max-w-3xl text-3xl font-medium uppercase leading-none md:text-5xl">Translations & Pronunciation</h2>
          <div className="mt-8 border-t border-foreground">
            {features.map(([number, title, description]) => (
              <article key={number} className="grid gap-2 border-b border-border py-5 md:grid-cols-[5rem_1fr_1fr] md:items-center">
                <span className="text-sm font-semibold text-primary">{number}</span>
                <h3 className="text-lg font-medium md:text-xl">{title}</h3>
                <p className="max-w-md leading-relaxed text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sample" style={{ animationDelay: "0.6s" }} className="reveal bg-primary py-12 text-primary-foreground md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="text-sm font-semibold uppercase">Free Package</p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed opacity-80">English and Persian meaning, audio and a real sentence work together.</p>
          <div className="mt-8 grid gap-4 md:max-w-sm md:mx-auto">
            <div className="flex flex-col items-center rounded-3xl bg-card p-5 text-center text-card-foreground md:p-6">
              <span className="text-xs font-semibold uppercase opacity-70">Lesson 01 · Greetings</span>
              <span className="mt-2 text-xl font-medium md:text-2xl">100 Phrases to Start</span>
              <div className="mt-5 flex w-full flex-col gap-2">
                <Button variant="outline" className="h-9 w-full rounded-full border-foreground bg-transparent text-sm">Download PDF</Button>
                <Button className="h-9 w-full rounded-full text-sm">Download Voice</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" style={{ animationDelay: "0.75s" }} className="reveal bg-secondary py-10 text-secondary-foreground md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase sm:text-sm">PAID PACKAGES</p>
            <h2 className="mt-2 text-3xl font-medium uppercase leading-none sm:text-4xl md:text-6xl">One PACKAGE. LIFETIME ACCESS.</h2>
            <p className="mt-4 max-w-lg text-sm opacity-70 sm:text-base">Build useful documents at your own pace, on any phone, tablet or computer.</p>
          </div>
          <div className="mt-6 grid gap-4 sm:mt-8 sm:max-w-sm sm:mx-auto">
            <div className="flex flex-col items-center rounded-3xl bg-card p-4 text-center text-card-foreground sm:p-5 md:p-6">
              <span className="text-[11px] font-semibold uppercase opacity-70 sm:text-xs">Complete package</span>
              <span className="mt-2 text-2xl font-medium sm:text-3xl">$3</span>
              <div className="mt-4 flex w-full flex-col gap-2 sm:mt-5">
                <Button className="h-10 w-full rounded-full bg-brand-deep text-cream text-sm hover:bg-brand-deep/90 sm:h-9">Get Package</Button>
                <Button variant="outline" className="h-10 w-full rounded-full border-brand-deep bg-transparent text-sm text-brand-deep hover:bg-brand-deep/10 sm:h-9">View Details</Button>
              </div>
            </div>
          </div>
          <p className="mt-5 text-center text-xs opacity-70 sm:text-sm">Instant download · 30-day guarantee</p>
        </div>
      </section>

      <section style={{ animationDelay: "0.9s" }} className="reveal bg-card py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-5 md:px-10">
          <h2 className="text-3xl font-medium uppercase leading-none md:text-5xl">Questions, answered</h2>
          <div className="mt-8 border-t border-foreground">
            <FaqItem question="Is this package suitable for beginners?" answer="Yes. It starts at absolute zero and focuses on the most useful everyday German words, with English and Persian meanings plus native pronunciation audio." />
            <FaqItem question="How will I receive the files after purchase?" answer="You’ll receive an instant download link by email immediately after checkout." />
            <FaqItem question="Can I use it on my phone?" answer="Yes. The PDF lessons and audio files work on phones, tablets and computers." />
          </div>
        </div>
      </section>

      <section style={{ animationDelay: "1.05s" }} className="reveal bg-background px-5 py-14 text-center md:px-10 md:py-20">
        <p className="text-sm font-semibold uppercase text-primary">Your first words are waiting</p>
        <h2 className="mx-auto mt-3 max-w-4xl text-4xl font-medium uppercase leading-none md:text-7xl">Start speaking German today</h2>
        <Button asChild size="lg" className="mt-7 h-12 rounded-full px-7 text-base"><a href="#pricing">Choose Your Package</a></Button>
      </section>

      <footer style={{ animationDelay: "1.2s" }} className="reveal border-t border-border bg-background px-5 py-6 md:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between"><strong className="font-medium">Sprachwasser</strong><span className="text-muted-foreground">© 2026 · Learn. Speak. Repeat.</span></div></footer>
    </main>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-border py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-medium">
        {question}
        <span className="text-2xl font-light leading-none text-primary transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{answer}</p>
    </details>
  );
}
