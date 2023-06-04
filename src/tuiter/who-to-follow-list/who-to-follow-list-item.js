import React from "react";
const WhoToFollowListItem = (
  {
    who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa-logo.jpg' }
  }
) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-3">
          <img className="rounded-circle" height={46} width={46} src={`/images/${who.avatarIcon}`} alt="who to follow img" />
        </div>
        <div className="col-6 col-lg-4 col-xl-5 col-xxl-6">
          <div className="fw-bold">{who.userName}</div>
          <div>@{who.handle}</div>
        </div>
        <div className="col-3 col-lg-5 col-xl-4 col-xxl-3">
          <button className="btn btn-primary rounded-pill float-end">Follow</button>
        </div>
      </div>
    </li>
  );
};
export default WhoToFollowListItem;
