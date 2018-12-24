import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory();

export enum actionTypes {
  // FAILURE: 'FAILURE',
  DECREMENT = 'DECREMENT',
  INCREMENT = 'INCREMENT'
  // RESET: 'RESET',
  // LOAD_DATA: 'LOAD_DATA',
  // LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  // START_CLOCK: 'START_CLOCK',
  // TICK_CLOCK: 'TICK_CLOCK'
}

// export function failure (error) {
//   return {
//     type: actionTypes.FAILURE,
//     error
//   }
// }

// export function increment() {
//   return { type: actionTypes.INCREMENT };
// }

export const increment = actionCreator(actionTypes.INCREMENT);
export const decrement = actionCreator(actionTypes.DECREMENT);

// export function decrement() {
//   return { type: actionTypes.DECREMENT };
// }

// export function reset () {
//   return { type: actionTypes.RESET }
// }
//
// export function loadData () {
//   return { type: actionTypes.LOAD_DATA }
// }
//
// export function loadDataSuccess (data) {
//   return {
//     type: actionTypes.LOAD_DATA_SUCCESS,
//     data
//   }
// }
//
// export function startClock () {
//   return { type: actionTypes.START_CLOCK }
// }
//
// export function tickClock (isServer) {
//   return {
//     type: actionTypes.TICK_CLOCK,
//     light: !isServer,
//     ts: Date.now()
//   }
// }
