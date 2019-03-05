const deck = require("./talia");

const myCards = [];

const giveCards = () => Math.floor(Math.random() * 52);

const givenCards = (() => {
  for (let i = 0; myCards.length < 5; i++) {
    const index = giveCards();
    if (!myCards.includes(deck[index])) {
      myCards.push(deck[index]);
    }
  }
})();

const sortedCards = myCards.sort(
  (firstCard, secondCard) => firstCard.value - secondCard.value
);

console.log(sortedCards);

const royalPoker = cards => {
  const royalPokerCards = [10, 11, 12, 13, 14];

  let suit = cards[0].suit;

  for (let i = 0; i < sortedCards.length; i++) {
    if (
      sortedCards[i].value == royalPokerCards[i] &&
      sortedCards[i].suit == suit
    ) {
      return "royal poker";
    } else {
      return;
    }
  }
};

const poker = () => {
  let counter = 0;
  for (let i = 0; i < sortedCards.length - 1; i++) {
    if (sortedCards[i].value - sortedCards[i + 1].value == -1) {
      counter++;
    }
  }
  if (
    counter == 4 &&
    (sortedCards[0].suit === sortedCards[1].suit &&
      sortedCards[1].suit === sortedCards[2].suit &&
      sortedCards[2].suit === sortedCards[3].suit &&
      sortedCards[3].suit === sortedCards[4].suit)
  ) {
    return "Poker";
  }
};

const fourOfKind = () => {
  if (
    sortedCards[0].value === sortedCards[3].value ||
    sortedCards[1].value === sortedCards[4].value
  ) {
    return "Four of a kind";
  }
};

const fullHouse = () => {
  if (
    (sortedCards[0].value === sortedCards[1].value &&
      sortedCards[2].value === sortedCards[4].value) ||
    (sortedCards[0].value === sortedCards[2].value &&
      sortedCards[3].value === sortedCards[4].value)
  ) {
    return "Full house";
  }
};
const flush = () => {
  if (
    sortedCards[0].suit === sortedCards[1].suit &&
    sortedCards[1].suit === sortedCards[2].suit &&
    sortedCards[2].suit === sortedCards[3].suit &&
    sortedCards[3].suit === sortedCards[4].suit
  ) {
    return "Flush";
  }
};

const straight = () => {
  let counter = 0;
  for (let i = 0; i < sortedCards.length - 1; i++) {
    if (sortedCards[i].value - sortedCards[i + 1].value == -1) {
      counter++;
    }
  }
  if (counter == 4) {
    return "Straight";
  }
};

const threeOfAKind = () => {
  if (
    sortedCards[0].value === sortedCards[2].value ||
    sortedCards[1].value === sortedCards[3].value ||
    sortedCards[2].value === sortedCards[4].value
  ) {
    return "Three of a kind";
  }
};

const twoPairs = () => {
  if (
    (sortedCards[0].value === sortedCards[1].value &&
      sortedCards[2].value === sortedCards[3].value) ||
    (sortedCards[0].value === sortedCards[1].value &&
      sortedCards[3].value === sortedCards[4].value) ||
    (sortedCards[1].value === sortedCards[2].value &&
      sortedCards[3].value === sortedCards[4].value)
  ) {
    return "Two pairs";
  }
};

const pair = () => {
  for (let i = 0; i < sortedCards.length - 1; i++) {
    if (sortedCards[i].value === sortedCards[i + 1].value) {
      return "Pair";
    }
  }
};

const highestCard = () => {
  const highCard = sortedCards[4];

  return `High card with ${highCard.value} ${highCard.suit}`;
};

const letsPlayTheGame = (() => {
  let system = "";
  const checkingFunctions = [
    royalPoker,
    poker,
    fourOfKind,
    fullHouse,
    flush,
    straight,
    threeOfAKind,
    twoPairs,
    pair,
    highestCard
  ];
  for (let checkingFunction of checkingFunctions) {
    const result = checkingFunction(myCards);
    if (result) {
      system = result;
      console.log(`You have a ${system}`);
      return;
    }
  }
})();
