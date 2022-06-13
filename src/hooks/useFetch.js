import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let res = await fetch(url);
        console.log("res", res);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        let json = await res.json();
        setData(json);
        setLoading(false);
        setError(null);
      } catch (err) {
        setError("Error fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
