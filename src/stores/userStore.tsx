import { createSlice } from '@reduxjs/toolkit';

interface State {
  id: string;
  email?: string;
  displayName?: string;
  photoURL?: string;
}

const initialState: State = {
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
