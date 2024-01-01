import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../types/userType';

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserr: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    clearUser: state => {
      state.user = null;
    },
  },
});

export const {setUserr, clearUser} = userSlice.actions;

export default userSlice.reducer;
