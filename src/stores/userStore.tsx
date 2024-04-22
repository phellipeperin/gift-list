import { createSlice } from '@reduxjs/toolkit';

interface State {
  id: string;
}

const initialState: State = {
  id: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(_, action) {
      const { id } = action.payload;
      return { id };
    },
    clearUser() {
      return initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;