import { createSlice } from '@reduxjs/toolkit';

interface State {
  message: string;
  severity: string;  
}

const initialState: State = {
  message: '',
  severity: '',
};

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    clear(state) {
      state.message = initialState.message;
      state.severity = initialState.severity;
    },
  },
});

export const { clear } = feedbackSlice.actions;
export default feedbackSlice.reducer;