import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { decrement, increment } from '../actions';

interface ICounterProps {
  count: number;
  increment: any;
  decrement: any;
}

class Counter extends Component<ICounterProps, any> {
  render() {
    const { count } = this.props;
    return (
      <div>
        {/*<style jsx>{`*/}
        {/*div {*/}
        {/*padding: 0 0 20px 0;*/}
        {/*}*/}
        {/*`}</style>*/}
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={this.props.increment}>+1</button>
        <button onClick={this.props.decrement}>-1</button>
      </div>
    );
  }
}

const mapStateToProps = ({ count }) => ({ count });
const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ increment, decrement }, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
