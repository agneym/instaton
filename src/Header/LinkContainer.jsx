import React from "react";
import { Link } from "react-router-dom";

function LinkContainer() {
  return (
    <div className="right-header">
      <a>
        <i className="icon ion-android-compass" />
      </a>
      <a>
        <i className="icon ion-ios-heart" />
      </a>
      <Link to="/profile">
        <i className="icon ion-android-person" />
      </Link>
    </div>
  );
}

export default LinkContainer;
