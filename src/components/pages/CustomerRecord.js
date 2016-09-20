import React from 'react';
import { Grid, Col, Row, Clearfix } from 'react-bootstrap';
import { Affix } from 'react-overlays';

import CustomerProfile from '../widgets/CustomerProfile';
import ActionBar from '../widgets/ActionBar';
import Tasks from '../widgets/Tasks';
import Card from '../widgets/Card';

import DealerCard from '../widgets/DealerCard/DealerCard';
import AppointmentsCard from '../widgets/AppointmentsCard/AppointmentsCard';


import customerinfo from '../../data/customer-record-sample';
const cardtestdata = [
  {
    label: 'AdditionalAction 1',
    disabled: false,
    divider: false,
    header: false,
  },
  {
    label: 'AdditionalAction 2',
    disabled: false,
    divider: false,
    header: false,
  }
  ,
  {
    label: 'External Link Example',
    disabled: false,
    divider: false,
    header: false,
    href: 'http://google.com',
  }
];

const CustomerRecord = () => {
  return(
    <Grid className="customerrecord customerrecord__page">

      <Affix viewportOffsetTop={0} affixClassName="customerrecord__head--fixed customerprofile--collapsed">
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
      </Affix>

      <Col sm={12} md={12} lg={12}>
        {/* Tasks */}
        <Tasks tasks={customerinfo.tasks} className="customerrecord__tasks m-b-md" />

        {/* Cards */}
        <Row className="customerrecord__cards m-b-md">
          <Col lg={4} md={4} sm={4} xs={6}>
            <AppointmentsCard appointments={customerinfo.Appointments}/>
          </Col>

          <Col lg={4} md={4} sm={4} xs={6}>
           <DealerCard dealerlist={customerinfo.DealerTeam.salesperson} teamRole="salesperson"/>
          </Col>

          <Clearfix visibleXsBlock/>

          <Col lg={4} md={4} sm={4} xs={6}>
            <AppointmentsCard/>
          </Col>
        </Row>

        {/* Service/part */}
        <div className="customerrecord__ m-b-md"/>

      </Col>
    </Grid>
  );
};

export default CustomerRecord;
