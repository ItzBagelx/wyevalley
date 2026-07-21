import { Smartphone, Zap, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    icon: Smartphone,
    title: "Built for mobile enquiries",
    description: "Clear services, straightforward contact options and considered layouts help customers take the next step on any screen."
  },
  {
    icon: Zap,
    title: "Custom-built around your business",
    description: "Your website is designed around how customers choose you, rather than forced into a generic off-the-shelf template."
  },
  {
    icon: ShieldCheck,
    title: "Managed after launch",
    description: "Hosting, maintenance and agreed updates stay in one place, so your site does not become another job to manage."
  }
];

export default function ValueProposition() {
  return (
    <section id="services" className="py-24 bg-theme-bg-light px-6 border-y border-theme-bg-gray scroll-mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-8 text-theme-text-dark">A website should make it easier to choose you</h2>
          <p className="text-lg text-theme-text-light font-normal leading-relaxed">
            We create a clear online home for your services, proof and contact details — then keep it maintained as your business evolves.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-theme-accent/10 flex items-center justify-center mb-6 text-theme-accent">
                <pillar.icon strokeWidth={1.5} size={32} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-theme-text-dark mb-4">{pillar.title}</h3>
              <p className="text-sm text-theme-text-light font-normal leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
