const deck = (() => {
  const deck = [];
  const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  for (const suit of suits) {
    for (let value of values) {
      deck.push({ suit: suit, value: value });
    }
  }
  return deck;
})();

module.exports = deck;
