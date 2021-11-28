import React, { Component } from "react";
class TaskForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id : '',
      name : ''
    }
  }

  componentDidMount() {
    if (this.props.task){
      this.setState({
        id : this.props.task.id,
        name : this.props.task.name,
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.task){
      this.setState({
        id : nextProps.task.id,
        name : nextProps.task.name,
      })
    }else if(!nextProps.task){
      this.setState({
        id : '',
        name : ''
      })
    }
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    // if(name === '')
    this.setState({
      [name] : value
    });
  }

  onSubmit = (event) => {
    event.preventDefault(); //avoid reload page
    this.props.onSubmit(this.state);
    // Cancel & close Form
    this.onClear();
    this.onCloseForm();
  }

  onClear = () => {
    this.setState({
      name : ''
    });
  }

  render() {
    var { id} = this.state;
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {id !== ''? 'Update Student' : 'Add Student' }
            <span 
               class="fas fa-times-circle fa-times-circle_delete"
              onClick={this.onCloseForm}
            >
            </span>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Name :</label>
              <input 
                type="text" 
                className="form-control" 
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                <span className="fa fa-plus mr-5" />Save
              </button>
              &nbsp;
              <button 
                type="button"
                className="btn btn-danger"
                onClick={this.onClear}
              >
                <span className="fa fa-close mr-5" />Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


export default TaskForm;