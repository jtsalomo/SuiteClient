/* eslint-disable react/no-multi-comp */
import React, {PropTypes} from 'react';
import { Panel, Media, Row, Col, Image, Button, ButtonToolbar, Modal } from 'react-bootstrap';
import { AutoAffix } from 'react-overlays';

// placeholder for ActionBar
import ActionBar from '../widgets/ActionBar';

/*
  Customer Profile component.
  Parameters:
    labels (required)
      - this determines the number of steps, and each item becomes the label of each corresponding step (in order)
      - minimum 3, max 5
    className (options)
      - additional classes to add to <ul class="tracker">
    activeStep (optional)
      - set which step should show active.  Each step to the left (smaller index) of the active item will automatically be set to "completed"
      - a value of '0' will set all to grey/'incomplete'
    id (optional)
      - set the id attribute of the <ul class="tracker">
*/

// const CustomerProfile = (props) => {
//   return (
class CustomerProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nameeditShow: false,
      memoeditShow: false,
      memoviewShow: false
    };
    this.openNameedit = this.openNameedit.bind(this);
    this.closeNameedit = this.closeNameedit.bind(this);
    this.openMemoedit = this.openMemoedit.bind(this);
    this.closeMemoedit = this.closeMemoedit.bind(this);
    this.openMemoview = this.openMemoview.bind(this);
    this.closeMemoview = this.closeMemoview.bind(this);
  }
  openNameedit(){
    this.setState({ nameeditShow: true });
  }
  closeNameedit(){
    this.setState({ nameeditShow: false });
  }
  openMemoedit(){
    this.setState({ memoeditShow: true });
  }
  closeMemoedit(){
    this.setState({ memoeditShow: false });
  }
  openMemoview(){
    this.setState({ memoviewShow: true });
  }
  closeMemoview(){
    this.setState({ memoviewShow: false });
  }

  render(){
    return (
      <AutoAffix viewportOffsetTop={0} affixClassName="customerprofile--fixed">
        <Panel className="customerprofile" footer={<ActionBar/>}>

          <Media className="customerprofile__customer">
            <Media.Left className="customerprofile__photo">
              <Image className="customerprofile__photo" src={this.props.photo} alt="CUSTOMERNAME"/>
            </Media.Left>
            <Media.Body>
              <Media.Heading className="customerprofile__heading">{this.props.nameFirst+' '+this.props.nameLast} <Button className="customerprofile__edit-link" bsStyle="link" onClick={this.openNameedit}>Edit</Button></Media.Heading>
              <Row>
                <Col lg={3} md={6} sm={6} xs={6} componentClass="ul" className="customerprofile__contactinfo">
                  <li>{this.props.phone}</li>
                  <li>{this.props.email}</li>
                  <li>{this.props.address1}</li>
                  { (this.props.address2 && this.props.address2 !== "") ?
                  <li>{this.props.address2}</li>
                  : null }
                  <li>{this.props.city+', '+this.props.state+' '+this.props.postal}</li>
                  <li><small>EBR: {(this.props.ebr)?'YES':'NO'} Express Consent: {(this.props.ebr_expressConsent)?'YES':'NO'}</small></li>
                </Col>
                <Col lg={9} md={6} sm={6} xs={6} className="customerprofile__memo">
                  <h6 className="customerprofile__memo-heading m-t-0">Customer Memo</h6>
                  <div className="customerprofile__memo-content">
                    {/* convert string to HTML? Store markup in data?
                        Suggest strings, then utility function to convert line breaks (\n) into paragraphs (or line breaks!).
                        Any other formatting issues? */}
                    <p>{this.props.memo}</p>
                  </div>
                  <ButtonToolbar>
                    <Button className="customerprofile__edit-link" bsStyle="link" onClick={this.openMemoview}>View</Button>
                    <Button className="customerprofile__edit-link" bsStyle="link" onClick={this.openMemoedit}>Edit</Button>
                  </ButtonToolbar>
                </Col>
              </Row>
            </Media.Body>
          </Media>

          <CustomerNameEditModal show={this.state.nameeditShow} onHide={this.closeNameedit} content={[this.props.nameFirst, this.props.nameLast]}/>
          <CustomerMemoEditModal show={this.state.memoeditShow} onHide={this.closeMemoedit} content={this.props.memo}/>
          <CustomerMemoViewModal show={this.state.memoviewShow} onHide={this.closeMemoview} content={this.props.memo}/>

        </Panel>
      </AutoAffix>
    );
  }
}

CustomerProfile.propTypes = {
  photo: PropTypes.string,
  nameFirst: PropTypes.string.isRequired,
  nameLast: PropTypes.string.isRequired,
  phone: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  email: PropTypes.string,
  address1: PropTypes.string,
  address2: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  postal: PropTypes.number,
  ebr: PropTypes.bool,
  ebr_expressConsent: PropTypes.bool,
  memo: PropTypes.string
};

// Modals

const CustomerNameEditModal = (props) =>
  <Modal {...props} bsSize="small">
    <Modal.Header closeButton>
      <Modal.Title>Edit Customer Name</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>[editor goes here]</p>
      <p>First Name: {props.content[0]}<br/>
        Last Name: {props.content[1]}</p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Cancel</Button>
      <Button onClick={props.onHide} bsStyle="primary">Confirm</Button>
    </Modal.Footer>
  </Modal>;

CustomerNameEditModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  content: PropTypes.array.isRequired
};

const CustomerMemoEditModal = (props) =>
  <Modal {...props} bsSize="small">
    <Modal.Header closeButton>
      <Modal.Title>Edit Customer Memo</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>[editor goes here]</p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Cancel</Button>
      <Button onClick={props.onHide} bsStyle="primary">Confirm</Button>
    </Modal.Footer>
  </Modal>;

CustomerMemoEditModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired
};

const CustomerMemoViewModal = (props) =>
  <Modal {...props} bsSize="small">
    <Modal.Header closeButton>
      <Modal.Title>View Customer Memo</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>{props.content}</p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Cancel</Button>
      <Button onClick={props.onHide} bsStyle="primary">Confirm</Button>
    </Modal.Footer>
  </Modal>;

CustomerMemoViewModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired
};


export default CustomerProfile;
/* eslint-enable react/no-multi-comp */
