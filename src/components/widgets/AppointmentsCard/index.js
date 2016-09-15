/* eslint-disable react/no-multi-comp */
import React, {PropTypes} from 'react';
import {Modal} from 'react-bootstrap';
import Card from '../Card';
// import styles from './styles.scss';

/*
  AppointmentsCard component.
  Requires: React, React-Bootstrap, React-Entypo

  Parameters:
    [prop] :: [prop type]
      - description


 */

class AppointmentCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      appointmentsModal: false
    }
  }

  toggleAppointmentsModal = () => {
    this.setState({ appointmentsModal: !this.state.appointmentsModal });
  }

  render() {

    return (
      <Card header="Appointments" onClick={this.toggleAppointmentsModal}>
        many appointments.
        such busy.
        so work.

        <AppointmentsPage show={this.state.appointmentsModal} onHide={this.toggleAppointmentsModal} keyboard backdrop={false} autoFocus/>
      </Card>
    );
  }
};
AppointmentCard.propTypes = {
};

const AppointmentsPage = (props) => {
  const {
      data,
      ...other
    } = props;
  return(
    <Modal {...other} className="modal-full appointments__fullpage">
      <Modal.Header closeButton>
        <Modal.Title>Kyla Gonzalez</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="appointmentsPage__content">

        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AppointmentCard;
/* eslint-enable react/no-multi-comp */
