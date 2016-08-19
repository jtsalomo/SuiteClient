/* eslint-disable react/no-multi-comp */
import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const ActionBar = () => {
  return (
    <ButtonGroup className="actionbar" justified>
      <Button href="#">ActionBar</Button>
      <Button href="#">goes</Button>
      <Button href="#">here...</Button>
    </ButtonGroup>
  );
};

export default ActionBar;
/* eslint-enable react/no-multi-comp */
