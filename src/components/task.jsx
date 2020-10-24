import React, { Component } from "react";

class Task extends Component {
  state = {};
  render() {
    const { task, onDelete } = this.props;
    return (
      <div>
        <div className="card m-4">
          <span className="card-header">
            <h5 style={{ display: "inline", float: "left" }} className="m-2">
              Task #{task.id}
            </h5>
            <button
              className="btn btn-danger btn-sm m-2"
              style={{ float: "right" }}
              onClick={() => onDelete(task.id)}
            >
              X
            </button>
          </span>

          <div className="card-body">
            <p className="card-text">{task.detail}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
