import {APPLICANT_SET_NAME, APPLICANT_SET_CONTACT, APPLICANT_SET_ADDRESS} from '../../actions/applicant/applicantActionTypes';
import initialState from '../initialState';

const applicant = (state = initialState.applicant, action) => {
  switch (action.type) {
    case APPLICANT_SET_NAME:
      return Object.assign({}, state, {
        name: {
          first: (action && action.name && action.name.first) || (state && state.name && state.name.first),
          middle: (action && action.name && action.name.middle) || (state && state.name && state.name.middle),
          last: (action && action.name && action.name.last) || (state && state.name && state.name.last),
          suffix: (action && action.name && action.name.suffix) || (state && state.name && state.name.suffix)
        }
      });
    case APPLICANT_SET_CONTACT:
      return Object.assign({}, state, {
        contact: {
          phone: (action && action.contact && action.contact.phone) || (state && state.contact && state.contact.phone),
          email: (action && action.contact && action.contact.phone) || (state && state.contact && state.contact.phone)
        }
      });
    case APPLICANT_SET_ADDRESS:
      return Object.assign({}, state, {
        address: {
          line1: (action && action.contact && action.contact.line1) || (state && state.contact && state.contact.line1),
          line2: (action && action.contact && action.contact.line2) || (state && state.contact && state.contact.line2),
          city: (action && action.contact && action.contact.city) || (state && state.contact && state.contact.city),
          state: (action && action.contact && action.contact.state) || (state && state.contact && state.contact.state),
          zip: (action && action.contact && action.contact.zip) || (state && state.contact && state.contact.zip)
        }
      });
    default:
      return state;
  }
};

export default applicant;
