import { motion } from 'framer-motion'
import { FadeIn, SectionTitle } from './AnimatedSection'

const cards = [
  {
    title: 'The Legacy Replacement Motion',
    body: 'The CFO-grade reframe. Helping buyers rethink the cost of staying with manual workflows, paper credit, fragmented payment ingestion, and legacy systems that still "technically work." I close on the cost of inaction, not the cost of switching.',
  },
  {
    title: 'Finance &amp; Ops Committees',
    body: 'Multi-stakeholder mid-market deals at $100K\u2013$300K+ ACV with 4\u20136 month cycles. CFO, Controller, AR or Ops VP, and the operational signer who runs the day-to-day. Real buying committees, not transactional sales.',
  },
  {
    title: 'Operationally Heavy Verticals',
    body: 'Wholesale distribution, food &amp; beverage, fleet, insurance, field services. Industries running on manual workflows, fragmented data, and operational or working-capital risk a CFO can quantify in dollars.',
  },
  {
    title: 'Playbook-Builder Culture',
    body: 'Environments where the vertical motion is still being built and leadership values commercial judgment over raw activity volume. I want to help shape how the org sells in a vertical, not just execute a defined script.',
  },
]

export default function WhatImBuiltFor() {
  return (
    <section id="built-for" className="bg-surface-1 border-b border-border py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="FIT" title="What I'm Built For" />
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="text-[14.5px] leading-[1.75] text-text-secondary max-w-[680px] mb-8">
            I thrive in organizations where the following three factors intersect:
          </p>
        </FadeIn>

        <div className="flex flex-col gap-4">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={0.1 + i * 0.06}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-surface-2 border border-border rounded-xl p-5"
              >
                <h3 className="font-heading font-medium text-text-primary mb-2">{card.title}</h3>
                <p className="text-[14.5px] leading-[1.75] text-text-secondary">{card.body}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
