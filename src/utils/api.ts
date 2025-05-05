// src/utils/api.ts
import { fetchDataProps } from '../types/fetchDataProps';

export async function getCatFact(): Promise<string> {
  const response = await fetch('https://catfact.ninja/fact');
  const json = await response.json();
  return json.fact;
}

export function getFirstThreeWords(text: string): string {
  return text.split(/\s+/).slice(0, 3).join(' ');
}

export async function getGifList(query: string): Promise<string[]> {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${
      import.meta.env.VITE_API_KEY
    }&limit=10`
  );
  const json = await response.json();
  return json.data.map((gif: any) => gif.images.original.url);
}

export async function fetchAllData(): Promise<
  fetchDataProps & { gifList: string[] }
> {
  const fact = await getCatFact();
  const threeWords = getFirstThreeWords(fact);
  const gifList = await getGifList(threeWords);

  return {
    completeTextAPI: fact,
    threeWords,
    gifURL: gifList[0] ?? '',
    gifList,
  };
}
