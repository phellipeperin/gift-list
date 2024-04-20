import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: '',
    email: '',
  },
  reducers: {
    setUser(state, action) {
      const { id, email } = action.payload;
      state.id = id;
      state.email = email;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;