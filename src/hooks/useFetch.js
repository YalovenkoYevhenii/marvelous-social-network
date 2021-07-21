import { useState, useEffect } from 'react';

const useFetch = (url, request) => {
  const [data1, setData1] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, {
      method: request,
    })
      .then((response) => response.json())
      .then((response) => setData1(response))
      .catch((errorResponse) => setError(errorResponse));
  }, [url, request]);

  return { data1, error };
};

export default useFetch;
