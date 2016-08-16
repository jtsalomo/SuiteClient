import React from 'react';

import { Pagination } from 'react-bootstrap';
import EntypoChevronThinLeft from 'react-entypo/lib/entypo/ChevronThinLeft';
import EntypoChevronThinRight from 'react-entypo/lib/entypo/ChevronThinRight';

class GriddleCustomPager extends React.Component{
  constructor(props){
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      activePage: 1
    };
  }

  handleSelect(eventKey) {
    const maxPage = this.props.maxPage;
    const page = eventKey;

    if(page > maxPage || !page)
      return;
    this.props.setPage(page-1);
  }

  getStyles(){
    const styles = {
      containerStyle:{
        textAlign: 'center',
      },
      iconStyles:{
        fill: 'currentColor',
        verticalAlign: 'middle'
      }
    };
    return styles;
  }

  render(){
    const styles = this.getStyles();
    const maxPage = this.props.maxPage;

    if (maxPage < 2) { return <span />; }

    return (
      <div style={styles.containerStyle} className="griddle__pagination-container">
        <Pagination
          items={maxPage}
          prev={<EntypoChevronThinLeft style={styles.iconStyles}/>}
          next={<EntypoChevronThinRight style={styles.iconStyles}/>}
          maxButtons={Math.min(this.props.maxButtons, maxPage)}
          activePage={this.props.currentPage + 1}
          onSelect={this.handleSelect}
        />
      </div>
    );
  }
}

GriddleCustomPager.propTypes = {
  currentPage  : React.PropTypes.number,
  maxPage      : React.PropTypes.number,
  maxButtons   : React.PropTypes.number,
  nextText     : React.PropTypes.string,
  previousText : React.PropTypes.string,
  setPage      : React.PropTypes.func
};

GriddleCustomPager.defaultProps = {
  currentPage  : 0,
  maxPage      : 0,
  maxButtons   : 10,
  nextText     : "Next",
  previousText : "Previous"
};

export default GriddleCustomPager;
