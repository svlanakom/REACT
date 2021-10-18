import React from 'react';

class Expand extends React.Component {
  state = { isShowed: false };

  toggleStatus = () => {
    this.setState({ isShowed: !this.state.isShowed });
  };

  render() {
    const { title, children } = this.props;
    const { isShowed } = this.state;

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleStatus}>
            {isShowed ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </button>
        </div>
        {isShowed ? (
          <div className="expand__content">
            <p>{children}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Expand;