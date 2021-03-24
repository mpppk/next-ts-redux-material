import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import counter from './features/counter/counterSlice';

const isEnableDebugMode = (): boolean => {
  return (process.env.enableReduxWrapperDebugMode as any) as boolean;
};

const store = configureStore({
  reducer: { counter },
});

export const wrapper = createWrapper(() => store, {
  debug: isEnableDebugMode(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
