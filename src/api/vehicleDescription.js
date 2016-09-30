import baseAPI from './base';

class VehicleDescription extends baseAPI {
  getVehicle(vin) {
    return this.get('rest/suite/vehicle-description?accountId=6&vin=' + vin).then((val) => {
      if (val.status !== 200) {
        alert(val.statusText);
      } else if (val.data.errorMsg !== null) {
        alert(val.data.errorMsg);
      } else {
        console.debug(val.data);
      }
    }).catch((val) => {
      alert(val);
    });
  }
}

export default VehicleDescription;
