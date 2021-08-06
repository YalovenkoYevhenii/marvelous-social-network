/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from 'react';
import axios from 'axios';

const axiosAPI = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

const useRequest = () => {
  const [requestData, setRequestData] = useState(null);
  const [requestError, setRequestError] = useState(null);
  const [options, setOptions] = useState(null);

  useEffect(() => {
    if (options) {
      axiosAPI(options)
        .then(res => setRequestData(res.data))
        .catch(err => setRequestError(err.message));
    }
  }, [options]);

  return { requestData, requestError, setOptions };
};

export default useRequest;
