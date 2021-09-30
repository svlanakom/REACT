// <div class="greeting">Hello, React!</div>

const rootElement = document.querySelector("#root");
// const greetingElem = document.createElement("div");
// greetingElem.classList.add("greeting");
// greeting.textContent ="Hello,React";

//rootElement.append(greetingElem);

const greetingElement = React.createElement(
  "div",
  { className: "greeting" },
  "Hello, React!"
);

ReactDOM.render(greetingElement, rootElement);
