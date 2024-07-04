const Deck = ({ selectedDeck }) => {
  return (
    <div className="main-deck-container relative p-4">
      <div className="deck-view">
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
