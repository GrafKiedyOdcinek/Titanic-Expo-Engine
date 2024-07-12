const Deck = ({ selectedDeck, nextDeck, prevDeck }) => {
  return (
    <div className="main-deck-container relative p-4">
      <div className="deck-view relative">
        <button
          className="border rounded-full w-16 h-16 flex justify-center items-center text-center hover:bg-gray-200 hover:text-gray-800 transition-all bg-white absolute left-[5rem] z-20 ripple"
          onClick={prevDeck}
        >
          <i className="fa-solid fa-arrow-left text-black"></i>
        </button>

        <button
          className="border rounded-full w-16 h-16 flex justify-center items-center text-center hover:bg-gray-200 hover:text-gray-800 transition-all bg-white absolute right-[5rem] z-20 ripple"
          onClick={nextDeck}
        >
          <i className="fa-solid fa-arrow-right text-black"></i>
        </button>

        <img
          src={`/Engine/${selectedDeck}.gif`}
          alt={`${selectedDeck} plan`}
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Deck;
