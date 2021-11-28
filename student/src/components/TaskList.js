import React, {Component} from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component{
  render() {
      var { tasks } = this.props; // var task = this.props.tasks
      var elmTask = tasks.map((task, index) => {
                return <TaskItem 
                    key={task.id} 
                    index={index} 
                    task={task}
                    onDelete={ this.props.onDelete }
                    onUpdate={ this.props.onUpdate}
                />
      });
    return (
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {elmTask}
            </tbody>
        </table>
    )
  }
}
export default TaskList;
