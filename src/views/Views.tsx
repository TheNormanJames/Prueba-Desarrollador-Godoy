import { fetchDataProps } from '../types/fetchDataProps';

type ViewsProps = {
  fetchData: fetchDataProps;
};
export default function Views({ fetchData }: ViewsProps) {
  const { gifURL, completeTextAPI } = fetchData;

  console.log('fetchData', fetchData);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Get Data</h1>
      <div className="grid grid-cols-2 items-center justify-center gap-4 mt-4">
        <img src={gifURL} alt="" />
        <p className="text-center">Words: {completeTextAPI}</p>
      </div>
    </div>
  );
}
