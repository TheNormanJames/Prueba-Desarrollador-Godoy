import { useEffect, useState } from 'react';

export default function HistoryPage() {
  const [localStorageDB, setLocalStorageDB] = useState<
    Array<{
      completeTextAPI: string;
      threeWords: string;
      gifURL: string;
      gifList?: string[];
      date: string;
    }>
  >([]);

  useEffect(() => {
    const historyDataJSON = localStorage.getItem('fetchDataCats') || '[]';
    setLocalStorageDB(JSON.parse(historyDataJSON));
  }, []);

  function deleteHistory() {
    localStorage.removeItem('fetchDataCats');
    setLocalStorageDB([]);
  }

  return (
    <div className="p-4 space-y-6 w-full">
      <h1 className="text-2xl font-bold text-center">Historial de búsquedas</h1>

      {localStorageDB.map((entry, index) => (
        <div
          key={index}
          className="w-full  border p-4 rounded-xl shadow-md bg-white space-y-2"
        >
          <p>
            <strong>Fecha:</strong> {new Date(entry.date).toLocaleString()}
          </p>
          <p>
            <strong>Frase completa:</strong> {entry.completeTextAPI}
          </p>
          <p>
            <strong>Tres palabras:</strong> {entry.threeWords}
          </p>
          <p className="w-full">
            <strong className="block">URL Gif:</strong>
            <span className="w-full block overflow-auto">{entry.gifURL}</span>
          </p>
          <div className=" max-w-20 flex justify-center items-center rounded-2xl overflow-hidden shadow-lg">
            <img
              src={entry.gifURL}
              alt="GIF relacionado "
              className="aspect-square object-cover w-full"
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={deleteHistory}
        className="bg-gray-800 text-white p-2 flex space-x-4 justify-center rounded-2xl cursor-pointer hover:bg-gray-700 transition duration-300 ease-in-out mt-6"
      >
        Borrar Historial
      </button>
    </div>
  );
}
