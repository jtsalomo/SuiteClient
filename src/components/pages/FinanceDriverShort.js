import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import { setApplicantFirstName } from '../../actions/applicant/applicantActions';

import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

const FieldGroup = ({ id, label, className, validation, help, ...props }) => {
  return (
    <FormGroup className={className} controlId={id} validationState={validation}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
};

class FDShort extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
  }

  createId(id, includeWithNoBaseId = true) {
    return (this.props && this.props.id && (this.props.id + '.' + id)) || (includeWithNoBaseId && id);
  }

  getValidationState(stateId) {
    /*if (this.state[stateId].length === 10) {
      return 'success';
    }*/
  }

  onChange(e, stateId) {
    const state = {};
    if (stateId === 'firstName') {
      this.props.onFirstNameChange(e.target.value);
    } else {
      state[stateId] = e.target.value;
      this.setState(
        state
      );
    }
  }

  render() {
    return (
      <div id='FinanceDriverShort' className='FinanceDriver FinanceDriverShort'>
        <form>
          <FieldGroup id={this.createId('FinanceDriverShort.Name.First')} label='First Name' className='Name FirstName' type='text' help='Your First Name, dumbo!'
            value={this.props.applicant.name.first} onChange={(e) => this.onChange(e, 'firstName')} validation={this.getValidationState('firstName')} />
          <FieldGroup id={this.createId('FinanceDriverShort.Name.Middle')} label='Middle Name' className='Name MiddleName' type='text'
            value={this.props.applicant.name.first} onChange={(e) => this.onChange(e, 'middleName')} validation={this.getValidationState('middleName')} />
          <FieldGroup id={this.createId('FinanceDriverShort.Name.Last')} label='Last Name' className='Name LastName' type='text'
            value={this.props.applicant.name.first} onChange={(e) => this.onChange(e, 'lastName')} validation={this.getValidationState('lastName')} />
        </form>
      </div>
    );
  }
}



FDShort.propTypes = {
  id: PropTypes.string,
  applicant: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string
    })
  }),
  onFirstNameChange: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    applicant: state.applicant,
    firstName: state.applicant.name.first
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFirstNameChange: (firstName) => {
      dispatch(setApplicantFirstName(firstName));
    }
  };
};

const FinanceDriverShort = connect(mapStateToProps, mapDispatchToProps)(FDShort);

export default FinanceDriverShort;
