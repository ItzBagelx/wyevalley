import { PenTool, Server, RefreshCw } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: PenTool,
    title: "Plan around your customers",
    description: "We shape the pages, calls to action and content around what customers need to know before they contact you."
  },
  {
    number: "02",
    icon: Server,
    title: "Build and launch",
    description: "Your site is custom built, set up with the essentials and launched with a clear place for customers to enquire."
  },
  {
    number: "03",
    icon: RefreshCw,
    title: "Keep it useful",
    description: "Hosting, maintenance and the agreed update process are managed after launch, so your information can stay current."
  }
];

export default function ManagedModel() {
  return (
    <section className="py-24 px-6 bg-theme-bg border-y border-theme-bg-gray text-theme-text">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-6 text-theme-text-dark">A straightforward route from idea to launch</h2>
          <p className="text-xl text-theme-text-light font-normal leading-relaxed">
            A well-structured website is a business tool, not a project you have to keep rebuilding. We keep the process focused and practical.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className="text-8xl font-serif italic text-theme-text-dark/5 absolute -top-12 -left-6 -z-10 select-none">
                {step.number}
              </div>
              <div className="bg-white border border-white/50 shadow-xl shadow-theme-bg-alt/50 p-8 rounded-3xl h-full mt-4 flex flex-col justify-between">
                <div>
                  <step.icon strokeWidth={1.5} size={32} className="text-theme-accent mb-6" />
                  <h3 className="text-sm font-bold uppercase tracking-widest text-theme-text-dark mb-4">{step.title}</h3>
                </div>
                <p className="text-sm text-theme-text-light font-normal leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
