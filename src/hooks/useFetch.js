import { useState, useEffect } from 'react';

const useFetch = (url, request) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, {
      method: request,
    })
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((errorResponse) => setError(errorResponse));
  }, [url, request]);

  return { data, error };
};

export default useFetch;
