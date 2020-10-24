import React, { Component } from "react";
import Task from "./task";

class Tasks extends Component {
  render() {
    const { tasks, onDelete } = this.props;

    return (
      <React.Fragment>
        {tasks.map((task) => (
          <div key={task.id} className="col-3">
            <Task key={task.id} task={task} onDelete={onDelete} />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Tasks;
