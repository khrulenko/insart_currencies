import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ServerError = boolean;

const serverErrorSlice = createSlice({
  name: 'serverError',
  initialState: false,
  reducers: {
    setServerError(state: ServerError, action: PayloadAction<ServerError>) {
      state = action.payload;

      return state;
    },
  },
});

export const { setServerError } = serverErrorSlice.actions;
export default serverErrorSlice.reducer;
