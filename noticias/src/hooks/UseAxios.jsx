import axios from 'axios';
import { useState } from 'react';

const UseAxios = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(error);
    }
  };
  return { data, error, fetchData };
};

export default UseAxios;
