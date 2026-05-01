import React, { useEffect, useState } from "react";
import "./App.css";
import EmailButton from "./components/EmailButton";
import Rectangle from "./components/AnimatedRectangle";
import experience from "./data/experience";
import { AnimatePresence, motion } from "framer-motion";
import Simulator from "./components/quantumSimulator/Simulator";
import { initializeAnalytics, logPageView } from "./analytics";
import { BrowserRouter as Router, useLocation, Routes, Route, Link } from "react-router-dom";

const ExperienceCard = ({ exp, index }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.article
      layout
      key={exp.id}
      className="portfolio-card portfolio-card-hover relative flex min-h-64 flex-col justify-between overflow-hidden p-5"
      style={{ borderColor: showDetails ? `${exp.color}88` : undefined }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {!showDetails ? (
          <motion.div
            key="summary"
            className="flex min-h-52 flex-col justify-between"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
          >
            <div>
              <div className="mb-4 h-1 w-14 rounded-full" style={{ backgroundColor: exp.color }} />
              <p className="text-sm text-zinc-500">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-xl font-semibold leading-tight text-white md:text-2xl">{exp.role}</h3>
              <p className="mt-2 text-base font-medium" style={{ color: exp.color }}>
                {exp.company}
              </p>
              <p className="mt-5 text-sm leading-6 text-zinc-300">
                Selected work with practical engineering depth, cross-functional collaboration, and production-oriented delivery.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between gap-4">
              <button
                type="button"
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                onClick={() => setShowDetails(true)}
              >
                Details
              </button>
              {exp.image && (
                <a href={exp.link} target="_blank" rel="noopener noreferrer" aria-label={`${exp.company} website`}>
                  <img
                    src={exp.image}
                    alt={`${exp.company} logo`}
                    className="h-10 w-10 rounded-[6px] object-contain transition-transform duration-200 hover:scale-105"
                  />
                </a>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="details"
            className="flex min-h-52 flex-col justify-between"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
          >
            <div>
              <div className="mb-4 h-1 w-14 rounded-full" style={{ backgroundColor: exp.color }} />
              <h3 className="text-xl font-semibold leading-tight text-white md:text-2xl">{exp.company}</h3>
              <p className="mt-5 text-sm leading-6 text-zinc-300">{exp.description}</p>
            </div>
            <div className="mt-6 flex items-center justify-between gap-4">
              <button
                type="button"
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                onClick={() => setShowDetails(false)}
              >
                Show less
              </button>
              {exp.image && (
                <a href={exp.link} target="_blank" rel="noopener noreferrer" aria-label={`${exp.company} website`}>
                  <img
                    src={exp.image}
                    alt={`${exp.company} logo`}
                    className="h-10 w-10 rounded-[6px] object-contain transition-transform duration-200 hover:scale-105"
                  />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

function App() {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia("(max-width: 767px)").matches);

  useEffect(() => {
    initializeAnalytics();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleChange = (event) => setIsMobile(event.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  const AnalyticsWrapper = () => {
    const location = useLocation();

    useEffect(() => {
      logPageView();
    }, [location]);

    return null;
  };

  const socialLinks = [
    { label: "Resume", href: "/resume.pdf" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/luke-andreesen/" },
    { label: "GitHub", href: "https://github.com/LukeAndreesen" },
  ];

  const ProjectPdfSection = ({ title, description, src, actionHref, actionLabel }) => (
    <section className="portfolio-section py-6 md:py-10">
      <motion.div
        className="w-full max-w-7xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <Rectangle width="w-full" height="h-full" borderWidth="border" bg="#050505">
          <div className="w-full p-5 md:p-8 lg:p-10">
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow mb-3">Selected project</p>
                <h2 className="max-w-4xl text-2xl font-semibold leading-tight text-white md:text-4xl">
                  {title}
                </h2>
                <p className="section-copy mt-4 text-sm md:text-base">{description}</p>
              </div>
              {actionHref && (
                <a
                  href={actionHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 px-5 text-sm font-medium text-white transition-colors duration-200 hover:border-emerald-300/60 hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                >
                  {actionLabel}
                </a>
              )}
            </div>
            <div className="portfolio-card overflow-hidden bg-black">
              <iframe src={src} className="h-[48vh] w-full border-0 md:h-[72vh]" title={title} />
            </div>
          </div>
        </Rectangle>
      </motion.div>
    </section>
  );

  const HomePage = () => (
    <>
      <AnalyticsWrapper />
      <div className="portfolio-page">
        <section className="portfolio-section min-h-screen items-center py-10 md:py-6">
          <motion.div
            className="w-full max-w-7xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 160, damping: 22 }}
          >
            <Rectangle width="w-full" height="h-full" borderWidth="border" bg="#050505">
              <div className="flex min-h-[78vh] w-full flex-col justify-between gap-8 px-5 py-10 md:flex-row md:px-8 md:py-8 lg:px-10">
                <motion.div
                  className="flex flex-[2] flex-col items-center justify-center text-center md:items-start md:text-left"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.h1
                    className="mb-12 text-5xl font-normal leading-none text-white md:mb-20 md:text-7xl lg:text-8xl"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    Luke Andreesen
                  </motion.h1>
                  <div className="max-w-5xl space-y-6 text-lg leading-8 text-white md:space-y-8 md:text-2xl md:leading-10">
                    <motion.p
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      quantum engineering graduate student (master's) @ uchicago pme
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      b.s. computer science (ml specialization) - uchicago
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      b.a. economics - uchicago
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      pursuing a career in quantum computing
                    </motion.p>
                  </div>
                  <motion.div
                    className="mt-14 flex w-full justify-center md:mt-24 md:justify-start"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <EmailButton text="landreesen@uchicago.edu" />
                  </motion.div>
                </motion.div>

                <div className="hidden items-center md:flex">
                  <motion.div
                    className="h-4/5 w-px bg-white/80"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "80%" }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </div>

                <motion.div
                  className="flex flex-[1] flex-col items-center justify-center gap-6 md:gap-10"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <div className="grid w-full max-w-xs gap-6 md:gap-10">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-14 items-center justify-center rounded-full border border-white/60 bg-black/40 px-8 text-base font-medium text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 md:text-lg"
                      >
                        {link.label.toLowerCase()}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </Rectangle>
          </motion.div>
        </section>

        <section className="portfolio-section py-6 md:py-10">
          <motion.div
            className="w-full max-w-7xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
          >
            <Rectangle width="w-full" height="h-full" borderWidth="border" bg="#050505">
              <div className="w-full p-5 md:p-8 lg:p-10">
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="eyebrow mb-3">Experience</p>
                    <h2 className="text-3xl font-semibold leading-tight text-white md:text-6xl">
                      Applied technical work across quantum, data, and software.
                    </h2>
                  </div>
                  <p className="section-copy text-sm md:max-w-md md:text-base">
                    A condensed view of roles and projects. Select a card for a short summary, or open the company link from its logo.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {experience.map((exp, index) => (
                    <ExperienceCard key={exp.id} exp={exp} index={index} />
                  ))}
                </div>
              </div>
            </Rectangle>
          </motion.div>
        </section>

        {!isMobile && (
          <section className="portfolio-section py-6 md:py-10">
            <motion.div
              className="w-full max-w-7xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
            >
              <Rectangle width="w-full" height="h-full" borderWidth="border" bg="#050505">
                <div className="w-full overflow-hidden p-5 md:p-8 lg:p-10">
                  <div className="mb-8 text-center">
                    <p className="eyebrow mb-3">Interactive project</p>
                    <h2 className="text-3xl font-semibold text-white md:text-6xl">Quantum Computing Simulator</h2>
                    <p className="section-copy mx-auto mt-4 text-sm md:text-base">
                      A small from-scratch sample project emulating IBM Qiskit's{" "}
                      <a href="https://quantum.ibm.com/composer/" className="text-emerald-300 underline" target="_blank" rel="noopener noreferrer">
                        Quantum Composer
                      </a>
                      . React front end, Python backend. Updates including phase tracking and multi-qubit gates are coming soon.
                    </p>
                  </div>
                  <div className="portfolio-card overflow-x-hidden p-4">
                    <Simulator />
                  </div>
                </div>
              </Rectangle>
            </motion.div>
          </section>
        )}

        <ProjectPdfSection
          title="Benchmarking Quantum Algorithms for Finding Ground State of Ising Model"
          description="Research poster covering quantum algorithm performance on Ising model ground-state search."
          src="/research-poster.pdf"
          actionHref="/research-poster.pdf"
          actionLabel="Open PDF"
        />

        <ProjectPdfSection
          title="Traffic Prediction using Spatio-Temporal Graph Convolutional Network"
          description="Research paper and implementation exploring graph neural networks for traffic speed prediction."
          src="/landreesen_stgcn.pdf"
          actionHref="https://github.com/LukeAndreesen/TrafficSTGCN"
          actionLabel="Open GitHub"
        />
      </div>
    </>
  );

  const CorsaPage = () => (
    <>
      <AnalyticsWrapper />
      <div className="bg-black min-h-screen flex flex-col items-center justify-center px-4 py-8 gap-6">
        <div className="w-full max-w-[405px] aspect-[9/16] rounded-xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dm6v0VoW4Ds?rel=0"
            title="Corsa video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <Link
          to="/"
          className="px-5 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-200"
        >
          Back to home
        </Link>
      </div>
    </>
  );

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/corsa" element={<CorsaPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
