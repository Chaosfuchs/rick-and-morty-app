import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(data);

  useEffect(() => {
    if (url) {
      setLoading(true);
      setError(null);
      fetch(url)
        .then(response => response.json())
        .then(json => {
          setData(json);
          setLoading(false);
        })
        .catch(error_ => {
          setError(error_);
          setLoading(false);
        });
    }
  }, [url]);

  return { data, loading, error };
}
