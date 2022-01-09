import React, { useEffect, useState } from "react";

const OSRSItems = () => {
  const [result, setResult] = useState("");
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const doCall = () =>
      fetch("https://api.osrsbox.com/items").then((res) => res.text());
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

  return (
    <>
      {isLoading && <p>Loading data...</p>}
      {error && <p>An error occurred</p>}
      {result && <div>{result}</div>}
    </>
  );
};

export default OSRSItems;
