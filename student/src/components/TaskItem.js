import React, {Component} from 'react';

class TaskItem extends Component{

    onDelete = () => {
        this.props.onDelete(this.props.task.id);
    }

    onUpdate = () => {
        this.props.onUpdate(this.props.task.id);
    }

  render() {
    var { task,index } = this.props;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{task.name}</td>
            <td className="text-center">
                <button 
                    type="button" 
                    className="btn btn-warning"
                    onClick={this.onUpdate}
                >
                    <span  class="fas fa-pencil-alt"></span>Edit
                </button>
                &nbsp;
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={ this.onDelete}
                >
                    <span className="fa fa-trash mr-5"></span>Delete
                </button>
            </td>
        </tr>
    )
  }
}
export default TaskItem;
