import { useEffect, useState } from "react";
export interface Root {
  _items: Item[];
  _links: Links2;
  _meta: Meta;
}

export interface Item {
  _id: string;
  id: string;
  name: string;
  last_updated: string;
  incomplete: boolean;
  members: boolean;
  tradeable: boolean;
  tradeable_on_ge: boolean;
  stackable: boolean;
  stacked: any;
  noted: boolean;
  noteable: boolean;
  linked_id_item?: number;
  linked_id_noted?: number;
  linked_id_placeholder?: number;
  placeholder: boolean;
  equipable: boolean;
  equipable_by_player: boolean;
  equipable_weapon: boolean;
  cost: number;
  lowalch?: number;
  highalch?: number;
  weight: number;
  buy_limit?: number;
  quest_item: boolean;
  release_date: string;
  duplicate: boolean;
  examine: string;
  icon: string;
  wiki_name: string;
  wiki_url: string;
  equipment: any;
  weapon: any;
  _created: string;
  _updated: string;
  _etag: string;
  _links: Links;
}

export interface Links {
  self: Self;
}

export interface Self {
  title: string;
  href: string;
}

export interface Links2 {
  parent: Parent;
  self: Self2;
  next: Next;
  last: Last;
}

export interface Parent {
  title: string;
  href: string;
}

export interface Self2 {
  title: string;
  href: string;
}

export interface Next {
  title: string;
  href: string;
}

export interface Last {
  title: string;
  href: string;
}

export interface Meta {
  page: number;
  max_results: number;
  total: number;
}

export default function useItemHook() {
  const [result, setResult] = useState<Root>();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const doCall = (itemQuery?: string | undefined) =>
    fetch(
      `https://api.osrsbox.com/items?where={ "name": "${itemQuery}", "duplicate": false }`
    )
      .then((res) => res.json())
      .then((result) => result as Root);

  useEffect(() => {
    doCall().then(
      (result) => {
        setIsLoading(false);
        setResult(result);
      },
      (e) => {
        setIsLoading(false);
        setError(e);
      }
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { doCall, result, error, isLoading };
}
