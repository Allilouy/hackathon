import React from "react";
import ReactDOM from "react-dom";

export default class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <textarea value={this.state.value} onChange={this.handleChange} />
        <button onClick={() => this.props.onClick(this.state.value)}>
          Add task
        </button>
      </div>
    );
  }
}
