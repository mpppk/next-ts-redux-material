import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { counterActionCreators, CounterActionCreators } from '../actions';

interface IStateProps {
  count: number;
}

type ICounterProps = IStateProps & CounterActionCreators;

class Counter extends Component<ICounterProps, any> {
  constructor(props) {
    super(props);
    this.handleClickAsyncIncrementButton = this.handleClickAsyncIncrementButton.bind(
      this
    );
  }
  private handleClickAsyncIncrementButton() {
    this.props.clickAsyncIncrementButton();
  }
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
        <button onClick={this.props.clickIncrementButton}>+1</button>
        <button onClick={this.props.clickDecrementButton}>-1</button>
        <button onClick={this.props.clickAsyncIncrementButton}>+1 later</button>
      </div>
    );
  }
}

const mapStateToProps = ({ count }): IStateProps => ({ count });
const mapDispatchToProps = (dispatch): CounterActionCreators => {
  return {
    ...bindActionCreators({ ...counterActionCreators }, dispatch) // FIXME
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
