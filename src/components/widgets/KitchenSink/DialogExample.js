/* eslint-disable react/no-multi-comp */
import React, {PropTypes} from 'react';
import {Button, ButtonToolbar, Modal, OverlayTrigger, Popover, Tooltip} from 'react-bootstrap';

class DialogExample extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      smShow: false,
      mdShow: false,
      lgShow: false
    };
    this.closeSm = this.closeSm.bind(this);
    this.openSm = this.openSm.bind(this);
    this.closeMd = this.closeMd.bind(this);
    this.openMd = this.openMd.bind(this);
    this.closeLg = this.closeLg.bind(this);
    this.openLg = this.openLg.bind(this);
  }
  closeSm(){
    this.setState({ smShow: false });
  }
  openSm(){
    this.setState({ smShow: true });
  }
  closeMd(){
    this.setState({ mdShow: false });
  }
  openMd(){
    this.setState({ mdShow: true });
  }
  closeLg(){
    this.setState({ lgShow: false });
  }
  openLg(){
    this.setState({ lgShow: true });
  }

  render(){
    return (
      <div>
        <p>
          <OverlayTrigger trigger="click" placement="top" overlay={<Popover title="Popover" id="examplePopover">And here&apos;s some amazing content. It&apos;s very engaging. Right?</Popover>}>
            <Button bsStyle="default">Popover</Button>
          </OverlayTrigger>
        </p>

        <p>
          <OverlayTrigger placement="top" overlay={<Tooltip id="exampleTooltip">Tooltip on top</Tooltip>}>
            <Button bsStyle="default">Tooltip</Button>
          </OverlayTrigger>
        </p>

        <ButtonToolbar>
          <Button onClick={this.openSm}>Small Modal</Button>
          <Button onClick={this.openMd}>Default Modal</Button>
          <Button onClick={this.openLg}>Large Modal</Button>
        </ButtonToolbar>

        <SmallModal show={this.state.smShow} onHide={this.closeSm} />
        <DefaultModal show={this.state.mdShow} onHide={this.closeMd} />
        <LargeModal show={this.state.lgShow} onHide={this.closeLg} />
      </div>
    );
  }
}

const SmallModal = (props) =>
  <Modal {...props} bsSize="small">
    <Modal.Header closeButton>
      <Modal.Title>Small Modal Example</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Modal content goes here.</p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Cancel</Button>
      <Button onClick={props.onHide} bsStyle="primary">Confirm</Button>
    </Modal.Footer>
  </Modal>;

SmallModal.propTypes = {
  onHide: PropTypes.func.isRequired
};

const DefaultModal = (props) =>
  <Modal {...props}>
    <Modal.Header closeButton>
      <Modal.Title>Default Modal Example</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Modal content goes here.</p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Cancel</Button>
      <Button onClick={props.onHide} bsStyle="primary">Confirm</Button>
    </Modal.Footer>
  </Modal>;

DefaultModal.propTypes = {
  onHide: PropTypes.func.isRequired
};

const LargeModal = (props) =>
  <Modal {...props} bsSize="large">
    <Modal.Header closeButton>
      <Modal.Title>Large Modal Example</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Modal content goes here.</p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Cancel</Button>
      <Button onClick={props.onHide} bsStyle="primary">Confirm</Button>
    </Modal.Footer>
  </Modal>;

LargeModal.propTypes = {
  onHide: PropTypes.func.isRequired
};

export default DialogExample;
