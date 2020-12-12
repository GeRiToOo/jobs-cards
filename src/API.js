const API_ENDPOINT = 'https://webassets.job.com/jobs.json';

export const getJobs = () =>
  fetch(`${API_ENDPOINT}`).then((response) => response.json());
