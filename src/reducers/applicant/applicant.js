import {APPLICANT_SET_FIRST_NAME} from '../../actions/applicant/applicantActionTypes';
import initialState from '../initialState';

const applicant = (state = initialState.applicant, action) => {
  switch (action.type) {
    case APPLICANT_SET_FIRST_NAME:
      return {
        name: {
          first: action.firstName
        }
      };
    default:
      return state;
  }
};

export default applicant;
