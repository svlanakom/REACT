import React from "react";

function Modal(props) {
  return (
    <div>
      <p> are you sure you want it?</p>
      <button className="btn btn--alt">Cancel</button>
      <button className="btn">Confirm</button>
    </div>
  );
}

export default Modal;
