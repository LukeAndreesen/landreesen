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
            <div className="bg-black h-screen flex items-center justify-center p-4">
              <motion.div
                className="w-full h-full"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 200, damping: 20 }}
              >
                <Rectangle width="w-full" height="h-full" borderWidth="border-4" bg="#000000">
                  <div className="flex flex-col md:flex-row justify-between w-full h-full px-8 py-1">
                    {/* Left Section */}
                    <motion.div
                      className="flex-[2] flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 pl-8"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <motion.h1
                        className="text-7xl text-white pt-10 mb-20"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        Luke Andreesen
                      </motion.h1>
                      <motion.p
                        className="text-white text-2xl"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      >
                        quantum engineering graduate student (master's) @ uchicago pme
                      </motion.p>
                      <motion.p
                        className="text-white text-2xl"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      >
                        b.s. computer science (ml specialization) - uchicago
                      </motion.p>
                                            <motion.p
                        className="text-white text-2xl"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      >
                        b.a. economics - uchicago
                      </motion.p>
                      <motion.p
                        className="text-white text-2xl"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        pursuing a career in quantum computing
                      </motion.p>
                      <motion.div
                        className="flex justify-center md:justify-start items-center w-full pt-20"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                      >
                        <EmailButton text="landreesen@uchicago.edu" />
                      </motion.div>
                    </motion.div>

                    {/* Divider */}
                    <div className="mt-20">
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
                      className="flex-[1] flex flex-col justify-center items-center space-y-10"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.9 }}
                    >
                      {/* Resume Button */}
                      <motion.div
                        className="relative w-48 h-14 bg-gradient-to-r from-white to-gray-400 rounded-full p-[2px]"
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
                          <button className="w-full h-full text-lg text-white bg-black rounded-full flex items-center justify-center hover:bg-white hover:text-black">
                            resume
                          </button>
                        </a>
                      </motion.div>

                      {/* LinkedIn Button */}
                      <motion.div
                        className="relative w-48 h-14 bg-gradient-to-r from-white to-gray-400 rounded-full p-[2px]"
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
                          <button className="w-full h-full text-lg text-white bg-black rounded-full flex items-center justify-center hover:bg-white hover:text-black">
                            linkedin
                          </button>
                        </a>
                      </motion.div>

                      {/* GitHub Button */}
                      <motion.div
                        className="relative w-48 h-14 bg-gradient-to-r from-white to-gray-400 rounded-full p-[2px]"
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
                          <button className="w-full h-full text-lg text-white bg-black rounded-full flex items-center justify-center hover:bg-white hover:text-black">
                            github
                          </button>
                        </a>
                      </motion.div>
                    </motion.div>
                  </div>
                </Rectangle>
              </motion.div>
            </div>
            <div className="bg-black h-[120vh] flex items-center justify-center p-4">
              <Rectangle width="w-full" height="h-full" borderWidth="border-4" bg="#000000">
                <div className="relative h-full w-full">
                  <h1 className="text-7xl text-white absolute right-0 top-0 p-10">Experience</h1>
                  <div className="absolute inset-0 flex items-center justify-center pt-32">
                    <div className="grid grid-cols-2 gap-x-20 gap-y-10">
                      {experience.map((exp) => (
                        <motion.div
                          key={exp.id}
                          className="relative w-[30rem] h-52 bg-gradient-to-r from-white to-gray-400 rounded-2xl p-[2px]"
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: exp.id * 0.1 }}
                          whileHover={{
                            y: -10,
                            scale: 1.05,
                            boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)",
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <div className="w-full h-full text-center text-white bg-black rounded-2xl flex flex-col items-center justify-center relative">
                            {!showDetails[exp.id] ? (
                              <>
                                <div className="absolute top-4 font-light text-3xl mt-2">
                                  {exp.role}
                                </div>
                                <div
                                  className="text-2xl font-semibold mt-10"
                                  style={{ color: exp.color }}
                                >
                                  {exp.company}
                                </div>
                                <button
                                  className="mt-6 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-md font-semibold rounded-full hover:scale-105 hover:shadow-md transition-transform duration-200"
                                  onClick={() => toggleDetails(exp.id)}
                                >
                                  Learn More
                                </button>
                              </>
                            ) : (
                              <>
                                <div className="text-center text-md px-4">
                                  <p className="mb-4">{exp.description}</p>
                                </div>
                                <button
                                  className="px-4 py-1 bg-gradient-to-r from-red-500 to-orange-600 text-white text-md font-semibold rounded-full hover:scale-105 hover:shadow-md transition-transform duration-200"
                                  onClick={() => toggleDetails(exp.id)}
                                >
                                  Go Back
                                </button>
                              </>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Rectangle>
            </div>
            <div className="bg-black h-[60%] p-4">
              <Rectangle width="w-full" height="h-full" borderWidth="border-4" bg="#000000">
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <h1 className="text-7xl text-white text-center pt-10">Quantum Computing Simulator</h1>
                  <h3 className="text-xl text-white text-center pt-10">A small from-scratch sample project emulating IBM Qiskit's <a href='https://quantum.ibm.com/composer/' className="underline" target="_blank" rel="noopener noreferrer">Quantum Composer</a>. React front end, Python backend. Updates - including phase tracking and multi-qubit gates - coming soon.</h3>
                  <Simulator />
                </div>
                
              </Rectangle>
              <div className="bg-black h-[120vh] flex items-center justify-center p-4">
              <Rectangle width="w-full" height="h-full" borderWidth="border-4" bg="#000000">
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <h1 className="text-4xl text-white text-center pt-10">Project: Benchmarking Quantum Algorithms for Finding Ground State of Ising Model</h1>
                  <div className="w-full h-full flex items-center justify-center">
                    <iframe
                      src="/research-poster.pdf"
                      className="w-3/4 h-3/4"
                      title="Research Poster"
                    />
                  </div>
                </div>
              </Rectangle>
             
              
            </div>
            <div className="bg-black h-[120vh] flex items-center justify-center p-4">
              <Rectangle width="w-full" height="h-full" borderWidth="border-4" bg="#000000">
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <h1 className="text-4xl text-white text-center pt-10">
                    Project: Traffic Prediction using Spatio-Temporal Graph Convolutional Network
                  </h1>
                  <div className="w-full h-full flex items-center justify-center">
                    <iframe
                      src="/landreesen_stgcn.pdf"
                      className="w-3/4 h-3/4"
                      title="Research Paper"
                    />
                  </div>
                  <a
                    href="https://github.com/LukeAndreesen/TrafficSTGCN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0 mb-3 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-md font-semibold rounded-full hover:scale-105 hover:shadow-md transition-transform duration-200 text-center"
                  >
                    Open in GitHub
                  </a>
                </div>
              </Rectangle>
            </div>

          </div>
        </Router>
    </div>
  );
}

export default App;


