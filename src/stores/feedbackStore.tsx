import { createSlice } from '@reduxjs/toolkit';

import FeedbackMessage, { MessageType } from '../models/FeedbackMessage'; 

const initialState: FeedbackMessage = {
  message: '',
  type: MessageType.INFO,
};

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    setSuccessMessage(_, action) {
      return {
        message: action.payload,
        type: MessageType.SUCCESS,
      };
    },
    setInfoMessage(_, action) {
      return {
        message: action.payload,
        type: MessageType.INFO,
      };
    },
    setWarningMessage(_, action) {
      return {
        message: action.payload,
        type: MessageType.WARNING,
      };
    },
    setErrorMessage(_, action) {
      return {
        message: action.payload,
        type: MessageType.ERROR,
      };
    },
    clearMessage() {
      return initialState;
    },
  },
});

export const {
  setSuccessMessage,
  setInfoMessage,
  setWarningMessage,
  setErrorMessage,
  clearMessage,
} = feedbackSlice.actions;
export default feedbackSlice.reducer;
