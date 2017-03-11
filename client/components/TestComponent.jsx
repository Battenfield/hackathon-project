import React from 'react';
import { connect } from 'react-redux';
import { updateMyProp } from '../store/actions/demoAction';

export class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.submitName = this.submitName.bind(this);
    this.updateNameState = this.updateNameState.bind(this);
  }

  updateNameState(e) {
    this.setState({
      text: e.target.value,
    });
  }

  submitName() {
    this.props.updateMyProp(this.state.text);
  }

  render() {
    return (
      <div>
        this is a test component {this.props.myProp}
        <input type="text" value={this.state.text} onChange={this.updateNameState} ></input>
        <button onClick={this.submitName}>Submit</button>
      </div>
    );
  }
}

export default connect(
  ({ demoReducer }) => {
    return ({
      myProp: demoReducer.myProp
    });
  },
  {
    updateMyProp
  }
)(Test);
