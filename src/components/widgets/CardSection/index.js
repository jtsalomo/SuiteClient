/* eslint-disable react/no-multi-comp */
import React, {PropTypes} from 'react';
//import styles from './styles.scss';

/*
  CardSection component.
  Parameters:
    children
      -
    className
      -
    id (optional)
      - set the id attribute of the <ul class="tracker">
*/

const CardSection = (props) => {
  return (
    <div {...props}>
      {props.children}
    </div>
  );
};
CardSection.propTypes = {
};

export default CardSection;
/* eslint-enable react/no-multi-comp */
