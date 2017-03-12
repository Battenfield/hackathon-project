import React, { Component } from 'react';
import { connect } from 'react-redux';
import { savePreferences, getPreferences, getMatches } from '../store/actions/firebase/firebaseActions';
import Match from './Match';
import SignUpAvailability from './signup/SignUpAvailability';
import PickRestaurant from './match/PickRestaurant';
import Button from './button/Button';


class Investor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'match',
    };
    this.handleMeetClick = this.handleMeetClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.moveToPickPage= this.moveToPickPage.bind(this);
  }

  componentDidMount() {
    this.props.getMatches(this.props.auth);
  }

  handleMeetClick() {
    this.setState({
      page: 'availability',
    });
  }

  handleBackClick() {
    this.setState({
      page: 'match',
    });
  }

  moveToPickPage() {
    this.setState({
      page: 'pick',
    });
  }

  render() {
    const matches = this.props.matches.list;

    // [
    //   {
    //     role: 'Product Owner',
    //     range: ['<100k'],
    //     round: ['Seed'],
    //     industry: ['Sass', 'Healthcare'],
    //     product: { Title: 'Hello', Description: 'We are Legion' },
    //   },
    //   {
    //     role: 'Product Owner',
    //     range: ['100k-300k'],
    //     round: ['Seed'],
    //     industry: ['Sass', 'FinTech'],
    //     product: { Title: 'Hello2', Description: 'We are Legion' },
    //   },
    //   {
    //     role: 'Product Owner',
    //     range: ['<100k'],
    //     round: ['Series A'],
    //     industry: ['Sass', 'Consumer'],
    //     product: { Title: 'Hello3', Description: 'We are Legion' },
    //   },
    // ];
    return (
      <div>
        <h1> Investor Container </h1>
        <div>
          {this.state.page === 'match' ?
            matches.length ?
              matches.map(match => (
                <Match
                  range={Object.keys(match.range)[0]}
                  round={Object.keys(match.round)[0]}
                  industry={Object.keys(match.industry)}
                  title={match.product.Title}
                  description={match.product.Description}
                  clickHandler={this.handleMeetClick}
                />),
              ) : <div>No matches found</div> :
            this.state.page === 'pick' ?
              <PickRestaurant />
            : <div>
              <SignUpAvailability handleClick={this.moveToPickPage} />
              <Button label="Back" clickHandler={this.handleBackClick} />
            </div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, matches }) => ({
  auth,
  matches,
});

export default connect(mapStateToProps, { getPreferences, getMatches })(Investor);
