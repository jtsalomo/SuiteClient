/* eslint-disable react/no-multi-comp */
import React, {Component, PropTypes, createElement} from 'react';
import {Modal} from 'react-bootstrap';
import Card from '../Card';
import { EntypoPhone, EntypoEmail } from 'react-entypo';

// import styles from './styles.scss';

/*
 AppointmentsCard component.
 Requires: React, React-Bootstrap, React-Entypo

 Parameters:
 [prop] :: [prop type]
 - description
*/

const appointmentIcon = {
  "Meeting": <EntypoPhone/>,
  "Phone Call": <EntypoPhone/>,
  "Other": <EntypoPhone/>,
  "Fax": <EntypoPhone/>,
  "Letter": <EntypoPhone/>,
  "Email": <EntypoEmail/>
};

const statusClass = {
  "Not Confirmed": "",
  "Confirmed": "success",
  "Missed": "warning",
  "Past Due": "danger",
  "Complete": ""
};

class AppointmentCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointmentsModal: false
    };
    //this.toggleAppointmentsModal = this.toggleAppointmentsModal.bind(this);
  }

  toggleAppointmentsModal(){
    this.setState({appointmentsModal: !this.state.appointmentsModal});
  }

  getPrimaryAppointment(appointment){

    let appointmentStatusClass = statusClass[appointment.status];
    let appointmentTypeIcon = appointmentIcon[appointment.type];

    return(
      <div>
        <h5 className="appointmentcard__time">{appointment.time}</h5>
        <div >
          <span className="appointmentcard__icon">{appointmentTypeIcon}</span>
          <span className={"appointmentcard__status " + appointmentStatusClass}>{appointment.status}</span>
        </div>
        <div className="appointmentcard__vehicle">
          <div className="appointmentcard__vehicle--makeyear">{appointment.vehicleYear} {appointment.vehicleMake}</div>
          <div className="appointmentcard__vehicle--model">{appointment.vehicleModel}</div>
        </div>
      </div>
      );
  }

  doCard(){
    const {
      appointments,
      emptyText
    } = this.props;
    const appointmentsCount = this.props.appointments.length;

    const headerCounter = (appointmentsCount <= 0 ) ? "" : "(" + appointmentsCount + ")";
    const cardContent = (appointmentsCount <= 0 ) ? emptyText : this.getPrimaryAppointment(appointments[0]);

    return(
      <Card header={"Appointments " + headerCounter} onClick={this.toggleAppointmentsModal} className="appointmentscard">
        {cardContent}
      </Card>
      );
  }

  doModal(){
    const {
      appointments,
      ...other
    } = this.props;

    return(
      <Modal dialogClassName="modal-full" className="appointmentscard__fullpage" {...other}>
        <Modal.Header closeButton>
          <Modal.Title className="display-4">Kyla Gonzalez</Modal.Title>
        </Modal.Header>
        <Modal.Body className="container">
          <div className="appointmentsPage__content">
            {appointments}
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  render() {
    return (
      <span>
        {this.doCard()}
        {this.doModal()}
      </span>
    );
  }
}
AppointmentCard.propTypes = {
  id: PropTypes.number.isRequired,
  appointments: PropTypes.object,
  emptyText: PropTypes.string
};
AppointmentCard.defaultProps = {
  appointments: [],
  emptyText: "Add an appointment"
};

export default AppointmentCard;
/* eslint-enable react/no-multi-comp */
