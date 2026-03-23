import { FadeIn } from './AnimatedSection'

const numbers = [
  { value: '$1.5M', label: 'Annual Quota' },
  { value: '124%', label: 'Avg Attainment' },
  { value: '$435K', label: 'Largest Deal' },
  { value: '3.5x', label: 'Pipeline Coverage' },
  { value: '60%+', label: 'Self-Sourced' },
  { value: '-20%', label: 'Cycle Reduction' },
]

export default function NumbersBar() {
  return (
    <section id="numbers" className="bg-surface-1 border-b border-border py-16 md:py-20 px-6">
      <div className="max-w-[860px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {numbers.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.08}>
              <div className="text-center">
                <div className="font-heading text-accent text-[28px] md:text-[34px] font-semibold tracking-[-0.03em] leading-none">
                  {item.value}
                </div>
                <div className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-text-tertiary mt-2 font-medium">
                  {item.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
