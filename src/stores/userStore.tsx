import { createSlice } from '@reduxjs/toolkit';

interface State {
  id: string;
  email: string;
}

const initialState: State = {
  id: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(_, action) {
      const { id, email } = action.payload;
      return {
        id,
        email,
      };
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;