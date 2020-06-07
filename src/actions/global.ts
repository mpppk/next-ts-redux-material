import actionCreatorFactory from 'typescript-fsa';

const globalActionCreatorFactory = actionCreatorFactory('GLOBAL');

interface SignInRequest {
  email: string
  password: string
}

export const globalActionCreators = {
  clickSignInSubmitButton: globalActionCreatorFactory<SignInRequest>(
    'CLICK_SIGN_IN_SUBMIT_BUTTON'
  ),
};

export const globalAsyncActionCreators = {
  logout: globalActionCreatorFactory.async('LOGOUT')
};
