import React, {Component, PropTypes} from 'react';
import { Button, ListGroupItem } from 'react-bootstrap';

class TaskItem extends Component {
  constructor(props) {
    super(props);
  }

  pushElement(addIcon, element) {
    if (element) {
      addIcon.push(
        React.cloneElement(element, {
          key: addIcon.length,
          style: {height: '24px', width: '24px',display: 'block', margin: '12px'}
        })
      );
    }
  }

  createTextElement(className, data, key) {
    if(key === "primaryText"){
      return (
      <span key={key}>
       <h5 className={className}> {data} </h5>
      </span>
      );
    }
    else {
      return (
        <span key={key}>
       <p className={className}> {data} </p>
      </span>
      );
    }
  }

  createButtonElement(label, key) {
    return (
      <span key={key} >
      <Button bsStyle="primary" >
        <span>{label}</span>
      </Button>
      </span>
    );
  }

  createAlert(className, key){
    return(
    <span key={key} className={className} />
    );
  }

  render() {
    const {
      children,
      primaryText,
      secondaryText,
      leftIcon,
      taskButtonlabel,
      typeText,
      alert
    } = this.props;

    const addIcon = [];
    const addButton = [];
    const addText = [children];
    const alertspan = [];

    if(alert){
      const addAlert = this.createAlert(
       'taskitem__alert',
        'alert'
      );
      alertspan.push(addAlert);
    }

    if (leftIcon) {
      this.pushElement(
        addIcon,
        leftIcon
      );
    }

    if(taskButtonlabel){
      const buttonElement = this.createButtonElement(
       taskButtonlabel,
       'taskButton'
    );
      addButton.push(buttonElement);
    }

    if (primaryText) {
      const primaryTextElement = this.createTextElement(
        "list-group-item-text taskitem__text",
         primaryText,
        'primaryText'
      );
      addText.push(primaryTextElement);
    }

    if (secondaryText) {
      const secondaryTextElement = this.createTextElement(
        "list-group-item-text text-muted",
         secondaryText,
        'secondaryText'
      );
      addText.push(secondaryTextElement);
    }
    if (typeText) {
      const primaryTextElement = this.createTextElement(
        "list-group-item-text text-muted",
         typeText,
        'typeText'
      );
      addText.push(primaryTextElement);
    }

    return (
    <div className="taskitem">
        <ListGroupItem className="taskitem__itemcontainer">
          {alertspan}
          <span className="taskitem__left">
          {addIcon}
          </span>
          <span className="taskitem__textposition">
          {addText}
           </span>
          <span className="taskitem__button">
          {addButton}
          </span>
          <span className="taskitem__button">
          <Button><span>Dismiss</span></Button>
           </span>
          <span className="taskitem__button">
          <Button><span>Edit</span></Button>
           </span>
          </ListGroupItem>
  </div>
    );
  }
}

TaskItem.propTypes = {
  children: PropTypes.node,
  taskButtonlabel: PropTypes.string,
  primaryText: PropTypes.node,
  secondaryText: PropTypes.node,
  typeText: PropTypes.node,
  style: PropTypes.object,
  leftIcon: PropTypes.element,
  alert: PropTypes.bool,
};

TaskItem.defaultProps = {
  secondaryTextLines: 1,
};

export default TaskItem;
