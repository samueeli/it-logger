import React from 'react';
import PropTypes from 'prop-types';

const TechItem = ({ tech }) => {
  return (
    <li className="collection-item ">
      <div>
        {tech.firstName} {tech.LastName}
        <a href="#!" className="secondary-content">
          <span className="material-icons grey-text">delete</span>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;
