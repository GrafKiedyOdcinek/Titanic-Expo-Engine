import { useState, useEffect, useMemo } from "react";
import "./style/index.css";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Typography,
} from "@material-tailwind/react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import deckDataEN from "./Data/galerieEN.json";
import deckDataFR from "./Data/galerieFR.json";
import Deck from "./Components/Deck/Deck";
import Ornement from "./Components/Ornement/Ornement";
import FullScreenButton from "./Components/Fullscreen";

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
  const [selectedDeck, setSelectedDeck] = useState("Full Engine");

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

  return (
    <div className="p-4">
      <header className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="grade flex flex-col gap-1 justify-center w-full text-4xl items-center">
          <h1 className="benchnine-bold">{selectedDeck}</h1>
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
      <div className="separator border mt-6"></div>
      <main className="p-10">
        <TransitionGroup>
          <CSSTransition key={selectedDeck} timeout={500} classNames="bounce">
            <Deck
              selectedDeck={selectedDeck}
              setSelectedDeck={setSelectedDeck}
              data={data}
            />
          </CSSTransition>
        </TransitionGroup>
        <div className="engin-option">
          <div className="deck-selector flex justify-evenly flex-wrap gap-4">
            {data.map((deck) => (
              <button
                key={deck.name}
                onClick={() => setSelectedDeck(deck.name)}
                className="bg-white text-black p-3 border rounded-full w-50 focus:outline-none focus:border-transparent min-w-[200px] ripple"
              >
                {deck.name}
              </button>
            ))}
          </div>
        </div>
      </main>
      <Ornement />
      <FullScreenButton />
    </div>
  );
};

export default App;
