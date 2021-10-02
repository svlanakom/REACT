import React from "react";
import ReactDOM from "react-dom";

//should render following html

//<h1>Search Form</h1>
//<div>
//    <input type="text" />
//    <button>Search</button>
//</div>

ReactDOM.render(
  <>
    <h1>Search Form</h1>
    <div>
      <input type="text" />
      <button>Search</button>
    </div>
  </>,
  document.getElementById("root")
);
