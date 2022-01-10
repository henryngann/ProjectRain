import React, { useEffect, useState } from "react";

const OSRSItems = () => {
  const [result, setResult] = useState({});
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const doCall = () =>
      fetch("https://api.osrsbox.com/items").then((res) => res.json());
    doCall().then(
      (res) => {
        setIsLoading(false);
        setResult(res);
      },
      (e) => {
        setIsLoading(false);
        setError(e);
      }
    );
  }, []);
  console.log(result);
  return (
    <>
      {isLoading && <p>Loading data...</p>}
      {error && <p>An error occurred</p>}
      {result && <div>hi</div>}
    </>
  );
};

export default OSRSItems;
