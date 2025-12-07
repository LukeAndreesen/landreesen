import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Rectangle from "./AnimatedRectangle";

const MemQ = () => {
  useEffect(() => {
    document.title = "memQ Interview Portfolio – Luke Andreesen";
  }, []);
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="bg-black min-h-screen flex items-center justify-center p-4 py-12 md:py-8">
        <motion.div
          className="w-full max-w-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Rectangle width="w-full" height="h-full" borderWidth="border-4" bg="#000000">
            <div className="p-8 md:p-12">
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                memQ Interview Portfolio
              </motion.h1>
              <motion.h2
                className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Quantum software, simulators, and networking-relevant work
              </motion.h2>
              <motion.p
                className="text-base md:text-lg text-white mb-4 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                This page highlights projects and skills most relevant to the Quantum Software Engineer position at memQ, with a focus on high-performance quantum simulation, quantum networking, and Python-based tooling.
              </motion.p>
              <motion.div
                className="text-sm md:text-base text-gray-400 space-y-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p>Prepared by: Luke Andreesen • Master of Engineering (Quantum Engineering), University of Chicago</p>
                <p className="text-gray-500">Last updated: December 2025</p>
              </motion.div>
            </div>
          </Rectangle>
        </motion.div>
      </section>

      {/* How I'd Contribute Section */}
      <section className="bg-black py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How I'd contribute at memQ
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "Distributed and hardware-aware simulation",
                text: "I have experience building and using quantum circuit tooling in OpenQASM, Qiskit, and AWS Braket, and I'm comfortable modeling realistic hardware constraints and noise. I'm especially interested in simulators that capture probabilistic entanglement, decoherence, and network latency for modular architectures."
              },
              {
                title: "Compilation and transpilation across backends",
                text: "I've worked on transpiler extensions that target different quantum instruction sets, including AWS Braket's AutoQASM. This gave me practice reasoning about gate sets, device connectivity, and how to map high-level circuits to hardware-specific representations."
              },
              {
                title: "Python tooling and package-focused development",
                text: "I have strong experience writing Python-centric tooling, including quantum-control software, OpenQASM utilities, and data pipelines. I enjoy turning research prototypes into clean, reusable packages with clear APIs and documentation."
              },
              {
                title: "Cross-disciplinary collaboration",
                text: "My previous work spans quantum startups, research institutes, and industry partners. I'm used to working with physicists, software engineers, and business stakeholders to translate theoretical ideas into executable code and usable tools."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-white to-gray-400 rounded-2xl p-[2px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="bg-black rounded-2xl p-6 md:p-8 h-full">
                  <h3 className="text-xl md:text-2xl text-white font-semibold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Experience Section */}
      <section className="bg-black py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Relevant Experience
          </motion.h2>
          <div className="space-y-6 md:space-y-8">
            {[
              {
                title: "Quantum Software Engineering Intern – qBraid",
                location: "Chicago, IL • June 2025 – August 2025",
                bullets: [
                  "Developed qBraid Algos, a quantum algorithm library for constructing parameterized circuits in OpenQASM, giving users a hardware-agnostic way to build and benchmark algorithms.",
                  "Implemented custom include and library support in PyQASM, an OpenQASM 3 semantic analysis and tooling framework, improving composability and reuse of quantum programs.",
                  "Extended qBraid's quantum transpiler with support for AWS Braket's AutoQASM programming language, enabling \"write once, run anywhere\" execution across multiple quantum hardware backends."
                ]
              },
              {
                title: "Quantum Software Engineering Intern – Error Corp",
                location: "College Park, MD • June 2024 – August 2024",
                bullets: [
                  "Implemented gradient-based quantum optimal control routines (GRAPE-style algorithms) in QuTiP to optimize pulse sequences and improve gate fidelity on experimental quantum hardware.",
                  "Performed quantum state tomography on IonQ hardware to characterize error channels and validate the effectiveness of optimized control pulses.",
                  "Explored quantum machine learning workflows using Qiskit, PennyLane, and the qBraid SDK, gaining exposure to algorithmic workloads that benefit from hardware- and network-aware simulation."
                ]
              },
              {
                title: "Data Scientist – Chicago Quantum Exchange",
                location: "Chicago, IL • September 2024 – April 2025",
                bullets: [
                  "Built software and data pipelines to track and visualize growth in the quantum technology ecosystem, integrating multiple data sources and producing analytics for leadership.",
                  "Helped map the landscape of quantum technologies and workforce needs, giving me a broad view of where modular architectures and quantum networking fit into the overall ecosystem.",
                  "Collaborated with academic and industry partners, improving my ability to communicate technical ideas to diverse audiences and coordinate across organizations."
                ]
              }
            ].map((exp, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-white to-gray-400 rounded-2xl p-[2px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.01, y: -3 }}
              >
                <div className="bg-black rounded-2xl p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl text-white font-bold mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-400 mb-4">
                    {exp.location}
                  </p>
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-base md:text-lg text-gray-300 leading-relaxed flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="bg-black py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technical skills aligned with memQ
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-300 mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I focus on Python-first quantum and scientific computing, supported by strong fundamentals in classical programming, numerical methods, and data tooling.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "Quantum software and simulators",
                skills: "Qiskit • AWS Braket • Cirq • PennyLane • QuTiP • OpenQASM • qBraid SDK"
              },
              {
                title: "Programming and software development",
                skills: "Python • C/C++ • Java • JavaScript • TypeScript • Git • Linux"
              },
              {
                title: "Numerics and machine learning",
                skills: "NumPy • SciPy • Pandas • PyTorch • TensorFlow • scikit-learn"
              },
              {
                title: "Data and infrastructure",
                skills: "SQL • basic AWS experience (e.g., EC2, S3, simple services)"
              }
            ].map((group, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-white to-gray-400 rounded-2xl p-[2px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className="bg-black rounded-2xl p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl text-white font-semibold mb-4">
                    {group.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    {group.skills}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Projects Section */}
      <section className="bg-black py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Selected projects and artifacts
          </motion.h2>
          <div className="space-y-6 md:space-y-8">
            {[
              {
                title: "qBraid Algos – OpenQASM algorithm library",
                description: "A library for constructing parameterized quantum circuits in OpenQASM, designed to be hardware-agnostic. It provides reusable templates for common algorithms and makes it easier to benchmark circuits across different simulators and hardware backends."
              },
              {
                title: "PyQASM include and library support",
                description: "Extensions to the PyQASM toolchain that add support for modular includes and libraries in OpenQASM 3 workflows. This improves code reuse, organization, and integration with external circuit components and standard library routines."
              },
              {
                title: "Quantum optimal control extensions in QuTiP",
                description: "Gradient-based pulse optimization routines implemented in QuTiP to design high-fidelity control sequences for real quantum devices. The work included validating the resulting gates via simulated and experimental data, including state tomography."
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-white to-gray-400 rounded-2xl p-[2px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.01, y: -3 }}
              >
                <div className="bg-black rounded-2xl p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl text-white font-bold mb-4">
                    {project.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume and Contact Section */}
      <section className="bg-black py-12 md:py-16 px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Resume and contact
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            For more detail on my background, you can refer to my full resume or reach out directly.
          </motion.p>
          <motion.div
            className="bg-gradient-to-r from-white to-gray-400 rounded-2xl p-[2px] max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-black rounded-2xl p-6 md:p-8">
              <div className="space-y-4 text-base md:text-lg">
                <p className="text-white">
                  <span className="text-gray-400">Name:</span> Luke Andreesen
                </p>
                <p className="text-white">
                  <span className="text-gray-400">Email:</span>{" "}
                  <a
                    href="mailto:landreesen@uchicago.edu"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    landreesen@uchicago.edu
                  </a>
                </p>
                <p className="text-white">
                  <span className="text-gray-400">Website:</span>{" "}
                  <a
                    href="https://lukeandreesen.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    https://lukeandreesen.com
                  </a>
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <div className="relative w-full sm:w-48 h-14 bg-gradient-to-r from-white to-gray-400 rounded-full p-[2px]">
                    <button className="w-full h-full text-base md:text-lg text-white bg-black rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-200">
                      Download full resume (PDF)
                    </button>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MemQ;

