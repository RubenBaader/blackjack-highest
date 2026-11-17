import { initializeCards, Card } from "./CardDetails";

function calculateScore(cardArray: Array<Card>) {
    let totalScore = 0;
    let highestCard = cardArray[0];

    for (const card of cardArray) {
        totalScore += card.score;
        if (card.rank > highestCard.rank) {
            highestCard = card;
        }
    }

    return { totalScore, highestCard };
}

function checkScore(totalScore: number, highestCard: Card, cardsOnTable: Array<Card>) {
    let result = "below";

    if (totalScore === 21) {
        result = "blackjack";
        return (`${result} ${highestCard.name}`);
    }
    if (totalScore > 21) {
        // If the highest card is not an unmodified ace (rank 14), return "above"
        if (highestCard.rank !== 14) {
            result = "above";
            return (`${result} ${highestCard.name}`);
        }

        const aceToChange = cardsOnTable.find((card: Card) => card.rank === 14);
        if (aceToChange) {
            aceToChange.score = 1;
            aceToChange.rank = 1;
        }

        ({ totalScore, highestCard } = calculateScore(cardsOnTable));
        return checkScore(totalScore, highestCard, cardsOnTable);
    }

    return (`${result} ${highestCard.name}`);
}

export function blackjackHighest(dealedCards: Array<string>) {
    const cardsOnTable = initializeCards(dealedCards);

    const { totalScore, highestCard } = calculateScore(cardsOnTable);

    return checkScore(totalScore, highestCard, cardsOnTable);
}