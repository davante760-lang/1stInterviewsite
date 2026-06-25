import { FadeIn, SectionTitle } from './AnimatedSection'

const items = [
  {
    title: 'Trigger-Based Prospecting',
    body: 'I tier a mid-market book of 150\u2013250 accounts down to a focused weekly call block driven by active signals: new CFO or Controller hires, AR system renewals, audit findings, M&A, working-capital pressure, vertical-specific operational events. I lead with the business change, not a product pitch. ~55% of pipeline self-sourced.',
  },
  {
    title: 'Finance-Led Multi-Threading',
    body: 'I run simultaneous top-down (CFO, Controller) and bottom-up (AR Manager, Ops VP) threads. One champion is a single point of failure. I build committees around a shared business case anchored in DSO, AR labor cost, payment fees, and working capital impact — the language the CFO is already using internally.',
  },
  {
    title: 'MEDDPICC Discipline',
    body: 'I prioritize "no" over "maybe." Hard-stop qualification on metrics, economic buyer, decision criteria, paper process, identified pain, and the competition. Contract buyouts and legal blockers surface early. Resources only go against deals with a real path to close.',
  },
  {
    title: 'Vertical Playbooks',
    body: 'At Samsara I built net-new vertical playbooks that lifted my average deal size from $95K to $130K+ through multi-product attach and executive-aligned business cases. I don\u2019t run a horizontal pitch into a vertical buyer.',
  },
]

export default function HowIWork() {
  return (
    <section id="how-i-sell" className="py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="APPROACH" title="How I Sell" />
        </FadeIn>

        <div className="space-y-6">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="pl-4 border-l border-border-light max-w-[680px]">
                <h3 className="font-heading text-[15px] font-semibold text-text-primary tracking-[-0.01em] mb-2">
                  {item.title}
                </h3>
                <p className="text-[14.5px] leading-[1.75] text-text-secondary">
                  {item.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
