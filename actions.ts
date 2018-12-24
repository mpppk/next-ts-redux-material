import actionCreatorFactory, { ActionCreator } from 'typescript-fsa';

export interface ICounterAmountPayload {
  amount: number;
}

const counterActionCreatorFactory = actionCreatorFactory('COUNTER');

type ClickActionName =
  | 'clickIncrementButton'
  | 'clickDecrementButton'
  | 'clickAsyncIncrementButton';

export type CounterActionCreators = Record<
  ClickActionName,
  ActionCreator<undefined>
> & {
  requestAmountChanging: ActionCreator<ICounterAmountPayload>;
};

export const counterActionCreators: CounterActionCreators = {
  clickAsyncIncrementButton: counterActionCreatorFactory<undefined>(
    'CLICK_ASYNC_INCREMENT_BUTTON'
  ),
  clickDecrementButton: counterActionCreatorFactory<undefined>(
    'CLICK_DECREMENT_BUTTON'
  ),
  clickIncrementButton: counterActionCreatorFactory<undefined>(
    'CLICK_INCREMENT_BUTTON'
  ),
  requestAmountChanging: counterActionCreatorFactory<ICounterAmountPayload>(
    'REQUEST_AMOUNT_CHANGING'
  )
};

export const counterAsyncActionCreators = {
  changeAmountAsync: counterActionCreatorFactory.async<
    ICounterAmountPayload,
    any,
    any
  >('CHANGE_AMOUNT_ASYNC')
};
