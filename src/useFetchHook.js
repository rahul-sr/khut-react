import {
  useState,
  useEffect,
} from "react";

function useFetchHook(url) {
  const [loading, setLoading] =
    useState(false);
  const [response, setResponse] =
    useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setResponse(res.results);
        setLoading(false);
      });
  }, []);

  return [response, loading];
}

export default useFetchHook;
