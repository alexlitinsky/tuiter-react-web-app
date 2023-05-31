import React from "react";
import { useDispatch } from "react-redux";
import TuitStats from "./tuit-stats";
import { deleteTuit } from "../reducers/tuits-reducer";
const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-auto">
          <img width={50} className="float-end rounded-circle" src={`/images/${tuit.image}`} alt="Displays a tuit from associated JSON file" />
        </div>
        <div className="col-10">
          <span> <span className="fw-bold"> {tuit.userName} </span>
            <i className="bi bi-patch-check-fill text-primary"></i> &nbsp;{tuit.handle} · 2h
            <i className="bi bi-x-lg float-end" style={{ "cursor": "pointer" }}
              onClick={() => deleteTuitHandler(tuit._id)}></i>
          </span>
          <div> {tuit.tuit} </div>
          <TuitStats tuit={tuit} />
        </div>
      </div>
    </li>
  );
};
export default TuitItem;
