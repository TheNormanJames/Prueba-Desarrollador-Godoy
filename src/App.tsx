import { useEffect, useState } from 'react';
import Views from './views/Views';
import MainNav from './components/MainNav';
import Loading from './components/Loading';
import { fetchDataProps } from './types/fetchDataProps';
import { fetchAllData } from './utils/api';
import HistoryPage from './views/historyPage';

function App() {
  const [isTabActive, setIsTabActive] = useState<boolean>(false);
  const [gifList, setGifList] = useState<string[]>([]);
  const [currentGifIndex, setCurrentGifIndex] = useState<number>(0);

  const [fetchData, setFetchData] = useState<fetchDataProps>({
    completeTextAPI: '',
    threeWords: '',
    gifURL: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchAllData();
        setFetchData({
          completeTextAPI: data.completeTextAPI,
          threeWords: data.threeWords,
          gifURL: data.gifList[0],
        });
        setGifList(data.gifList);
        setCurrentGifIndex(0);

        setDataToDatabase(data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  // function setDataToDataBase() {
  //   localStorage.setItem(
  //     'fetchDataCats',
  //     JSON.stringify(fetchData)
  //   );
  // }
  // setDataToDataBase();

  function setDataToDatabase(fetchData: fetchDataProps) {
    const previousDataJSON = localStorage.getItem('fetchDataCats');
    const previousData = previousDataJSON ? JSON.parse(previousDataJSON) : [];

    const newEntry = {
      ...fetchData,
      date: new Date().toISOString(),
    };

    const updatedData = [...previousData, newEntry];
    localStorage.setItem('fetchDataCats', JSON.stringify(updatedData));
  }

  return (
    <>
      <MainNav isTabActive={isTabActive} setIsTabActive={setIsTabActive} />
      <main className="container mx-auto flex flex-col items-center justify-center mt-10">
        {isTabActive ? (
          <HistoryPage />
        ) : isLoading ? (
          <Loading />
        ) : (
          <Views
            fetchData={fetchData}
            gifList={gifList}
            setGifIndex={(i) => {
              setCurrentGifIndex(i);
              setFetchData({ ...fetchData, gifURL: gifList[i] });
            }}
            currentGifIndex={currentGifIndex}
          />
        )}
      </main>
    </>
  );
}

export default App;
