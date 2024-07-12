import { useState, useEffect, useMemo } from "react";
import "./style/index.css";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Typography,
} from "@material-tailwind/react";

import deckDataEN from "./Data/galerieEN.json";
import deckDataFR from "./Data/galerieFR.json";
import Deck from "./Components/Deck/Deck";
import Ornement from "./Components/Ornement/Ornement";
import FullScreenButton from "./Components/Fullscreen";
import OrnementLeft from "./Components/Ornement/OrnementLeft";
import OrnementRight from "./Components/Ornement/OrnementRight";

const translations = {
  EN: {
    subTitle: "TITANIC BLUESCREEN LAYOUT",
  },
  FR: {
    subTitle: "TITANIC PLAN DE BLUESCREEN",
  },
};

const App = () => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "EN"
  );
  const [selectedDeckIndex, setSelectedDeckIndex] = useState(0);

  const data = useMemo(
    () => (language === "FR" ? deckDataFR : deckDataEN),
    [language]
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const nextDeck = () => {
    setSelectedDeckIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevDeck = () => {
    setSelectedDeckIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="p-4 relative">
      <OrnementLeft />
      <OrnementRight />
      <div className="flex justify-center">
        <header className="flex sm:flex-row justify-center items-center gap-4 w-[65%]">
          <div className="grade flex flex-col gap-1 justify-center w-full text-4xl items-center">
            <h1 className="benchnine-bold">{data[selectedDeckIndex].name}</h1>
            <p className="font-brygada">{translations[language].subTitle}</p>
          </div>
          <div className="language flex gap-6">
            <Popover placement="bottom-end">
              <PopoverHandler>
                <button>
                  <div className="fr border rounded-full bg-white w-[60px] h-[60px] flex items-center justify-center">
                    <p className="text-black">{language}</p>
                  </div>
                </button>
              </PopoverHandler>
              <PopoverContent className="w-72 pb-0">
                {["FR", "EN"].map((lang) => (
                  <div
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className="mb-4 flex items-center gap-4 border-b border-blue-gray-50 pb-4 cursor-pointer"
                  >
                    <div
                      className={`fr border rounded-full bg-[#0d1625] w-[30px] h-[30px] flex items-center justify-center`}
                    >
                      <p className="text-white">{lang}</p>
                    </div>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        {lang === "FR" ? "Français" : "English"}
                      </Typography>
                    </div>
                  </div>
                ))}
              </PopoverContent>
            </Popover>
          </div>
        </header>
      </div>
      <div className="flex justify-center">
        <div className="separator border mt-6 w-[80%]"></div>
      </div>
      <main className="p-10">
        <Deck
          selectedDeck={data[selectedDeckIndex].name}
          nextDeck={nextDeck}
          prevDeck={prevDeck}
        />
        <div className="engin-option">
          <div className="deck-selector flex justify-evenly flex-wrap gap-4">
            {data.map((deck, index) => (
              <button
                key={deck.name}
                onClick={() => setSelectedDeckIndex(index)}
                className="bg-white text-black p-3 border rounded-full w-50 focus:outline-none focus:border-transparent min-w-[200px] ripple"
              >
                {deck.name}
              </button>
            ))}
          </div>
        </div>
      </main>
      <footer>
        <Ornement />
        <FullScreenButton />
      </footer>
    </div>
  );
};

export default App;
