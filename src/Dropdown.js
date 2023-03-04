import { useState } from 'react';

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        type="button"
        className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-md font-medium text-gray-700 hover:bg-gray-50 focus:outline-none "
        onClick={handleClick}
      >
        {title}
        <svg 
        className={`${isOpen ? '-rotate-180' : 'rotate-0'} ml-2 h-5 w-5 transform`}
        fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
        </svg>
        
      </button>
      {isOpen && (
        <div className="bg-white shadow-md rounded-md p-4 mt-2">{children}</div>
      )}
    </div>
  );
}


 
export default Dropdown ;
