import * as React from 'react';
import Counter from '../../src/components/Counter';
import { fireEvent, render, screen, } from "@testing-library/react";

test('loads and displays greeting', async () => {
  const onClickIncrement = jest.fn();
  const onClickDecrement = jest.fn();
  const onClickIncrementLater = jest.fn();
  render(
    <Counter
      count={1}
      onClickIncrementButton={onClickIncrement}
      onClickDecrementButton={onClickDecrement}
      onClickIncrementLaterButton={onClickIncrementLater}
    />
  )
  await screen.findByText('1');
  fireEvent.click(screen.getByText('+1'))
  expect(onClickIncrement).toHaveBeenCalledTimes(1);
  fireEvent.click(screen.getByText('-1'))
  expect(onClickDecrement).toHaveBeenCalledTimes(1);
  fireEvent.click(screen.getByText('+1 later'))
  expect(onClickIncrementLater).toHaveBeenCalledTimes(1);
})
