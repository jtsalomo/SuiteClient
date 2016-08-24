/**
 * The ActionBar class is used for . . .
 * @class ActionBar
 */

/* eslint-disable react/no-multi-comp */
import React, {Component, PropTypes} from 'react';
import { EntypoDotsThreeVertical } from 'react-entypo';
import { Nav, NavItem, ButtonToolbar, Button, Panel, DropdownButton, MenuItem, Modal } from 'react-bootstrap';

import { actionSelections } from '../widgets/ActionBarConfig';

class ActionBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentActionKey: 0,
      showActionPanel: false,
      showActionDialog: false,
    };
    this.openActionPanel = this.openActionPanel.bind(this);
    this.openActionDialog = this.openActionDialog.bind(this);
  }

  /* Action Tabs function - cycles through actionSelections.actionTabs from config file for tabs*/
  doActionTabs(){
    const { actionTabs } = this.props;
    const { currentActionKey, showActionPanel } = this.state;
    const activeKey = (showActionPanel) ? currentActionKey : null;

    const doTabs = actionTabs.map(function(v, key){
      const responsiveClass = v.responsive;
      return(
        <NavItem eventKey={key} key={key} className={'action-bar__button ' + responsiveClass.button} >
          <span className={'action-bar__button-icon ' + responsiveClass.icon}>{v.icon}</span>
          <span className={'action-bar__button-label ' + responsiveClass.label}>{v.label}</span>
        </NavItem>
      );
    });
    return (
      <div className="action-bar__action-tabs">
        <Nav bsStyle="tabs" activeKey={activeKey} onSelect={this.openActionPanel}>
          {doTabs}
        </Nav>
      </div>
    );
  }

  /* Action Panel functions - 'open' changes state when ActionTab is clicked, 'do' displays the correct panel*/
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

  /* Dropdown function - cycles through actionSelections.actionDropdown from config file for dropdown selection*/
  doActionDropdownMenu(){
    const { actionDropdowns } = this.props;
    const self = this;

    const doDropdownSelections = actionDropdowns.map(function(v, key){
      const openActionDialog = (v.actionMethod === 'modal') ? self.openActionDialog.bind(self, key) : null;
      const actionLink = (v.actionMethod === 'link' && v.actionLink !== null) ? v.actionLink : null;

      const responsiveStyle = (v.responsive) ? 'action-bar__dropdown-overflow-selection ' + v.responsive.button : null;
      return(
        <MenuItem
          key={key} eventKey="key"
          className={responsiveStyle}
          onClick={openActionDialog}
          href={actionLink} target="_blank"
        >
          {v.label}
        </MenuItem>
      );
    });

    return (
      <div className="action-bar__dropdown pull-right">
        <DropdownButton
          title={<EntypoDotsThreeVertical />}
          id="action-bar-nested-dropdown"
          noCaret={true}
          className="action-bar__dropdown-button"
        >
            {doDropdownSelections}
        </DropdownButton>
      </div>
    );
  }

  /* Dialog functions - 'open' changes state when dropdownAction is clicked, 'do' displays the dialog and it's correct info*/
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
        {doActionDialog}
        <ButtonToolbar className="action-bar__btn-toolbar">
          {actionTabs}
          {doActionDropdownMenu}
        </ButtonToolbar>
        <Panel className="action-bar__panel" collapsible expanded={this.state.showActionPanel}>
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
