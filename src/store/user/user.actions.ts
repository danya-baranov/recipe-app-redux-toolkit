import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../types/user.types";

const fetchById = (userId:number):Promise<IUser> =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          id: 1,
          name: "Danya",
        }),
      2000
    )
  );

export const getUserById = createAsyncThunk<IUser,number>(
  "users/by-id",
  async (userId, thunkApi) => {
    try {
      const response = await fetchById(userId);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
