import React from "react";
import SquareGate from "./SquareGate";

const Qubit = ({ index, gates, isFilled, onCircleClick }) => {
    return (
        <div className="flex flex-col items-center h-full w-full overflow-visible">
            <div 
                className="relative w-full md:w-[85%] h-16 overflow-visible cursor-pointer transition-all duration-300"
                onClick={onCircleClick}
            >
                <div className="absolute left-[-0.5rem] md:left-[-.9rem] top-1/2 transform -translate-y-1/2 text-white text-sm md:text-base z-10">
                    q{index}
                </div>
                <div 
                    className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 z-0 transition-all duration-300 ${isFilled ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8),0_0_20px_rgba(59,130,246,0.6)]' : 'bg-white'}`}
                    style={{ marginLeft: '1rem' }}
                ></div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center w-[75%] max-w-full mx-auto relative z-10 space-x-4 md:space-x-8 overflow-x-auto" style={{ marginLeft: '1rem' }}>
                    {gates.map((gate, index) => (
                        <SquareGate key={index} gate={gate} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Qubit;