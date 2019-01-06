import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '@material-ui/core/Button/Button';
import { counterActionCreators, CounterActionCreators } from '../actions';
import Typography from '@material-ui/core/Typography/Typography';

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
        <Typography variant="h4" gutterBottom>
          Count: <span>{count}</span>
        </Typography>
        <Button
          onClick={this.props.clickIncrementButton}
          variant="contained"
          color="primary"
        >
          +1
        </Button>
        <Button
          onClick={this.props.clickDecrementButton}
          variant="contained"
          color="primary"
        >
          -1
        </Button>
        <Button
          onClick={this.props.clickAsyncIncrementButton}
          variant="contained"
          color="primary"
        >
          +1 later
        </Button>
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
