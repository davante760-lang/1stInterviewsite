import { FadeIn, SectionTitle } from './AnimatedSection'

export default function AboutDave() {
  return (
    <section id="about" className="bg-surface-1 border-b border-border py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="ABOUT" title="About Dave" />
        </FadeIn>

        <div className="space-y-5 text-[14.5px] leading-[1.75] text-text-secondary max-w-[680px]">
          <FadeIn>
            <p>
              Based in Carlsbad, CA. I've spent 6 years in enterprise SaaS: insurance tech, then
              fleet safety and IoT at Samsara. Somewhere in the middle of that, built and sold an
              independent insurance agency on the side.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p>
              Outside of work: WWII military history, aviation, and spending an embarrassing amount
              of time testing AI tools before most people know they exist. My wife keeps the
              household running while I close deals and pretend I'm not also running three Claude
              projects simultaneously.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p>
              I take sales seriously because the outcome matters. My family depends on it, and so do
              the customers I'm asking to make a big bet on a new platform.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
