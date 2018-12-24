import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory();

enum actionTypes {
  DECREMENT = 'DECREMENT',
  INCREMENT = 'INCREMENT'
}

export const increment = actionCreator(actionTypes.INCREMENT);
export const decrement = actionCreator(actionTypes.DECREMENT);
