import {
  ArrowRight,
  Globe,
  Rocket,
  LayoutDashboard,
  MessageCircle,
  Code2,
  ShieldCheck,
  TrendingUp,
  Users,
  Sparkles,
} from 'lucide-react';

export default function AvenixHero() {
  const services = [
    {
      icon: Globe,
      title: 'Business Websites',
      description:
        'Modern responsive websites that represent your brand and convert visitors into customers.',
    },
    {
      icon: Rocket,
      title: 'Startup Landing Pages',
      description:
        'High-converting landing pages for startups that drive signups, leads, and investor interest.',
    },
    {
      icon: LayoutDashboard,
      title: 'Dashboard Development',
      description:
        'Powerful admin dashboards and internal tools to help you manage your business efficiently.',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Automation',
      description:
        'Automate messaging, notifications, and workflows to save time and improve customer engagement.',
    },
    {
      icon: Code2,
      title: 'Full Stack Applications',
      description:
        'End-to-end web applications using modern tech stacks built for performance and scale.',
    },
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: 'Quality First',
      description:
        'Clean code, best practices, and attention to detail in everything we build.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description:
        'We build systems that grow with your business and handle what’s next.',
    },
    {
      icon: Users,
      title: 'Client Focused',
      description:
        'Clear communication, understanding your goals, and delivering on time.',
    },
    {
      icon: Sparkles,
      title: 'Reliable Support',
      description:
        'We’re here even after delivery to ensure your product runs smoothly.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.15),transparent_30%)] pointer-events-none"></div>

      {/* Navbar */}
      <header className="border-b border-zinc-900 sticky top-0 z-50 backdrop-blur-xl bg-black/70">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center font-bold text-lg">
              A
            </div>

            <h1 className="text-2xl font-bold tracking-wide">AVENIX</h1>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm text-zinc-300">
            <a href="#" className="hover:text-violet-400 transition">
              Home
            </a>
            <a href="#services" className="hover:text-violet-400 transition">
              Services
            </a>
            <a href="#about" className="hover:text-violet-400 transition">
              About
            </a>
            <a href="#contact" className="hover:text-violet-400 transition">
              Contact
            </a>
          </nav>

          <button className="hidden md:flex items-center gap-2 px-6 py-3 rounded-2xl bg-violet-600 hover:bg-violet-500 transition font-medium">
            WhatsApp Us
            <ArrowRight size={18} />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-950 text-sm text-zinc-300 mb-8">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              Building Digital Solutions That Scale
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8">
              Building
              <span className="block text-violet-500">Modern Digital</span>
              Experiences
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-10">
              Avenix helps startups and businesses build scalable websites,
              automation systems, and modern web applications focused on
              performance, growth, and user experience.
            </p>

            <div className="flex flex-wrap gap-5 mb-12">
              <button className="px-8 py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 transition font-medium flex items-center gap-2">
                Book a Consultation
                <ArrowRight size={18} />
              </button>

              <button className="px-8 py-4 rounded-2xl border border-zinc-700 hover:bg-zinc-900 transition font-medium">
                View Projects
              </button>
            </div>

            <div className="flex flex-wrap gap-8 text-sm text-zinc-400">
              <div>✔ Clean & Scalable Code</div>
              <div>✔ Performance Focused</div>
              <div>✔ Built for Growth</div>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-violet-600/20 blur-3xl rounded-[40px]"></div>

            <div className="relative bg-zinc-950 border border-zinc-800 rounded-[36px] p-10 shadow-2xl">
              <p className="text-violet-400 text-sm uppercase tracking-[0.2em] mb-5">
                Founder Note
              </p>

              <h2 className="text-4xl font-bold leading-tight mb-6">
                Engineering digital products that create real business value.
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                Focused on clean design, scalable architecture, and practical
                automation systems for modern businesses.
              </p>

              <div className="border-t border-zinc-800 pt-8 grid grid-cols-2 gap-6">
                <div className="bg-black border border-zinc-800 rounded-3xl p-6">
                  <h3 className="text-5xl font-bold mb-3 text-violet-400">
                    10+
                  </h3>
                  <p className="text-zinc-400">Projects Built</p>
                </div>

                <div className="bg-black border border-zinc-800 rounded-3xl p-6">
                  <h3 className="text-4xl font-bold mb-3 text-violet-400">
                    Full Stack
                  </h3>
                  <p className="text-zinc-400">React + Spring Boot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-900"
      >
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-violet-400 uppercase tracking-[0.3em] text-sm mb-5">
            Services
          </p>

          <h2 className="text-5xl font-bold leading-tight mb-8">
            Solutions Built For
            <span className="block text-violet-500">
              Modern Businesses
            </span>
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed">
            From business websites to automation systems, Avenix delivers
            scalable digital solutions designed for growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-zinc-950 border border-zinc-800 rounded-3xl p-7 hover:border-violet-500/40 hover:-translate-y-2 transition duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center mb-8">
                  <Icon className="text-violet-400" size={30} />
                </div>

                <h3 className="text-2xl font-semibold mb-5 leading-snug">
                  {service.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Avenix */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-10">
        <div className="relative overflow-hidden rounded-[40px] border border-zinc-800 bg-zinc-950 p-12 lg:p-16">
          <div className="absolute top-0 left-0 w-72 h-72 bg-violet-600/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-600/10 blur-3xl rounded-full"></div>

          <div className="relative z-10 text-center max-w-4xl mx-auto mb-16">
            <p className="text-violet-400 uppercase tracking-[0.3em] text-sm mb-5">
              Why Avenix?
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-8">
              We Build With
              <span className="text-violet-500"> Purpose</span>
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed">
              Our goal is simple — build high quality digital products that
              help businesses grow and succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 relative z-10">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div key={index}>
                  <div className="w-16 h-16 rounded-2xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center mb-6">
                    <Icon className="text-violet-400" size={28} />
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">
                    {value.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-r from-zinc-950 to-violet-950/40 border border-zinc-800 rounded-[40px] p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Ready to build something amazing?
            </h2>

            <p className="text-zinc-400 text-lg">
              Let’s discuss your project and turn your ideas into reality.
            </p>
          </div>

          <button className="px-8 py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 transition font-medium flex items-center gap-2 text-lg">
            Book a Consultation
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center font-bold text-lg">
              A
            </div>

            <h2 className="text-xl font-bold">AVENIX</h2>
          </div>

          <p className="text-zinc-500 text-sm">
            © 2025 Avenix. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-zinc-400">
            <a
              href="https://wa.me/919348250968"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition"
            >
              WhatsApp
            </a>

            <a
              href="tel:+919348250968"
              className="hover:text-violet-400 transition"
            >
              Call
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
