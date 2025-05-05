type MainNavProps = {
  isTabActive: boolean;
  setIsTabActive: (isTabActive: boolean) => void;
};

export default function MainNav({ isTabActive, setIsTabActive }: MainNavProps) {
  return (
    <nav className="w-full bg-gray-800 text-white p-4 flex space-x-4 justify-center">
      {[false, true].map((value, index) => (
        <button
          key={index}
          type="button"
          className={`p-3 rounded-2xl cursor-pointer ${
            isTabActive === value ? 'bg-amber-600' : ''
          }`}
          onClick={() => setIsTabActive(value)}
        >
          Pestaña {index + 1}
        </button>
      ))}
    </nav>
  );
}
