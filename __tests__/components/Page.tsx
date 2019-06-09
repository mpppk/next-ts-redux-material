import Typography from '@material-ui/core/Typography/Typography';
import { shallow } from 'enzyme';
import * as React from 'react';
import AppBar from '../../components/AppBar';
import Counter from '../../components/Counter';
import Page from '../../components/Page';

describe('Page', () => {
  // tslint:disable-next-line no-empty
  const emptyButtonHandler = (_nc: number) => {};
  const wrapper = shallow(
    <Page
      title="test"
      count={0}
      onClickIncrementButton={emptyButtonHandler}
      onClickDecrementButton={emptyButtonHandler}
      onClickIncrementLaterButton={emptyButtonHandler}
    />
  );
  it('has 1 AppBar', async () => {
    expect(wrapper.find(AppBar)).toHaveLength(1);
  });
  it('has 1 Typography', async () => {
    expect(wrapper.find(Typography)).toHaveLength(1);
  });
  it('has 1 Counter', async () => {
    expect(wrapper.find(Counter)).toHaveLength(1);
  });
});
