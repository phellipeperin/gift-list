import { configureStore } from '@reduxjs/toolkit';

import feedbackReducer from './stores/feedbackStore';
import userReducer from './stores/userStore';

const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
    user: userReducer,
  },
});

export default store;
