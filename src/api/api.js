import {LOAD_VEHICLE, SUBMIT_FINANCE_DRIVER_SHORT} from '../actions/actionTypes';
import VehicleDescription from './vehicleDescription';
import FinanceDriverShort from './financeDriverShort';

const api = store => next => action => {
  const result = next(action);

  if (action && action.type) {
    switch(action.type) {
      case SUBMIT_FINANCE_DRIVER_SHORT:
        new FinanceDriverShort().submitFinanceDriverShort(store.getState().applicant);
        break;
      case LOAD_VEHICLE:
        new VehicleDescription().getVehicle(store.getState().vehicle.vin);
        break;
    }
  }

  return result;
};

export default api;
