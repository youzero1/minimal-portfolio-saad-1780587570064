import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20"
    >
      <div className="w-24 h-24 rounded-full bg-brand/10 flex items-center justify-center mb-6 ring-4 ring-brand/20">
        <span className="text-4xl">👨‍💻</span>
      </div>

      <p className="text-brand font-semibold tracking-widest uppercase text-sm mb-3">Hello, I'm</p>
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
        Alex Johnson
      </h1>
      <p className="text-xl md:text-2xl text-gray-500 font-light mb-6">
        Full-Stack Developer &amp; UI Enthusiast
      </p>
      <p className="max-w-xl text-gray-500 leading-relaxed mb-10">
        I build beautiful, performant web applications that solve real problems.
        Passionate about clean code and great user experiences.
      </p>

      <div className="flex items-center gap-4 mb-14">
        <a
          href="#projects"
          className="bg-brand text-white px-7 py-3 rounded-full font-semibold hover:bg-brand-dark transition-colors shadow-md"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="border border-gray-300 text-gray-700 px-7 py-3 rounded-full font-semibold hover:border-brand hover:text-brand transition-colors"
        >
          Contact Me
        </a>
      </div>

      <div className="flex items-center gap-5 mb-14">
        <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-brand transition-colors">
          <Github size={22} />
        </a>
        <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-brand transition-colors">
          <Linkedin size={22} />
        </a>
        <a href="mailto:alex@example.com" aria-label="Email" className="text-gray-400 hover:text-brand transition-colors">
          <Mail size={22} />
        </a>
      </div>

      <a href="#about" className="text-gray-400 hover:text-brand transition-colors animate-bounce">
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
