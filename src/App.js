import React, { useEffect } from "react";
import "./App.css";
import EmailButton from "./components/EmailButton";
import Rectangle from "./components/AnimatedRectangle";
import experience from "./data/experience";
import { motion } from "framer-motion";
import { useState } from "react";
import Simulator from "./components/quantumSimulator/Simulator";
import { initializeAnalytics, logPageView } from "./analytics";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

function App() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = (id) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  useEffect(() => {
    initializeAnalytics();
  }, []);


  const AnalyticsWrapper = () => {
    const location = useLocation();

    useEffect(() => {
      logPageView();
    }, [location]);

    return null;
  };

  return (
    <div>
      <Router>
        <AnalyticsWrapper />
            <div className="bg-black min-h-screen flex items-center justify-center p-4 py-16 md:py-8">
              <motion.div
                className="w-full h-full"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 200, damping: 20 }}
              >
                <Rectangle width="w-full" height="h-full" borderWidth="border-4" bg="#000000">
                  <div className="flex flex-col md:flex-row justify-between w-full h-full px-4 md:px-8 py-12 md:py-8">
                    {/* Left Section */}
                    <motion.div
                      className="flex-[2] flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4 md:space-y-6 pl-0 md:pl-8"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <motion.h1
                        className="text-4xl md:text-7xl text-white pt-6 md:pt-10 mb-10 md:mb-20"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        Luke Andreesen
                      </motion.h1>
                      <motion.p
                        className="text-white text-lg md:text-2xl"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      >
                        quantum engineering graduate student (master's) @ uchicago pme
                      </motion.p>
                      <motion.p
                        className="text-white text-lg md:text-2xl"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      >
                        b.s. computer science (ml specialization) - uchicago
                      </motion.p>
                                            <motion.p
                        className="text-white text-lg md:text-2xl"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      >
                        b.a. economics - uchicago
                      </motion.p>
                      <motion.p
                        className="text-white text-lg md:text-2xl"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        pursuing a career in quantum computing
                      </motion.p>
                      <motion.div
                        className="flex justify-center md:justify-start items-center w-full pt-10 md:pt-20"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                      >
                        <EmailButton text="landreesen@uchicago.edu" />
                      </motion.div>
                    </motion.div>

                    {/* Divider */}
                    <div className="mt-10 md:mt-20">
                      <motion.div
                        className="hidden md:flex items-center"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "90%" }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                      >
                        <div className="w-[1px] bg-white h-4/5"></div>
                      </motion.div>
                    </div>

                    {/* Right Section */}
                    <motion.div
                      className="flex-[1] flex flex-col justify-center items-center space-y-6 md:space-y-10 mt-8 md:mt-0"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.9 }}
                    >
                      {/* Resume Button */}
                      <motion.div
                        className="relative w-full sm:w-48 h-14 bg-gradient-to-r from-white to-gray-400 rounded-full p-[2px]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                      >
                        <a
                          href="/resume.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full h-full"
                        >
                          <button className="w-full h-full text-base md:text-lg text-white bg-black rounded-full flex items-center justify-center hover:bg-white hover:text-black">
                            resume
                          </button>
                        </a>
                      </motion.div>

                      {/* LinkedIn Button */}
                      <motion.div
                        className="relative w-full sm:w-48 h-14 bg-gradient-to-r from-white to-gray-400 rounded-full p-[2px]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                      >
                        <a
                          href="https://www.linkedin.com/in/luke-andreesen/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full h-full"
                        >
                          <button className="w-full h-full text-base md:text-lg text-white bg-black rounded-full flex items-center justify-center hover:bg-white hover:text-black">
                            linkedin
                          </button>
                        </a>
                      </motion.div>

                      {/* GitHub Button */}
                      <motion.div
                        className="relative w-full sm:w-48 h-14 bg-gradient-to-r from-white to-gray-400 rounded-full p-[2px]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                      >
                        <a
                          href="https://github.com/LukeAndreesen"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full h-full"
                        >
                          <button className="w-full h-full text-base md:text-lg text-white bg-black rounded-full flex items-center justify-center hover:bg-white hover:text-black">
                            github
                          </button>
                        </a>
                      </motion.div>
                    </motion.div>
                  </div>
                </Rectangle>
              </motion.div>
            </div>
            <div className="bg-black h-auto min-h-screen md:h-[120vh] flex items-center justify-center p-4 py-8 md:py-4">
              <Rectangle width="w-full" height="h-full" borderWidth="border-4" bg="#000000">
                <div className="relative h-full w-full min-h-screen md:min-h-0 overflow-visible md:overflow-hidden">
                  <h1 className="text-4xl md:text-7xl text-white absolute right-0 top-0 p-4 md:p-10 z-10">Experience</h1>
                  <div className="flex items-start md:items-center justify-center pt-20 md:pt-40 pb-6 md:absolute md:inset-0 w-full">
                    <div className="grid grid-cols-2 gap-2 md:gap-x-20 md:gap-y-10 w-full max-w-full px-2 md:px-0 mt-4 md:mt-0 py-4 md:py-0">
                      {experience.map((exp) => (
                        <motion.div
                          key={exp.id}
                          className="relative w-full max-w-full h-auto min-h-[10rem] md:min-h-[13rem] md:w-[30rem] md:h-52 bg-gradient-to-r from-white to-gray-400 rounded-2xl p-[2px] mx-auto"
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20, duration: 0.5, delay: exp.id * 0.1 }}
                          whileHover={{
                            y: -10,
                            scale: 1.05,
                            boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)",
                          }}
                        >
                          <div className="w-full h-full text-center text-white bg-black rounded-2xl flex flex-col items-center justify-center relative py-2 md:py-0">
                            {!showDetails[exp.id] ? (
                              <>
                                <div className="absolute top-2 md:top-4 font-light text-xs md:text-xl lg:text-3xl mt-1 md:mt-2 px-1">
                                  {exp.role}
                                </div>
                                <div
                                  className="text-sm md:text-lg lg:text-2xl font-semibold mt-8 md:mt-10"
                                  style={{ color: exp.color }}
                                >
                                  {exp.company}
                                </div>
                                <button
                                  className="mt-4 md:mt-6 px-2 md:px-4 py-1 md:py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs md:text-sm lg:text-md font-semibold rounded-full hover:scale-105 hover:shadow-md transition-transform duration-200"
                                  onClick={() => toggleDetails(exp.id)}
                                >
                                  Learn More
                                </button>
                              </>
                            ) : (
                              <>
                                <div className="text-center text-xs md:text-sm lg:text-md px-2 md:px-4">
                                  <p className="mb-2 md:mb-4">{exp.description}</p>
                                </div>
                                <button
                                  className="px-2 md:px-4 py-1 md:py-1 bg-gradient-to-r from-red-500 to-orange-600 text-white text-xs md:text-sm lg:text-md font-semibold rounded-full hover:scale-105 hover:shadow-md transition-transform duration-200"
                                  onClick={() => toggleDetails(exp.id)}
                                >
                                  Go Back
                                </button>
                              </>
                            )}
                            {/* Logo in bottom-left if provided */}
                            {exp.image && (
                              <a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-1 md:bottom-2 left-2 md:left-3"
                              >
                                <img
                                  src={exp.image}
                                  alt={`${exp.company} logo`}
                                  className="w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain rounded hover:scale-110 transition-transform duration-200"
                                />
                              </a>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Rectangle>
            </div>
            <div className="bg-black h-auto min-h-screen md:h-[60%] p-4 py-8 md:py-4">
              <Rectangle width="w-full" height="h-full" borderWidth="border-4" bg="#000000">
                <div className="flex flex-col items-center justify-center h-full w-full overflow-x-hidden">
                  <h1 className="text-3xl md:text-7xl text-white text-center pt-6 md:pt-10 px-4">Quantum Computing Simulator</h1>
                  <h3 className="text-sm md:text-xl text-white text-center pt-6 md:pt-10 px-4">A small from-scratch sample project emulating IBM Qiskit's <a href='https://quantum.ibm.com/composer/' className="underline" target="_blank" rel="noopener noreferrer">Quantum Composer</a>. React front end, Python backend. Updates - including phase tracking and multi-qubit gates - coming soon.</h3>
                  <div className="w-full overflow-x-hidden px-2 md:px-4">
                    <Simulator />
                  </div>
                </div>
                
              </Rectangle>
              <div className="bg-black h-auto min-h-screen md:h-[120vh] flex items-center justify-center p-4 py-8 md:py-4">
              <Rectangle width="w-full" height="h-full" borderWidth="border-4" bg="#000000">
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <h1 className="text-xl md:text-4xl text-white text-center pt-6 md:pt-10 px-4">Project: Benchmarking Quantum Algorithms for Finding Ground State of Ising Model</h1>
                  <div className="w-full h-full flex flex-col items-center justify-center py-4 md:py-0">
                    <div className="w-full md:w-3/4 h-[40vh] md:h-3/4 mb-4 md:mb-0">
                      <iframe
                        src="/research-poster.pdf"
                        className="w-full h-full border-0"
                        title="Research Poster"
                      />
                    </div>
                    <a
                      href="/research-poster.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md:hidden px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full hover:scale-105 hover:shadow-md transition-transform duration-200 text-center"
                    >
                      Open PDF in New Tab
                    </a>
                  </div>
                </div>
              </Rectangle>
             
              
            </div>
            <div className="bg-black h-auto min-h-screen md:h-[120vh] flex items-center justify-center p-4 py-8 md:py-4">
              <Rectangle width="w-full" height="h-full" borderWidth="border-4" bg="#000000">
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <h1 className="text-xl md:text-4xl text-white text-center pt-6 md:pt-10 px-4">
                    Project: Traffic Prediction using Spatio-Temporal Graph Convolutional Network
                  </h1>
                  <div className="w-full h-full flex flex-col items-center justify-center py-4 md:py-0">
                    <div className="w-full md:w-3/4 h-[40vh] md:h-3/4 mb-4 md:mb-0">
                      <iframe
                        src="/landreesen_stgcn.pdf"
                        className="w-full h-full border-0"
                        title="Research Paper"
                      />
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-0 items-center">
                      <a
                        href="/landreesen_stgcn.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:hidden px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full hover:scale-105 hover:shadow-md transition-transform duration-200 text-center"
                      >
                        Open PDF in New Tab
                      </a>
                      <a
                        href="https://github.com/LukeAndreesen/TrafficSTGCN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-0 md:mt-6 mb-3 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm md:text-md font-semibold rounded-full hover:scale-105 hover:shadow-md transition-transform duration-200 text-center"
                      >
                        Open in GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </Rectangle>
            </div>

          </div>
        </Router>
    </div>
  );
}

export default App;


