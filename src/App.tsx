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

  function getFirstThreeWords(text: string): string {
    return text.split(/\s+/).slice(0, 3).join(' ');
  }

  useEffect(() => {
    async function fetchAllData() {
      setIsLoading(true);
      try {
        const data = await fetch('https://catfact.ninja/fact');
        const json = await data.json();
        const palabra = getFirstThreeWords(json.fact);

        const dataGif = await fetch(
          `https://api.giphy.com/v1/gifs/search?q=${palabra}&api_key=${
            import.meta.env.VITE_API_KEY
          }&limit=5`
        );
        const jsonGif = await dataGif.json();

        setFetchData({
          completeTextAPI: json.fact,
          threeWords: palabra,
          gifURL: jsonGif.data[0]?.images?.original?.url ?? '',
        });
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAllData();
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
