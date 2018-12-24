import actionCreatorFactory, { ActionCreator } from 'typescript-fsa';
const actionCreator = actionCreatorFactory();

export interface ICounterAmountPayload {
  amount: number;
}

const counterActionCreatorFactory = actionCreatorFactory('COUNTER');

enum actionTypes {
  DECREMENT = 'DECREMENT',
  INCREMENT = 'INCREMENT'
}

export const increment = actionCreator(actionTypes.INCREMENT);
export const decrement = actionCreator(actionTypes.DECREMENT);

export interface ICounterActionCreators {
  clickAsyncIncrementButton: ActionCreator<undefined>;
  requestAmountChanging: ActionCreator<ICounterAmountPayload>;
}

export const counterActionCreators: ICounterActionCreators = {
  clickAsyncIncrementButton: counterActionCreatorFactory<undefined>(
    'CLICK_ASYNC_INCREMENT_BUTTON'
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
