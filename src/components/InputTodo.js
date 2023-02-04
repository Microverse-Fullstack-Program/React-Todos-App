import React, { useState } from "react";

class InputTodo extends React.Component {
  constructor(props) {
    super(props);
    state = {
      title: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Add Todo..."
          value={this.title}
          onChange={this.onChange}
        />
        <button type="button">Add</button>
      </form>
    );
  }
}

export default InputTodo;
