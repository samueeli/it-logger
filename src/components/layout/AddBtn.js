import React from 'react';

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a href="#add-log-modal" className="btn-floating btn-large blue darken-2 modal-trigger">
        <span className="large material-icons">add</span>
      </a>
      <ul>
        <li>
          <a href="#tech-list-modal" className="btn-floating green modal-trigger">
            <span className="material-icons">person</span>
          </a>
        </li>
        <li>
          <a href="#add-tech-modal" className="btn-floating red modal-trigger">
            <span className="material-icons">person_add</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
