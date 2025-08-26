import React from "react";

const colors = {
    "H": "#6366F1",
    "X": "#F24B4B",
    "Y": "#FBBF24",
    "Z": "#F87171",
    "I": "#20B5AA",
    "S": "#F59E0B",
    "T": "#F163EA",
}

const SquareGate = ({ gate, onClick }) => {
    const backgroundColor = colors[gate.toUpperCase()] 
    
    return (
        <div
        className={`flex items-center justify-center w-12 h-12 rounded-md text-white text-xl font-semibold cursor-pointer`}
        style={{ backgroundColor }}
        onClick={onClick}
        >
        {gate}
        </div>
    );
}

export default SquareGate;