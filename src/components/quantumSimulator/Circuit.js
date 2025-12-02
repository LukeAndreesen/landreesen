import React, { useState } from "react";
import Qubit from "./Qubit";
import Gates from "./Gates";
import Graph from "./Graph";

const Circuit = () => {
    const [qubits, setQubits] = useState([[], [], []]); // Initialize with empty arrays for each qubit line
    const [states, setStates] = useState([1, 0, 0, 0, 0, 0, 0, 0]); // Initialize states to [1, 0] for each qubit
    const [selectedQubit, setSelectedQubit] = useState(null);
    const [probs, setProbs] = useState([100, 0, 0, 0, 0, 0, 0, 0]);
    const [finalState, setFinalState] = useState(null);

    const handleCircleClick = (index) => {
        setSelectedQubit(index);
    };

    const computeResult = async (gate, qubitIndex) => {
        const newStates = [...states];
        newStates[qubitIndex] = [1, 0]; // Reset the state for the selected qubit

        try {
            const response = await fetch('https://portfolio-backend-kez4.onrender.com/compute', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    state: states,
                    gate_1: qubitIndex === 0 ? gate : 'I',
                    gate_2: qubitIndex === 1 ? gate : 'I',
                    gate_3: qubitIndex === 2 ? gate : 'I',
                }),
            });
            const data = await response.json();
            setProbs(data.probs);
            setStates(data.final_state);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleGateClick = (gate) => {
        if (selectedQubit !== null) {
            const newQubits = [...qubits];
            if (newQubits[selectedQubit].length < 5) { // Check if the qubit has less than 5 gates
                newQubits[selectedQubit] = [...newQubits[selectedQubit], gate]; // Add gate to the end of the selected qubit's array
                setQubits(newQubits);

                computeResult(gate, selectedQubit);
            } else {
                console.log(`Qubit ${selectedQubit + 1} already has 5 gates.`);
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-full w-full overflow-x-hidden">
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-full overflow-visible md:overflow-x-hidden px-2 md:px-0">
                <div className="mt-2 ml-0 md:ml-4">
                    <Gates onGateClick={handleGateClick} />
                </div>
                <div className="flex flex-col items-center h-full w-full ml-0 md:ml-20 space-y-2 mt-2 md:mt-0 overflow-visible px-2 md:px-0">
                <div className="text-white text-sm md:text-md mb-2 md:mb-4 px-4 text-center">Click on a qubit line to select it, then click on gates to add to circuit.</div>
                    {qubits.map((gates, index) => (
                        <Qubit
                            key={index}
                            index={index} // Pass the index prop here
                            gates={gates}
                            isFilled={selectedQubit === index}
                            onCircleClick={() => handleCircleClick(index)}
                        />
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center h-full w-full mt-4 md:mt-0 overflow-x-hidden px-2 md:px-0">
                    <div className="flex items-center justify-center h-[380px] md:h-[500px] w-full md:w-[500px] px-2 md:px-4 pt-8 md:pt-0">
                        <Graph probs={probs} />
                    </div>
                </div>
            </div>
            <div className="text-white text-lg md:text-3xl mt-4 px-4 text-center">{finalState && `Final State: ${finalState}`}</div>
            <div className="text-white text-xs mt-2 px-4 text-center md:hidden opacity-70">Optimized for desktop :)</div>
        </div>
    );
};

export default Circuit;