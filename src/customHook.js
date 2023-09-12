import React, { useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      setData(res);
      setLoading(false);
    });

  return [data, loading];
}
