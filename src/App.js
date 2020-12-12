import React, { useEffect, useState } from 'react';
import CardsGrid from './components/cards/CardsGrid';
import { getJobs } from './API';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getJobs().then((fetchedJobs) => {
      setJobs([...fetchedJobs.results]);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <CardsGrid isLoading={isLoading} jobs={jobs} />
    </>
  );
};

export default App;
