import React from "react";


const GoodButton = () => {
    return (
        <button onClick={() => {
            alert("Good Job!");
        }}
            className="fancy-button"
        >
            Click me!
        </button>
    );
};

export default GoodButton;

