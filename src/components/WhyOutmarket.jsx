import { FadeIn, SummaryBox, SectionTitle } from './AnimatedSection'

function E({ children }) {
  return <span className="text-text-primary font-medium">{children}</span>
}

export default function WhyOutmarket() {
  return (
    <section id="why-outmarket" className="py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="WHY I'M HERE" title="Why Outmarket" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <SummaryBox>
            <div className="space-y-5 text-[14.5px] leading-[1.75] text-text-secondary max-w-[680px]">
              <p>
                Commercial insurance runs on manual workflows and data that sits in silos nobody
                touches. Outmarket is building the <E>intelligence layer</E> that actually makes
                that data usable for brokers, MGAs, wholesalers, and carriers, in a trillion-dollar
                market that's been dramatically underserved by modern software.
              </p>
              <p>
                That's the sell I know. I spent <E>three years at Applied Systems and EZLynx</E>{' '}
                selling agency management systems into <E>this exact distribution chain</E>. I know
                how brokers evaluate technology, how principals think about workflow consolidation,
                and how long it takes to unseat a legacy AMS that "works fine." The difference here
                is that Outmarket isn't asking buyers to rip-and-replace; it's{' '}
                <E>adding an AI layer on top of what they already have</E>. That's a fundamentally
                easier conversation to start and a harder one to say no to.
              </p>
              <p>
                The timing matters too. Vishal and Anshu have the product-engineering credibility to
                build something real, the inbound is already moving, and the insurance association
                partnerships create a channel most early-stage companies can't access. This is the
                stage where the right AE <E>shapes the playbook</E>, not just runs it.
              </p>
            </div>
          </SummaryBox>
        </FadeIn>
      </div>
    </section>
  )
}
