// import { useEffect } from "react";

const Deck = ({ selectedDeck }) => {
  // const [details, setDetails] = useState([]);
  // const [firstClass, setFirstClass] = useState("");
  // const [secondClass, setSecondClass] = useState("");
  // const [thirdClass, setThirdClass] = useState("");
  // const [room, setRoom] = useState("");

  // useEffect(() => {
  //   // const deckDetails = data?.find((deck) => deck.name === selectedDeck);
  //   // setDetails(deckDetails ? deckDetails.details : []);
  //   // setFirstClass(deckDetails ? deckDetails.firstClass : "");
  //   // setSecondClass(deckDetails ? deckDetails.secondClass : "");
  //   // setThirdClass(deckDetails ? deckDetails.thirdClass : "");
  //   // setRoom(deckDetails ? deckDetails.room : "");
  // }, [selectedDeck, data]);

  // const divideDetailsIntoColumns = (details, columns) => {
  //   const itemsPerColumn = Math.ceil(details.length / columns);
  //   return Array.from({ length: columns }, (v, i) =>
  //     details.slice(i * itemsPerColumn, i * itemsPerColumn + itemsPerColumn)
  //   );
  // };

  // const detailColumns = divideDetailsIntoColumns(details, 3);

  return (
    <div className="main-deck-container relative p-4">
      <div className="deck-view">
        <img
          src={`/Engine/${selectedDeck}.gif`}
          alt={`${selectedDeck} plan`}
          className="w-full object-contain"
        />
      </div>
      {/* <div className="deck-details mt-10 flex flex-col md:flex-row justify-between p-4 gap-10">
        <div className="detail-item md:w-[40%] sm:w-full">
          <h3 className="text-lg font-semibold mb-2">{selectedDeck}</h3>
          <div className="class-room flex flex-col gap-4">
            <p className="text-xs">{firstClass}</p>
            <p className="text-xs">{room}</p>
            <p className="text-xs">{secondClass}</p>
            <p className="text-xs">{thirdClass}</p>
          </div>
        </div>
        <div className="details-deck-space md:w-[60%] h-full border border-white p-4 sm:w-full">
          <div className="detail-room flex flex-wrap justify-between w-full">
            {detailColumns.map((column, columnIndex) => (
              <div
                className="detail-column w-full md:w-[28%] mb-4"
                key={columnIndex}
              >
                {column.map((detail, index) => (
                  <p className="text-xs" key={index}>
                    {detail.title} - <span>{detail.description}</span>
                  </p>
                ))}
              </div>
            ))}
            <div className="comodities text-xs w-full md:w-auto">
              <p className="p-1">DUTCH DOOR</p>
              <p className="p-1">LAVATORY SINK</p>
              <p className="p-1">SINK</p>
              <p className="p-1">UPHOLSTERY</p>
              <p className="p-1">URINALS</p>
              <p className="p-1">WALL SEAT TEAKS</p>
              <p className="p-1">WALL SEAT UPHOLSTERED</p>
              <p className="p-1">WASH BASIN</p>
              <p className="p-1">WATER CLOSED</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Deck;
