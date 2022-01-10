import React, { useEffect, useState } from "react";
interface itemApi {
  _items?: [];
}

interface itemData {
  buy_limit?: boolean;
  cost?: number;
  duplicate?: boolean;
  equipable?: boolean;
  equipable_by_player?: boolean;
  equipment?: boolean;
  examine?: string;
  highalch?: number;
  icon?: string;
  id?: string;
  incomplete?: boolean;
  last_updated?: string;
  linked_id_item?: null;
  linked_id_noted?: null;
  linked_id_placeholder?: number;
  lowalch?: number;
  members?: boolean;
  name?: string;
  noteable?: boolean;
  noted?: boolean;
  placeholder?: boolean;
  quest_item?: boolean;
  release_date?: string;
  stackable?: boolean;
  stacked?: boolean;
  tradeable?: boolean;
  tradeable_on_ge?: boolean;
  weapon?: boolean;
  weight?: number;
  wiki_name?: string;
  wiki_url?: string;
  _created?: string;
  _etag?: string;
  _id?: string;
  _links?: {};
  _updated?: string;
}

const OSRSItems = () => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const doCall = () =>
      fetch("https://api.osrsbox.com/items").then((res) => res.json());
    doCall().then(
      (res) => {
        setIsLoading(false);
        setResult(res._items);
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
      {result && (
        <>
          {result.map((item, it) => {
            return <div key={it}></div>;
          })}
        </>
      )}
    </>
  );
};

export default OSRSItems;
