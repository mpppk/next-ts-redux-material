import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const sleep = async (ms: number) => await new Promise((r) => setTimeout(r, ms));
export const incrementLater = createAsyncThunk(
  'incrementLater',
  async (_thunkAPI) => {
    await sleep(1000);
    return 1;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementLater.fulfilled, (state) => {
      state.value += 1;
    });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
