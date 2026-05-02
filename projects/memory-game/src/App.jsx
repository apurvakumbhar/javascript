import React, { useEffect, useState } from "react";
import "./App.css";

const cardImages = ["🍎", "🍌", "🍇", "🍒", "🥝", "🍍"];

function App() {
  const [cards, setCards] = useState([]);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [turns, setTurns] = useState(0);
  const [disable, setDisable] = useState(false);

  // Shuffle cards
  const shuffleCards = () => {
    const shuffled = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((item, index) => ({
        id: index,
        value: item,
        matched: false
      }));

    setCards(shuffled);
    setFirst(null);
    setSecond(null);
    setTurns(0);
  };

  // Handle click
  const handleClick = (card) => {
    if (disable) return;
    if (card === first) return;

    first ? setSecond(card) : setFirst(card);
  };

  // Compare cards
  useEffect(() => {
    if (first && second) {
      setDisable(true);

      if (first.value === second.value) {
        setCards((prev) =>
          prev.map((c) =>
            c.value === first.value ? { ...c, matched: true } : c
          )
        );
        resetTurn();
      } else {
        setTimeout(resetTurn, 800);
      }
    }
  }, [first, second]);

  const resetTurn = () => {
    setFirst(null);
    setSecond(null);
    setTurns((t) => t + 1);
    setDisable(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <h2>Memory Game</h2>

      <button onClick={shuffleCards}>New Game</button>
      <p>Turns: {turns}</p>

      <div className="grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className="card"
            onClick={() => handleClick(card)}
          >
            {card === first || card === second || card.matched
              ? card.value
              : "❓"}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;