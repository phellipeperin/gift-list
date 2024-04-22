import { createSlice } from '@reduxjs/toolkit';

import User from '../models/User';

const initialState: User = {
  id: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(_, action) {
      const { id, email, displayName, photoURL } = action.payload;
      return { id, email, displayName, photoURL };
    },
    clearUser() {
      return initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
