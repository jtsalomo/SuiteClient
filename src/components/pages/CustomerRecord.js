import React from 'react';
import { Grid, Col } from 'react-bootstrap';
import { AutoAffix } from 'react-overlays';

import CustomerProfile from '../widgets/CustomerProfile';
import ActionBar from '../widgets/ActionBar'; // placeholder for ActionBar

// data
import customerinfo from '../../data/customer-record-sample';

const CustomerRecord = () => {
  return(
    <Grid fluid className="customerrecord customerrecord__page">
      <Col sm={12} md={12} lg={12}>

        <AutoAffix viewportOffsetTop={0} affixClassName="customerrecord__head--fixed customerprofile--collapsed">
          <div className="customerrecord__head">
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
            <ActionBar/>
          </div>
        </AutoAffix>

        {/* Tasks */}

        {/* Cards */}

        {/* Service/part */}

      </Col>
    </Grid>
  );
};

export default CustomerRecord;
