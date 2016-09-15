import React, {PropTypes,Component} from 'react';
import Card from '../Card/index';
import {Modal,ModalBody,ModalHeader,ModalTitle,ModalFooter,Button} from 'react-bootstrap';

class DealerCard extends Component {
  constructor(props) {
    super(props);
    this.state={
      showModal:false,
    }
  }

  render() {
    let {dealerlist} = this.props;
    let dealerTeamCount = 0;
    let teamdefinedList= [];
    let dealerModelList= [];

    for(let i = 0 ; i< dealerlist.length; i++) {
      teamdefinedList = dealerlist.map((type, index)=> {
        if (type.assignment !== undefined) {
          dealerTeamCount = +i;
       if(index < 3)  {
            return (
              <span key={index} className="dealercard">
            <div className="dealercard__role">{type.role}</div>
                <div>{type.assignment}</div>
            </span>
            );
          }
        }
      });

    }

    return (
      <span>
        <Card header={"Dealer Team "+ "("+(dealerTeamCount)+")"} onMouseDown={() => this.setState({ showModal: true})}>
        {teamdefinedList}
        </Card>
    <Modal
   show={this.state.showModal}
   onHide={() => this.setState({ showModal: false})}
   container={this}>
            <ModalHeader closeButton>
              <ModalTitle>Dealer Team</ModalTitle>
              </ModalHeader>
      <ModalBody>

      </ModalBody>
      <ModalFooter>
            <Button onClick={() => this.setState({ showModal: false})}>Cancle</Button>
            <Button bsStyle="primary">Assign</Button>
      </ModalFooter>

          </Modal>
      </span>

    );
  }
}

DealerCard.propTypes = {
  dealerlist: PropTypes.array,
  teamRole: PropTypes.string,
};

export default DealerCard;
