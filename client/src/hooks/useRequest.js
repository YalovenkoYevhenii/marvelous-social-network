import { useState, useEffect } from 'react';
import axios from 'axios';

const axiosAPI = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_URL,
});

axiosAPI.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});
axiosAPI.interceptors.response.use(config => config, async (err) => {
  const originalRequest = err.config;
  if (err.response.status === 401 && err.config && !err.config.isRetry) {
    try {
      originalRequest.isRetry = true;
      const res = await axios.get(`${process.env.REACT_APP_URL}/auth/refresh`, { withCredentials: true });
      localStorage.setItem('token', res.data.accessToken);
      return axiosAPI.request(originalRequest);
    } catch (e) {
      return console.log(err);
    }
  }
  return console.log(err);
});

const useRequest = () => {
  const [requestData, setRequestData] = useState(null);
  const [requestError, setRequestError] = useState(null);
  const [options, setOptions] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancel = false;

    const fetchData = () => {
      setLoading(true);
      setRequestError(null);
      axiosAPI(options)
        .then((res) => {
          if (!cancel) setRequestData(res.data);
          if (!res.ok) throw new Error(res.data || 'Something went wrong');
        })
        .catch((err) => {
          if (!cancel) setRequestError(err.message);
        })
        .finally(() => {
          if (!cancel) setLoading(false);
        });
    };

    if (!cancel && options) fetchData();

    return () => {
      cancel = true;
    };
  }, [options]);

  return {
    requestData, requestError, setOptions, loading,
  };
};

export default useRequest;
