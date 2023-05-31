import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json"

const initialLikes = tuits.map((tuit) => ({
  _id: tuit._id,
  liked: tuit.liked,
  likes: tuit.likes,
}));

const tuitLikesSlice = createSlice({
  name: "tuitLikes",
  initialState: initialLikes,
  reducers: {
    incrementLikes(state, action) {
      const { id } = action.payload;
      const tuit = state.find((t) => t._id === id);
      if (tuit) {
        tuit.likes += 1;
        tuit.liked = true;
      }
    },
    decrementLikes(state, action) {
      const { id } = action.payload;
      const tuit = state.find((t) => t._id === id);
      if (tuit) {
        tuit.likes -= 1;
        tuit.liked = false;
      }
    },
  },
});

export const { incrementLikes, decrementLikes } = tuitLikesSlice.actions;
export default tuitLikesSlice.reducer;
