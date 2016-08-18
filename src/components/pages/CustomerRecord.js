import React from 'react';
import { Grid, Col } from 'react-bootstrap';
import CustomerProfile from '../widgets/CustomerProfile';
import EnterpriseDealerNav from '../widgets/EnterpriseDealerNav';

import customerinfo from '../../data/customer-record-sample';

const CustomerRecord = () => {
  return(
    <Grid fluid className="customerrecord customerrecord__page">
      <Col sm={12} md={12} lg={12}>

        {/* <EnterpriseDealerNav/> */}

        <CustomerProfile
          photo={customerinfo.photo}
          nameFirst={customerinfo.name.first}
          nameLast={customerinfo.name.last}
          phone={customerinfo.phone}
          email={customerinfo.email}
          address1={customerinfo.address.street}
          address2=""
          city={customerinfo.address.city}
          state={customerinfo.address.state}
          postal={customerinfo.address.postal}
          ebr={customerinfo.ebr.ebr}
          ebr_expressConsent={customerinfo.ebr.expressConsent}
          memo={customerinfo.memo}
        />

        {/* Tasks */}

        {/* Cards */}

        {/* Service/part */}

      </Col>
    </Grid>
  );
};

export default CustomerRecord;
