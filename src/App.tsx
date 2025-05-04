import { useState } from 'react';
import Views from './assets/views/Views';

function App() {
  const [isTabActive, setIsTabActive] = useState(false);
  return (
    <>
      <nav className="w-full bg-gray-800 text-white p-4">
        <ul className="flex space-x-4 justify-center">
          <li
            className={`${isTabActive ? '' : 'bg-amber-600'} p-3 rounded-2xl`}
          >
            Pestana 1
          </li>
          <li
            className={`${isTabActive ? 'bg-amber-600' : ''} p-3 rounded-2xl`}
          >
            Pestana 2
          </li>
        </ul>
      </nav>

      <main className="container mx-auto">
        <Views />
      </main>
    </>
  );
}

export default App;
