import axios from "axios";
import { useEffect, useState } from "react";

export async function primitiveFetch<T>(url: string) {
  const response = await fetch(url);
  const data: T = await response.json();

  return data;
}

export async function axiosFetch<T>(url: string) {
  const response = await axios.get(url);
  const data: T = await response.data;

  return data;
}

export default function useFetchData<T>(
  url: string,
  fetchFn: (url: string) => Promise<T | void>
) {
  const [data, setData] = useState<T | null>(null);

  const doFetch = async () => {
    const dt = await fetchFn(url);

    dt && setData(dt);
  };

  useEffect(() => {
    doFetch();
  }, []);

  return { data };
}
