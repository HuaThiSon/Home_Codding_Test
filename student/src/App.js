import React, {Component} from 'react';
import './App.css';
import Search from './components/Search';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      tasks : [],
      isDisplayForm : false, // display form - mặc định sẽ ẩn
      taskEditing : null,

      //search
      keyword : ''
    }
  }

  
  componentDidMount() {
    if(localStorage && localStorage.tasks){ // kiểm tra xem localstorage có data hay ko
      var tasks = JSON.parse(localStorage.tasks); // parse chuỗi lúc đầu lưu trên local storage lại thành object để gán vào state
      this.setState({
        tasks: tasks
      })
    } else {
      alert("localStorage has no data!!!")
    }
  }

  //randomstring reactjs
  s4(){
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }

  //create ID
  generateID(){
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() 
    + '-' + this.s4() + '-' + this.s4() +  this.s4() + this.s4();
  }
  // arow function
  onToggleForm = () => { // theem task
    if (this.state.isDisplayForm && this.state.taskEditing !== null){
      this.setState({
        isDisplayForm : true,
        taskEditing : null
      });
    }else{
      this.setState({
        isDisplayForm : !this.state.isDisplayForm,
        taskEditing : null
      });
    }
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm : false
    })
  }
  onShowForm = () => {
    this.setState({
      isDisplayForm : true
    })
  }

  onSubmit = (data) => {
    var {tasks} = this.state; //task = this.state.tasks
    if(data.id === ''){
      data.id = this.generateID(); // tasks
      tasks.push(data);
    }else{
      //editing
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }
    this.setState({
      tasks : tasks,
      taskEditing : null
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onDelete = (id) => {
    var {tasks} = this.state;
    var index = this.findIndex(id);
    if(index !== -1){
      tasks.splice(index, 1);
      this.setState({
        tasks : tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks)); // save in to localStorage
    }
    this.onCloseForm();
  }
  findIndex = (id) => {
    var {tasks} = this.state;
    var result = -1;
    tasks.forEach((tasks, index) => {
        if(tasks.id === id){
          result = index;
        }
    });
    return result;
  }

  onUpdate = (id) => {
    var {tasks} = this.state;
    var index = this.findIndex(id);
    var taskEditing = tasks[index];
    this.setState({
      taskEditing : taskEditing
    });
    this.onShowForm();
  }

  onSearch = (keyword) => {
    this.setState({
      keyword: keyword
    });
  }

  render() {
    var { tasks,isDisplayForm, taskEditing,keyword } = this.state; // var tasks = this.state.tasks
    var elmTaskForm = isDisplayForm ?
        <TaskForm
          onSubmit={this.onSubmit} 
          onCloseForm={this.onCloseForm}
          task={taskEditing}
        /> 
        : '';
    if(keyword){
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      })
    }
    return (
      <div className="container">
      <div className="text-center">
          <h1>Student Management</h1>
          <hr/>
      </div>
      <div className="row">
          <div className={ isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
             {elmTaskForm}
          </div>
          <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick= { this.onToggleForm}
              >
                  <span className="fa fa-plus mr-5"></span>Create Student
              </button>
              <Search onSearch={ this.onSearch}/>
              <div className="row mt-15">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <TaskList 
                        tasks={tasks}
                        onDelete={this.onDelete}
                        onUpdate={this.onUpdate}
                      />
                  </div>
              </div>
          </div>
      </div>
  </div>
    )
  }
}
export default App;
