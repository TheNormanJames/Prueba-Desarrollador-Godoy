type MainNavProps = {
  isTabActive: boolean;
  setIsTabActive: (isTabActive: boolean) => void;
};

export default function MainNav({ isTabActive, setIsTabActive }: MainNavProps) {
  return (
    <nav className="w-full bg-gray-800 text-white p-4 flex space-x-4 justify-center">
      <button
        type="button"
        className={`${
          isTabActive ? '' : 'bg-amber-600'
        } p-3 rounded-2xl cursor-pointer`}
        onClick={() => setIsTabActive(false)}
      >
        Pestana 1
      </button>
      <button
        type="button"
        className={`${
          isTabActive ? 'bg-amber-600' : ''
        } p-3 rounded-2xl cursor-pointer`}
        onClick={() => setIsTabActive(true)}
      >
        Pestana 2
      </button>
    </nav>
  );
}
