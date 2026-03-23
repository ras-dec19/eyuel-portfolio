import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Hi, I&apos;m Eyuel Dagne
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            I&apos;m a network engineer focused on routing, switching, and
            network security. I build and maintain scalable networks,
            troubleshoot issues quickly, and improve performance and
            availability across the environment.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={`${import.meta.env.BASE_URL}resume/Resume.pdf`}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Resume
            </a>

            <a
              href="#projects"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-white/10 text-gray-300 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/40 hover:text-blue-400 hover:bg-blue-500/5"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
