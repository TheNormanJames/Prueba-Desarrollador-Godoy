import { useEffect, useState } from 'react';
import Views from './views/Views';
import MainNav from './components/MainNav';
import Loading from './components/Loading';
import { fetchDataProps } from './types/fetchDataProps';

function App() {
  const [isTabActive, setIsTabActive] = useState<boolean>(false);

  const [fetchData, setFetchData] = useState<fetchDataProps>({
    completeTextAPI: '',
    threeWords: '',
    gifURL: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getFirstThreeWords(text: string): Promise<string> {
    return new Promise<string>((resolve) => {
      resolve(text.split(/\s+/).slice(0, 3).join(' '));
    });
  }

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const data = await fetch('https://catfact.ninja/fact');
      const json = await data.json();
      const palabra = await getFirstThreeWords(json.fact);
      setFetchData((prev) => ({
        ...prev,
        completeTextAPI: json.fact,
        threeWords: palabra,
      }));
      await fetchGif(palabra);
    }

    async function fetchGif(query: string) {
      const dataGif = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${
          import.meta.env.VITE_API_KEY
        }&limit=5`
      );
      const jsonGif = await dataGif.json();

      setFetchData((prev) => ({
        ...prev,
        gifURL: jsonGif.data[0]?.images?.original?.url ?? '',
      }));

      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      <MainNav isTabActive={isTabActive} setIsTabActive={setIsTabActive} />
      <main className="container mx-auto flex flex-col items-center justify-center mt-10">
        {isTabActive ? (
          'asdf'
        ) : isLoading ? (
          <Loading />
        ) : (
          <Views fetchData={fetchData} />
        )}
      </main>
    </>
  );
}

export default App;
