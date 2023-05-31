import React from "react";
import { useDispatch } from "react-redux";
import TuitStats from "./tuit-stats";
const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
  // const deleteTuitHandler = (id) => {
  //   dispatch(deleteTuit(id));
  // }
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-auto">
          <img width={50} className="float-end rounded-circle" src={`/images/${tuit.image}`} />
        </div>
        <div className="col-10">
          <span> <span className="fw-bold"> {tuit.userName} </span>
            <span class="fa-stack" style="display: inline-block; vertical-align: middle; color: blue;">
              <i class="fas fa-circle fa-stack-1x"></i>
              <i class="fas fa-check fa-stack-1x fa-inverse fa-sm"></i>
            </span>
            {tuit.handle} · 2h
          </span>
          <div> {tuit.tuit} </div>
          <TuitStats tuit={tuit} />
        </div>
      </div>
    </li>
  );
};
export default TuitItem;
