import React from "react";
import './Style.css'

const Alert = (props) => {
  return (
    <div>
      <div className="alert alert-warning alert-dismissible fade show d-flex justify-content-between" role="alert" >
        {props.message}
        <button
          type="button"
          className="close-btn-alert"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default Alert;
