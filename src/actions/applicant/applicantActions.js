import {APPLICANT_SET_NAME, APPLICANT_SET_CONTACT, APPLICANT_SET_ADDRESS} from './applicantActionTypes';

export const setApplicantName = (name) => {
  return {
    type: APPLICANT_SET_NAME,
    name
  };
};

export const setApplicantContact = (contact) => {
  return {
    type: APPLICANT_SET_CONTACT,
    contact
  };
};

export const setApplicantAddress = (address) => {
  return {
    type: APPLICANT_SET_ADDRESS,
    address
  };
};
