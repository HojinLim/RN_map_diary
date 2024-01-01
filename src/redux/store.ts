// src/redux/store.ts
import {configureStore} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    // 추가적인 리듀서들을 필요에 따라 여기에 추가
  },
});

export type RootState = ReturnType<typeof store.getState>;
