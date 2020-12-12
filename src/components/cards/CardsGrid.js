import React from 'react';
import Card from './Card/Card';
import './CardsGrid.scss';

const CardsGrid = ({ isLoading, jobs }) => {
  return (
    <div className="cardsGrid">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        jobs.map((job) => <Card key={job.id} job={job} />)
      )}
    </div>
  );
};

export default CardsGrid;
