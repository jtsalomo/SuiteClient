import {APPLICANT_SET_FIRST_NAME} from './applicantActionTypes';

export const setApplicantFirstName = (firstName) => {
  return {
    type: APPLICANT_SET_FIRST_NAME,
    firstName: firstName
  };
};
