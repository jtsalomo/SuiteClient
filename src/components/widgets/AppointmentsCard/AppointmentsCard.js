import React, {Component, PropTypes } from 'react';
import { EntypoPhone, EntypoEmail } from 'react-entypo';

import Card from '../Card';
import AppointmentsPage from './AppointmentsPage';
// import styles from './dealer.scss';

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

const actions = [
  { label: 'Add Appointments', active: '', disabled: false, header: false, href: 'http://google.com', onClick: null, onSelect: null },
  { label: "Confirm", active: '', disabled: true, header: false, href: 'http://google.com', onClick: null, onSelect: null },
  { label: "Complete", active: '', disabled: false, header: false, href: 'http://google.com', onClick: null, onSelect: null },
  { divider: true },
  { label: "Edit", active: '', disabled: false, header: false, href: 'http://google.com', onClick: null, onSelect: null },
  { label: "Mark as Missed", active: '', disabled: false, header: false, href: 'http://google.com', onClick: null, onSelect: null },
  { divider: true },
  { label: "Cancel", active: '', disabled: false, header: false, href: 'http://google.com', onClick: null, onSelect: null }
];

class AppointmentsCard extends Component {
  constructor(props) {
    super(props);
  }

  getPrimaryAppointment(appointment){
    const appointmentStatusClass = statusClass[appointment.status];
    const appointmentTypeIcon = appointmentIcon[appointment.type];
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

  render() {
    const {
      appointments,
      appointmentsActions,
      emptyText
    } = this.props;
    const appointmentsCount = this.props.appointments.length;
    const headerCounter = (appointmentsCount <= 0 ) ? "" : "(" + appointmentsCount + ")";
    const cardContent = (appointmentsCount <= 0 ) ? emptyText : this.getPrimaryAppointment(appointments[0]);

    return (
      <span>
        <Card header={"Appointments " + headerCounter}
            onClick={this.toggleAppointmentsModal}
            className="appointmentscard"
            actionDropdown={appointmentsActions}
        >
          {cardContent}
        </Card>

        <AppointmentsPage />
      </span>
    );
  }
}

AppointmentsCard.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  appointments: PropTypes.array,
  appointmentsActions: PropTypes.array,
  emptyText: PropTypes.string
};

AppointmentsCard.defaultProps = {
  appointments: [],
  appointmentsActions: actions,
  emptyText: "Add an appointment"
};

export default AppointmentsCard;
