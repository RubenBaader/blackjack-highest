export function blackjackHighest(dealedCards : Array<string>) {
  let score : number = 0;
  let highest : string;

  interface Card {
    name : string,
    score : number,
    rank : number
  }

  const cardValues : Record<string, Object> = {
    "two" : {score: 2, rank: 2},
    "three" : {score: 3, rank: 3},
    "four" : {score: 4, rank: 4},
    "five" : {score: 5, rank: 5},
    "six" : {score: 6, rank: 6},
    "seven" : {score: 7, rank: 7},
    "eight" : {score: 8, rank: 8},
    "nine" : {score: 9, rank: 9},
    "ten" : {score: 10, rank: 10},
    "jack" : {score: 10, rank: 11},
    "queen" : {score: 10, rank: 12},
    "king" : {score: 10, rank: 13},
    "ace" : {score: 11, rank: 14},
  }

  let cardsOnTable : Array<Card> = dealedCards.map(
    (card) => {
      {
        name : card,
        score : cardValues[card].score,
        rank : cardValues[card].rank,
      }
    }
  )

  return (`${result} ${highest}`)
}
