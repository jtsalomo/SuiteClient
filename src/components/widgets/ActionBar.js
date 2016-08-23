/* eslint-disable react/no-multi-comp */
import React, {Component, PropTypes} from 'react';
import { EntypoDotsThreeVertical } from 'react-entypo';
import { ButtonToolbar, ButtonGroup, Button, Panel, DropdownButton, MenuItem, Modal } from 'react-bootstrap';

import { actionSelections } from '../widgets/ActionBarConfig';

class ActionBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentActionKey: 0,
      showActionPanel: false,
      showActionDialog: false,
    };
    this.openActionDialog = this.openActionDialog.bind(this);
  }

  doActionTabs(){
    const { actionTabs } = this.props;
    const self = this;

    const doTabs = actionTabs.map(function(v, key){
      const openActionPanel = self.openActionPanel.bind(self, key);
      return(
        <Button key={key} className="action-bar__button" onClick={openActionPanel}>
          {v.icon}
          <span className='action-bar__button-label hidden-xs'>{v.label}</span>
        </Button>
      );
    });
    return (
      <ButtonGroup>
        {doTabs}
      </ButtonGroup>
    );
  }

  /* Panel functions*/
  openActionPanel(key){
    const checkLastKey = (this.state.currentActionKey === key) ? !this.state.showActionPanel : true;
    this.setState({
      currentActionKey: key,
      showActionPanel: checkLastKey,
    });
  }

  doActionPanel(){
    const { actionTabs } = this.props;
    const actions = actionTabs[this.state.currentActionKey];
    const actionPanelComponent = actions.actionComponent;

    return(
      <div>
        {actions.label}
        {actionPanelComponent}
      </div>
    );
  }

  /* Dropdown function*/
  doActionDropdownMenu(){
    const { actionDropdowns } = this.props;
    const self = this;

    const doTabs = actionDropdowns.map(function(v, key){
      const openActionDialog = self.openActionDialog.bind(self, key);
      return(
        <MenuItem key={key} eventKey="key" onClick={openActionDialog}>
           {v.label}
        </MenuItem>
      );
    });

    return (
      <div className="action-bar__dropdown">
        <DropdownButton
          title={<EntypoDotsThreeVertical />}
          id="action-bar-nested-dropdown"
          noCaret={true}
          className="action-bar__button"
        >
          {doTabs}
        </DropdownButton>
      </div>
    );
  }

  /* Dialog function*/
  openActionDialog(key){
    this.setState({
      currentActionKey: key,
      showActionDialog: !this.state.showActionDialog,
    });
  }

  doActionDialog(){
    const { actionDropdowns } = this.props;
    const { showActionDialog, currentActionKey } = this.state;
    const actions = actionDropdowns[currentActionKey];
    const actionDialogComponent = actions.actionComponent;
    const actionDialogLabel = actions.label;
    const openActionDialog = this.openActionDialog.bind(this, currentActionKey);

    return (
      <div className="static-modal">
        <Modal show={showActionDialog} onHide={openActionDialog}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {actionDialogLabel}
            {actionDialogComponent}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={openActionDialog}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  render(){
    let actionTabs = this.doActionTabs();
    let doActionPanel = (this.state.showActionPanel) ? this.doActionPanel() : null;
    let doActionDropdownMenu = this.doActionDropdownMenu();
    let doActionDialog = this.doActionDialog();

    return (
      <div className="action-bar">
        <ButtonToolbar className="action-bar__btn-toolbar">
          {actionTabs}
          {doActionDropdownMenu}
          {doActionDialog}
        </ButtonToolbar>
        <Panel className="actions-panel" collapsible expanded={this.state.showActionPanel}>
          <div>
            {doActionPanel}
          </div>
        </Panel>
      </div>
    );
  }
}

ActionBar.propTypes = {
  actionTabs: PropTypes.array,
  actionDropdowns: PropTypes.array,
};

ActionBar.defaultProps = {
  actionTabs: actionSelections.actionTabs,
  actionDropdowns: actionSelections.actionDropdowns,
};

export default ActionBar;
