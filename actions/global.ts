import actionCreatorFactory from 'typescript-fsa';

const globalActionCreatorFactory = actionCreatorFactory('GLOBAL');

export const globalAsyncActionCreators = {
  logout: globalActionCreatorFactory.async('LOGOUT')
};
