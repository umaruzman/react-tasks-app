import React, { Component } from "react";
import Tasks from "./components/tasks";
import AddTask from "./components/addtask";
import "./App.css";

class App extends Component {
  state = {
    tasks: [],
  };

  handleDelete = (taskId) => {
    const tasks = this.state.tasks.filter((t) => t.id !== taskId);
    this.setState({ tasks: tasks });
  };

  handleAddTask = (taskDetail) => {
    const tasks = [...this.state.tasks];
    const taskNo = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    tasks.push({ id: taskNo, detail: taskDetail });
    this.setState({ tasks: tasks });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <AddTask
              onAddTask={this.handleAddTask}
              totalTasks={this.state.tasks.length}
            />
          </div>
          <div className="row">
            <Tasks tasks={this.state.tasks} onDelete={this.handleDelete} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
