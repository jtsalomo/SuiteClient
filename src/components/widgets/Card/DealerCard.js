import React, {PropTypes,Component} from 'react';
import Card from './index';

class DealerCard extends Component {
  constructor(props) {
    super(props);
  }

  createDealerTeam(){
     return(
      <span key = {key}>


       </span>
    );
  }

  render() {
    let {dealerlist} = this.props;
    let dealerTeamCount = 0;
    let teamdefinedList= [];

    for(let i = 0 ; i< dealerlist.length; i++) {

      if (dealerlist[i] !== undefined) {
        dealerTeamCount = +i;
      const teamList = this.createDealerTeam(

      );
        teamdefinedList.push(teamList);
      }
    }

    return (
      <span>
        <Card header={"Dealer Team "+ "("+(dealerTeamCount)+")"}/>
        {teamdefinedList}
      </span>
    );
  }
}

DealerCard.propTypes = {
  dealerlist: PropTypes.array,
};

export default DealerCard;
