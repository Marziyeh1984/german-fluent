import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Check, Menu, Play, Volume2 } from "lucide-react";

import heroImage from "@/assets/hero-german.jpg";
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
    ["01", "Essential German vocabulary", "500+ words selected for useful daily conversations."],
    ["02", "Persian translations", "Clear, natural meanings that make every word easier to remember."],
    ["03", "Pronunciation audio", "Native-speaker recordings so you can hear and repeat correctly."],
    ["04", "Practical examples", "Real sentences that show exactly how each word is used."],
    ["05", "Easy learning system", "A simple sequence built for steady, stress-free progress."],
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
        <p className="mb-5 text-sm font-semibold uppercase">Practical German · Persian support</p>
        <h1 className="max-w-6xl text-5xl font-medium uppercase leading-[0.92] md:text-7xl lg:text-8xl">
          Learn German faster with words you actually use
        </h1>
        <div className="mt-12 grid gap-8 md:grid-cols-[1fr_1.05fr] md:items-end">
          <div>
            <p className="max-w-lg text-xl leading-relaxed text-muted-foreground md:text-2xl">
              Essential German vocabulary with Persian meanings, native pronunciation and practical examples — made for true beginners.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-14 rounded-full px-7 text-base"><a href="#pricing">Get the Package Now</a></Button>
              <Button asChild variant="outline" size="lg" className="h-14 rounded-full border-foreground bg-transparent px-7 text-base"><a href="#sample">Free lesson <ArrowDown /></a></Button>
            </div>
          </div>
          <img src={heroImage} alt="German vocabulary cards for beginner language learning" width={1024} height={768} className="aspect-[4/3] w-full rounded-[2rem] object-cover" />
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="text-sm font-semibold uppercase text-primary">Inside the package</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-medium uppercase leading-none md:text-6xl">Everything you need to start speaking</h2>
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
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:items-center md:px-10">
          <div>
            <p className="text-sm font-semibold uppercase">Free sample lesson</p>
            <h2 className="mt-3 text-5xl font-medium uppercase leading-none md:text-7xl">Say hallo before you buy</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed opacity-80">Preview Lesson 01 and see how German, Persian meaning, audio and a real sentence work together.</p>
          </div>
          <div className="rounded-[2rem] bg-card p-6 text-card-foreground md:p-8">
            <div className="flex items-start justify-between gap-5">
              <div><span className="text-sm text-muted-foreground">Lesson 01 · Greetings</span><h3 className="mt-3 text-4xl font-medium">Hallo</h3><p className="mt-2 text-xl">سلام</p></div>
              <Button size="icon" className="size-14 rounded-full" aria-label="Play pronunciation"><Play className="size-5 fill-current" /></Button>
            </div>
            <p className="mt-10 border-t border-border pt-5 text-lg">“Hallo, wie geht’s?”</p>
            <Button variant="outline" className="mt-6 h-12 w-full rounded-full border-foreground bg-transparent">Download free sample</Button>
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
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1fr_0.8fr] md:items-start md:px-10">
          <div><p className="text-sm font-semibold uppercase">One package. Lifetime access.</p><h2 className="mt-3 text-5xl font-medium uppercase leading-none md:text-7xl">German Foundations</h2><p className="mt-6 max-w-lg text-lg opacity-70">Build useful vocabulary at your own pace, on any phone, tablet or computer.</p></div>
          <div className="rounded-[2rem] bg-background p-6 text-foreground md:p-8">
            <p className="text-sm font-semibold uppercase">Complete package</p>
            <div className="mt-5 flex items-end gap-3"><span className="text-7xl font-medium">$3</span><span className="mb-2 text-lg text-muted-foreground">one time</span></div>
            <ul className="mt-8 space-y-4 border-t border-border pt-6">
              {["500+ words with Persian meanings", "Full pronunciation audio set", "Practical example sentences", "Lifetime access and updates"].map(item => <li key={item} className="flex gap-3"><Check className="mt-0.5 size-5 shrink-0 text-primary" />{item}</li>)}
            </ul>
            <Button className="mt-8 h-14 w-full rounded-full text-base">Get the Package Now</Button>
            <p className="mt-4 text-center text-sm text-muted-foreground">Instant download · 30-day guarantee</p>
          </div>
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-10">
          <h2 className="text-4xl font-medium uppercase leading-none md:text-6xl">Questions, answered</h2>
          <div className="mt-10 border-t border-foreground">
            <FaqItem question="Is this package suitable for beginners?" answer="Yes. It begins at absolute zero and focuses on the most useful everyday German words." />
            <FaqItem question="How will I receive the files after purchase?" answer="You’ll receive an instant download link by email immediately after checkout." />
            <FaqItem question="Can I use it on my phone?" answer="Yes. The PDF lessons and audio files work on phones, tablets and computers." />
          </div>
        </div>
      </section>

      <section className="bg-background px-5 py-20 text-center md:px-10 md:py-28">
        <p className="text-sm font-semibold uppercase text-primary">Your first words are waiting</p>
        <h2 className="mx-auto mt-4 max-w-4xl text-5xl font-medium uppercase leading-none md:text-8xl">Start speaking German today</h2>
        <Button asChild size="lg" className="mt-9 h-14 rounded-full px-8 text-base"><a href="#pricing">Get the Package for $3</a></Button>
      </section>

      <footer className="border-t border-border bg-background px-5 py-8 md:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between"><strong className="font-medium">Sprachwasser</strong><span className="text-muted-foreground">© 2026 · Learn. Speak. Repeat.</span></div></footer>
    </div>
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
