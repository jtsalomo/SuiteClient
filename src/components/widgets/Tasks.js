/* eslint-disable react/no-multi-comp */
import React, {PropTypes} from 'react';
import { Button, Modal, Clearfix, Collapse} from 'react-bootstrap';
import EntypoPlus from 'react-entypo/lib/entypo/Plus';
import TaskItem from './TaskItem';
import { EntypoPhone,EntypoReply,EntypoNew} from 'react-entypo';

/*
  Tasks component.
  Parameters:
    className (options)
      - additional classes to add to <ul class="tracker">
    activeStep (optional)
      - set which step should show active.  Each step to the left (smaller index) of the active item will automatically be set to "completed"
      - a value of '0' will set all to grey/'incomplete'
    id (optional)
      - set the id attribute of the <ul class="tracker">

    photo (string)
      - a URL/path to profile pick.

*/

class Tasks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      addtaskShow: false,
      tasksOpen: false
    };
    this.openAddTask = this.openAddTask.bind(this);
    this.closeAddTask = this.closeAddTask.bind(this);
    this.tasksToggle = this.tasksToggle.bind(this);
  }
  openAddTask(){
    this.setState({ addtaskShow: true });
  }
  closeAddTask(){
    this.setState({ addtaskShow: false });
  }
  tasksToggle(){
    this.setState({ tasksOpen: !this.state.tasksOpen });
  }

  createTaskItem(icon,primary,secondary,type,btn,alert,key){
    let taskIcon = icon === 'phone' ? <EntypoPhone />: icon === 'reply' ? <EntypoReply />: icon === 'new' ? <EntypoNew /> : '';
    return(
      <TaskItem
        key={key}
        leftIcon={taskIcon}
        primaryText= {primary}
        secondaryText={secondary}
        typeText={type}
        taskButtonlabel={btn}
        alert={alert}
      />
   );
  }

  render(){
    const mergedClasses = this.props.className ? 'tasks '+this.props.className : 'tasks';
    const numOfTasks = this.props.tasks ? this.props.tasks.length : 0;
    let tasklistOverflow = [];
    let taskitemlist = [];
    for (let i = 0; i < this.props.tasks.length; i++) {
      const objectData = this.props.tasks[i];
      const fillTasks = this.createTaskItem(
        objectData.icon,
        objectData.primetext,
        objectData.secondarytext,
        objectData.typetext,
        objectData.taskbuttonlabel,
        objectData.alert,
        i
      );
      if (i < 3) {
        taskitemlist.push(fillTasks);
      }
      else{
        tasklistOverflow.push(fillTasks);
      }
    }

    return (
      <div className={mergedClasses}>
        <div className="tasks__header">
          <h5 className="tasks__header-title">Tasks <span className="tasks__header-count">({numOfTasks})</span></h5>
          <Button className="tasks__header-button tasks__addtask" onClick={this.openAddTask}><EntypoPlus valign/></Button>
          <Clearfix/>
        </div>

        { this.props.tasks && this.props.tasks.length > 0 ?
          <div className="tasks__taskList-container">
            <div className="tasks__taskList">
              <div className="tasks__taskList-initial">
                {taskitemlist}
              </div>
              <Collapse in={this.state.tasksOpen} className="tasks__taskList-overflow">
                <div>
                  {tasklistOverflow}
                </div>
              </Collapse>
            </div>
            <Button block onClick={this.tasksToggle}>{this.state.tasksOpen ? 'Show Less' : 'Show More'}</Button>
          </div>
        :
        <div className="tasks__taskList-container--notasks">
          <span className="text-muted">You do not have any active tasks.</span>
        </div>
        }

        <AddTaskModal show={this.state.addtaskShow} onHide={this.closeAddTask} />
      </div>
    );
  }
}
Tasks.propTypes = {
  className: PropTypes.string,
  tasks: PropTypes.array
};

// Modals

const AddTaskModal = (props) =>
  <Modal {...props} bsSize="small">
    <Modal.Header closeButton>
      <Modal.Title>Edit Customer Name</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>[add task dialogue here]</p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Cancel</Button>
      <Button onClick={props.onHide} bsStyle="primary">Confirm</Button>
    </Modal.Footer>
  </Modal>;

AddTaskModal.propTypes = {
  onHide: PropTypes.func.isRequired
};

export default Tasks;
/* eslint-enable react/no-multi-comp */
