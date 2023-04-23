import axios from 'axios';

import type { Degree } from './types';

const getDegrees = async () => {
  const url = `${import.meta.env.VITE_APP_API_URL}/degrees`;
  const response = await axios.get<Degree[]>(url);
  console.log(response);
  return response.data;
};

export default getDegrees;
