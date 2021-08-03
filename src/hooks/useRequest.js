/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from 'react';
import axios from 'axios';

const axiosAPI = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

const useRequest = (options) => {
  const [requestData, setRequestData] = useState(null);
  const [requestError, setRequestError] = useState(null);
  useEffect(() => {
    axiosAPI(options)
      .then(res => setRequestData(res.data))
      .catch(err => setRequestError(err.message));
  }, [options]);

  return {
    requestData, requestError,
  };
};

export default useRequest;
