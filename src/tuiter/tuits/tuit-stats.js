import React from "react";
import { useDispatch } from "react-redux";
import { likeTuit } from "../reducers/tuits-reducer";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  const likeToggle = (tuit) => {
    dispatch(likeTuit(tuit))
  }

  return (
    <div>
      <span>
        <i className="bi bi-chat-dots"></i> {tuit.replies}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;
        <i className="bi bi-arrow-repeat"></i> {tuit.retuits}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;
        <i className={`bi ${tuit.liked ? "bi-heart-fill text-danger" : "bi-heart"}`} onClick={() => likeToggle(tuit)} style={{ "cursor": "pointer" }}></i> {tuit.likes} &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;
        <i className="bi bi-download"></i>
      </span>
    </div>
  );
};

export default TuitStats;
