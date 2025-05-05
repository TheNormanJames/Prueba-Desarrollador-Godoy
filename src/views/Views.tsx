import { fetchDataProps } from '../types/fetchDataProps';

type ViewsProps = {
  fetchData: fetchDataProps;
  gifList: string[];
  currentGifIndex: number;
  setGifIndex: (index: number) => void;
};
export default function Views({
  fetchData,
  gifList,
  currentGifIndex,
  setGifIndex,
}: ViewsProps) {
  const { gifURL, completeTextAPI } = fetchData;

  function changeGif() {
    const nextIndex = (currentGifIndex + 1) % gifList.length;
    setGifIndex(nextIndex);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Get Data</h1>
      <div className="grid grid-cols-2 items-center justify-center gap-4 mt-8">
        {gifURL ? (
          <div className="flex justify-center items-center rounded-2xl overflow-hidden shadow-lg">
            <img
              src={gifURL}
              alt="gif"
              className="aspect-square object-cover w-full"
            />
          </div>
        ) : (
          <p className="text-red-500">No se encontró ningún GIF</p>
        )}
        <p className="text-center">Words: {completeTextAPI}</p>
      </div>
      <div className="flex justify-center items-center mt-4">
        <button
          type="button"
          className="bg-gray-800 text-white p-2 flex space-x-4 justify-center rounded-2xl cursor-pointer hover:bg-gray-700 transition duration-300 ease-in-out mt-6"
          onClick={changeGif}
        >
          Recargar Gif
        </button>
      </div>
    </div>
  );
}
