import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0, sum: 10 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addSum: (state) => {
      state.sum += state.sum;
    },
  },
});

const anotherSlice = createSlice({
  name: "another",
  initialState: { data: [] },
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
    },
  },
});
const rootReducer = {
  counter: counterSlice.reducer,
  another: anotherSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export const { increment, decrement, addSum } = counterSlice.actions;
export const { addData } = anotherSlice.actions;
export default store;
