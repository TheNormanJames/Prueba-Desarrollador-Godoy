import { useEffect, useState } from 'react';
import Views from './assets/views/Views';
import MainNav from './assets/components/MainNav';

function App() {
  const [isTabActive, setIsTabActive] = useState<boolean>(false);

  const [threeWords, setThreeWords] = useState<string>('');
  const [gifURL, setGifURL] = useState<string>('');

  async function getFirstThreeWords(text: string): Promise<string> {
    return new Promise<string>((resolve) => {
      resolve(text.split(/\s+/).slice(0, 3).join(' '));
    });
  }

  useEffect(() => {
    async function fetchData() {
      const data = await fetch('https://catfact.ninja/fact');
      const json = await data.json();
      const palabra = await getFirstThreeWords(json.fact);
      setThreeWords(palabra);
      await fetchGif(palabra);
    }

    async function fetchGif(query: string) {
      const dataGif = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${
          import.meta.env.VITE_API_KEY
        }&limit=5`
      );
      const jsonGif = await dataGif.json();
      setGifURL(jsonGif.data[0]?.images?.original?.url ?? '');
    }

    fetchData();
  }, []);

  return (
    <>
      <MainNav isTabActive={isTabActive} setIsTabActive={setIsTabActive} />

      <main className="container mx-auto">
        <Views threeWords={threeWords} image={gifURL} />
      </main>
    </>
  );
}

export default App;
