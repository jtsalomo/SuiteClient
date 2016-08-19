/* eslint-disable react/no-multi-comp */
import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const EnterpriseDealerNav = () => {
  return (
    <Navbar inverse className="customerrecord__enterprise m-b-0">
      <Nav>
        <NavItem href="#">Dealer 1</NavItem>
        <NavItem href="#">Dealer 2</NavItem>
        <NavItem href="#">Dealer 3</NavItem>
        <NavItem href="#">Dealer 4</NavItem>
      </Nav>
    </Navbar>
  );
};

export default EnterpriseDealerNav;
/* eslint-enable react/no-multi-comp */
