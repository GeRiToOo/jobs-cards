import React from 'react';
import './Card.scss';
import share from '../../../images/share.png';

const Card = ({ job }) => {
  const {
    title,
    location,
    salary,
    salaryTo,
    salaryCurrencyCode,
    liveDate,
    company,
  } = job;

  // How many days ago is posted
  const start = new Date(liveDate);
  const end = new Date();
  const difference = Math.round(
    (end.getTime() - start.getTime()) / (1000 * 3600 * 24)
  );

  // Initials
  const splitName = company.name.split(' ');
  const initialsArray = [];
  splitName.forEach((word) => initialsArray.push(word.charAt(0)));
  const initials = initialsArray.join('.');

  return (
    <div className="card">
      <div className="header">
        <div className="name-container">
          {company.logo ? (
            <img src={company.logo} alt="" />
          ) : (
            <div className="name-container">
              <h2>{initials}</h2>
            </div>
          )}
        </div>

        <span>new</span>
      </div>
      <div className="body">
        <h3>{title}</h3>
        <p>Nest - {location}</p>
        <p>
          {salaryCurrencyCode === 'USD' && '$'}
          {salary} - {salaryCurrencyCode === 'USD' && '$'}
          {salaryTo}
        </p>
      </div>
      <div className="footer">
        <p>Posted {difference} days ago</p>
        <button>
          <img src={share} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Card;
