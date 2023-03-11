const Btn = ({ onClick, text }) => {
    return (
      <button
        className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        onClick={onClick}
      > {text}
      </button>
    );
  };
  
  export default Btn;
  