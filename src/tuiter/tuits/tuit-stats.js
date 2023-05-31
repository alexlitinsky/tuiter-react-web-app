import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementLikes, decrementLikes } from "../reducers/tuit-likes-reducer";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  const { likes } = useSelector((state) => state.tuitLikes);

  const toggleLike = () => {
    if (likes.includes(tuit._id)) {
      dispatch(decrementLikes(tuit._id));
    } else {
      dispatch(incrementLikes(tuit._id));
    }
  };
  const heartIconClassName = likes.includes(tuit._id) ? "fas fa-heart red" : "fas fa-heart";

  return (
    <div>
      <span>
        <i className="fas fa-comment"></i> &nbsp; {tuit.replies} &nbsp;&nbsp;&nbsp;&nbsp;
        <i className="fas fa-reply"></i> &nbsp; {tuit.retuits} &nbsp;&nbsp;&nbsp;&nbsp;
        <i className={heartIconClassName} onClick={toggleLike}></i> &nbsp; {tuit.likes} &nbsp;&nbsp;&nbsp;&nbsp;
        <i className="fas fa-download"></i> &nbsp;&nbsp;&nbsp;&nbsp;
      </span>
    </div>
  );
};

export default TuitStats;
