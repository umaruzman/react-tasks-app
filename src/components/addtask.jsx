import React, { Component } from "react";

class AddTask extends Component {
  state = {
    textarea: "",
  };

  handleTextArea = (e) => {
    this.setState({ textarea: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { onAddTask, totalTasks } = this.props;

    return (
      <React.Fragment>
        <form className="border p-5" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <h5 className="">
              Add New Task {"  "}
              <span className="badge badge-pill badge-danger">
                {totalTasks}
              </span>
            </h5>
            <textarea
              name="detailtextarea"
              id="detailtextarea"
              cols="40"
              rows="4"
              className="form-control"
              value={this.state.textarea}
              onChange={this.handleTextArea}
            ></textarea>
            <button
              className="btn btn-primary mt-2 float-right"
              onClick={() => onAddTask(this.state.textarea)}
            >
              Add Task
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default AddTask;
