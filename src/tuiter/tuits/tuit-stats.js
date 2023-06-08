import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span>
        <i className="bi bi-chat-dots"></i> {tuit.replies}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i className="bi bi-arrow-repeat"></i> {tuit.retuits}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i className={`bi ${tuit.liked ? "bi-heart-fill text-danger" : "bi-heart"}`} onClick={() => dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))} style={{ "cursor": "pointer" }}></i> {tuit.likes}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i className={`bi ${tuit.disliked ? "bi-hand-thumbs-down-fill text-dark" : "bi-hand-thumbs-down"}`} onClick={() => dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1 }))} style={{ "cursor": "pointer" }}></i> {tuit.dislikes}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="d-none d-md-inline d-lg-inline d-xl-inline d-xxl-inline"> <i className="bi bi-download"></i> </span>
      </span>
    </div>
  );
};

export default TuitStats;
