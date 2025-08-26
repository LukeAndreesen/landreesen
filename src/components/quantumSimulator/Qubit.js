import React from "react";
import SquareGate from "./SquareGate";

const Qubit = ({ index, gates, isFilled, onCircleClick }) => {
    return (
        <div className="flex flex-col items-center h-full w-full">
            <div className="relative w-[85%] h-16"> {/* Set a fixed height for the container */}
                <div
                    className={`absolute left-[-2.5rem] top-1/2 transform -translate-y-1/2 rounded-full w-4 h-4 border-2 border-white z-10 cursor-pointer ${isFilled ? 'bg-white' : 'bg-transparent'}`}
                    onClick={onCircleClick}
                ></div>
                <div className="absolute left-[-.9rem] top-1/2 transform -translate-y-1/2 text-white">
                    q{index}
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full bg-white h-1 z-0" style={{ marginLeft: '1rem' }}></div>
                <div className="flex items-center w-[75%] mx-auto relative z-10 space-x-8">
                    {gates.map((gate, index) => (
                        <SquareGate key={index} gate={gate} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Qubit;