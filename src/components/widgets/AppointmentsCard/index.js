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
  constructor(props) {
    super(props);
    this.state = {
      appointmentsModal: false
    };
  }

  toggleAppointmentsModal = () => {
    this.setState({appointmentsModal: !this.state.appointmentsModal});
  };

  render() {
    return (
      <Card header="Appointments" onClick={this.toggleAppointmentsModal} className="appointmentscard">
        many appointments.
        such busy.
        so work.

        <AppointmentsPage
          show={this.state.appointmentsModal}
          onHide={this.toggleAppointmentsModal}
          backdrop={false}
          autoFocus
        />
      </Card>
    );
  }
}
AppointmentCard.propTypes = {};

const AppointmentsPage = (props) => {
  const {
    data,
    ...other
  } = props;
  return (
    <Modal dialogClassName="modal-full" className="appointmentscard__fullpage" {...other}>
      <Modal.Header closeButton>
        <Modal.Title className="display-4">Kyla Gonzalez</Modal.Title>
      </Modal.Header>
      <Modal.Body className="container">
        <div className="appointmentsPage__content">
          {data}
        </div>
      </Modal.Body>
    </Modal>
  );
};
AppointmentsPage.propTypes = {
  data: PropTypes.object
};

export default AppointmentCard;
/* eslint-enable react/no-multi-comp */
