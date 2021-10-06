import React from "react";

const coral = "Coral";
const aqua = "Aqua";
const bisque = "Bisque";

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "",
    };
  }
  handleHover = () => {
    this.setState({
      currentColor: color,
    });
  };
  HandleMouseLeave = () => {
    this.setState({
      currentColor: "",
    });
  };
  render() {
    return (
      <div>
        <div className="picker__title">{this.state.currentColor}</div>
        <div>
          <button
            onMouseEnter={() => this.handleHover}
            onMouseLeave={this.HandleMouseLeave}
            className="picker__button picker__button_coral"
          ></button>
          <button
            onMouseEnter={() => this.handleHover(aqua)}
            onMouseLeave={this.HandleMouseLeave}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseEnter={() => this.handleHover(bisque)}
            onMouseLeave={this.HandleMouseLeave}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}
export default ColorPicker;
