import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';


const currentUser = {
  "userName": "NASA",
  "handle": "@nasa",
  "image": "nasa-logo.jpg",
};

const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
}

const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: { tuits: tuits },
  reducers: {
    deleteTuit(state, action) {
      const index = state.tuits
        .findIndex(tuit =>
          tuit._id === action.payload);
      state.tuits.splice(index, 1);
    },
    createTuit(state, action) {
      state.tuits.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    },
    likeTuit(state, action) {
      const tuit = state.tuits.find((tuits) => tuits._id == action.payload._id)
      tuit.liked = !tuit.liked
      if (tuit.liked) {
        tuit.likes += 1;
      } else {
        tuit.likes -= 1;
      }

    }
  }
});

export const { createTuit, deleteTuit, likeTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
