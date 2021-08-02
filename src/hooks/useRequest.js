/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_USERS_URL,
});
const useRequest = () => {
  const [requestData, setRequestData] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});
  console.log(options);
  useEffect(() => {
    api(options)
      .then((res) => {
        setRequestData(res.data);
        console.log(res);
      })
      .catch((err) => { setError(err.message); console.log(err); });
  }, [options]);

  return {
    requestData, error, setOptions, options,
  };
};

export default useRequest;
