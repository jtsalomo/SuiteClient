import React, {Component, PropTypes} from 'react';
import { Button,Panel,ButtonToolbar } from 'react-bootstrap';

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

  render() {
    const {
      primaryText,
      secondaryText,
      leftIcon,
      taskButtonlabel,
      typeText,
      alert
    } = this.props;

    const addIcon = [];

    if (leftIcon) {
      this.pushElement(
        addIcon,
        leftIcon
      );
    }

    return (
      <Panel className={(alert) ? "taskitem taskitem--alert " : "taskitem"} >
        <span className="taskitem__left">
          {addIcon}
        </span>
        <span className="taskitem__textposition">
          <h5 className="taskitem__text">{primaryText}</h5>
          <p className="taskitem__secondarytext text-muted">{secondaryText}</p>
          <p className="taskitem__secondarytext text-muted">{typeText}</p>
        </span>
        <ButtonToolbar className="taskitem__button">
          <Button>Dismiss</Button>
          <Button>Edit</Button>
          {(taskButtonlabel)?<Button bsStyle="primary">{taskButtonlabel}</Button> : null}
        </ButtonToolbar>
      </Panel>
    );
  }
}

TaskItem.propTypes = {
  taskButtonlabel: PropTypes.string,
  primaryText: PropTypes.node,
  secondaryText: PropTypes.node,
  typeText: PropTypes.node,
  style: PropTypes.object,
  leftIcon: PropTypes.element,
  alert: PropTypes.bool,
};

export default TaskItem;
