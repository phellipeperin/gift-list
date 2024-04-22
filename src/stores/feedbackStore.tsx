import { createSlice } from '@reduxjs/toolkit';

enum MessageType {
  SUCCESS = 'SUCCESS',
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
}

interface State {
  message: string;
  type: MessageType;
}

const initialState: State = {
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
    clear() {
      return initialState;
    },
  },
});

export const {
  setSuccessMessage,
  setInfoMessage,
  setWarningMessage,
  setErrorMessage,
  clear,
} = feedbackSlice.actions;
export default feedbackSlice.reducer;
