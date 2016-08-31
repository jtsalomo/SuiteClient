import React from 'react';
import { Grid, Col } from 'react-bootstrap';
import { AutoAffix } from 'react-overlays';

import CustomerProfile from '../widgets/CustomerProfile';
import ActionBar from '../widgets/ActionBar';
import Tasks from '../widgets/Tasks';
// data
import customerinfo from '../../data/customer-record-sample';

const CustomerRecord = () => {
  return(
    <Grid fluid className="customerrecord customerrecord__page">

      <AutoAffix viewportOffsetTop={0} affixClassName="customerrecord__head--fixed customerprofile--collapsed">
        <div className="customerrecord__head m-b-md">
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

      <Col sm={12} md={12} lg={12}>
        {/* Tasks */}
        <Tasks tasks={customerinfo.tasks} className="customerrecord__tasks m-b-md" />

        {/* Cards */}
        <div className="customerrecord__cards m-b-md"/>

        {/* Service/part */}
        <div className="customerrecord__ m-b-md"/>

      </Col>
    </Grid>
  );
};

export default CustomerRecord;
