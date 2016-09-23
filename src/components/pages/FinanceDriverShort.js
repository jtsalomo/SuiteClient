import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import { setApplicantName } from '../../actions/applicant/applicantActions';

import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

const ROOT_ID = 'financeDriverShort';
const APPLICANT_FIRST_NAME = 'applicant.name.first';
const APPLICANT_MIDDLE_NAME = 'applicant.name.middle';
const APPLICANT_LAST_NAME = 'applicant.name.last';


const FieldGroup = ({ id, label, className, validation, ...props }) => {
  return (
    <FormGroup className={className} controlId={id} validationState={validation === null ? null : validation === "" ? "success" : "error"}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {validation && <HelpBlock>{validation}</HelpBlock>}
    </FormGroup>
  );
};

class FDShort extends React.Component {
  constructor(props) {
    super(props);
    this.getValue = this.getValue.bind(this);
    this.setValue = this.setValue.bind(this);
    this.getState = this.getState.bind(this);
    this.setState = this.setState.bind(this);
    this.validate = this.validate.bind(this);
    this.state = {};
  }

  createId(baseId, id, includeWithNoBaseId = true) {
    return (baseId && (baseId + '.' + id)) || (includeWithNoBaseId && id);
  }

  getValue(type) {
    return this.props[type];
  }

  setValue(type, value) {
    this.setState(type, true);
    switch(type) {
      case APPLICANT_FIRST_NAME:
        this.props.onFirstNameChange(value);
        break;
      case APPLICANT_MIDDLE_NAME:
        this.props.onMiddleNameChange(value);
        break;
      case APPLICANT_LAST_NAME:
        this.props.onLastNameChange(value);
        break;
    }
  }

  getState(type) {
    return this.state[type];
  }

  setState(type, value) {
    super.setState({ [type]: value });
  }

  validate(type) {
    switch(type) {
      case APPLICANT_FIRST_NAME:
      case APPLICANT_MIDDLE_NAME:
      case APPLICANT_LAST_NAME:
        return this.getState(type) === undefined ? null : this.getValue(type).length < 1 ? "Field is required" : "";
    }
  }

  render() {
    return (
      <div id={ROOT_ID} className='FinanceDriver FinanceDriverShort'>
        <form>
          <FieldGroup id={this.createId(ROOT_ID, APPLICANT_FIRST_NAME)} label='First Name' className='Name FirstName' type='text'
            value={this.getValue(APPLICANT_FIRST_NAME)} onChange={(e) => this.setValue(APPLICANT_FIRST_NAME, e.target.value)} validation={this.validate(APPLICANT_FIRST_NAME)} />
          <FieldGroup id={this.createId(ROOT_ID, APPLICANT_MIDDLE_NAME)} label='Middle Name' className='Name MiddleName' type='text'
            value={this.getValue(APPLICANT_MIDDLE_NAME)} onChange={(e) => this.setValue(APPLICANT_MIDDLE_NAME, e.target.value)} validation={this.validate(APPLICANT_MIDDLE_NAME)} />
          <FieldGroup id={this.createId(ROOT_ID, APPLICANT_LAST_NAME)} label='Last Name' className='Name LastName' type='text'
            value={this.getValue(APPLICANT_LAST_NAME)} onChange={(e) => this.setValue(APPLICANT_LAST_NAME, e.target.value)} validation={this.validate(APPLICANT_LAST_NAME)} />
        </form>
      </div>
    );
  }
}



FDShort.propTypes = {
  id: PropTypes.string,
  [APPLICANT_FIRST_NAME]: PropTypes.string,
  [APPLICANT_MIDDLE_NAME]: PropTypes.string,
  [APPLICANT_LAST_NAME]: PropTypes.string,
  onFirstNameChange: PropTypes.func,
  onMiddleNameChange: PropTypes.func,
  onLastNameChange: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    [APPLICANT_FIRST_NAME]: state.applicant.name.first,
    [APPLICANT_MIDDLE_NAME]: state.applicant.name.middle,
    [APPLICANT_LAST_NAME]: state.applicant.name.last,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFirstNameChange: (firstName) => {
      dispatch(setApplicantName({ first: firstName }));
    },
    onMiddleNameChange: (middleName) => {
      dispatch(setApplicantName({ middle: middleName }));
    },
    onLastNameChange: (lastName) => {
      dispatch(setApplicantName({ last: lastName }));
    }
  };
};

const FinanceDriverShort = connect(mapStateToProps, mapDispatchToProps)(FDShort);

export default FinanceDriverShort;
