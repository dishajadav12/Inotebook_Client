import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import './Style.css';

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3"  style={{width: "18rem"}}>
        <div className="card-body">
          <div className="del-edit-btn d-flex align-items-center">
              <h5 className="card-title">{note.title}</h5>
              <FontAwesomeIcon icon={faPenToSquare} className="edit mx-2" />
              <FontAwesomeIcon icon={faTrashCan} className="delete" />
          </div>
          <h6 className="card-subtitle mb-2 text-body-secondary">{note.date}</h6>
          <p className="card-text">
            {note.description}
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
