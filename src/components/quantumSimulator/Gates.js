import React, { useState } from "react";
import SquareGate from "./SquareGate";

const Gates = ({ onGateClick }) => {
    const [hoveredGate, setHoveredGate] = useState(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const gates = ["H", "X", "Y", "Z", "I", "S", "T"];
    const names = {
        "H": "Hadamard",
        "X": "Pauli-X",
        "Y": "Pauli-Y",
        "Z": "Pauli-Z",
        "I": "Identity",
        "S": "Phase",
        "T": "T"
    };

    const handleMouseMove = (event) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    return (
        <div className="h-64 w-36 relative inline-block bg-gradient-to-r from-white to-gray-400 rounded-lg p-[2px]">
            <div className="flex flex-wrap justify-center items-center bg-black rounded-md p-2 h-full w-full">
                {gates.map((gate, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setHoveredGate(gate)}
                        onMouseLeave={() => setHoveredGate(null)}
                        onMouseMove={handleMouseMove}
                        className="m-1"
                    >
                        <SquareGate gate={gate} onClick={() => onGateClick(gate)} />
                    </div>
                ))}
            </div>
            {hoveredGate && (
                <div
                    className="absolute bg-gray-800 text-white text-sm py-1 px-3 rounded-lg shadow-md"
                    style={{
                        top: cursorPosition.y - 400, // Adjust this value to position the popup above the cursor
                        left: cursorPosition.x,
                        transform: 'translateX(-50%)'
                    }}
                >
                    {names[hoveredGate]}
                </div>
            )}
        </div>
    );
}

export default Gates;