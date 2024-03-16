import { accumulatePoints } from "./accumulate-points";
import { createPlayingCard } from "./create-playing-card";
import { requestPlayingCard } from './request-playing-card';
import { winner } from "./winner";

/**
 * this function launches the computer's turn
 * @param { HTMLElement } gameCards 
 * @param { Array<Number> } playersPoints array containing player points
 * @param { Number } minPoints minimum points the cpu needs to win
 * @param { HTMLElement } marker 
 * @param { Array<String> } deck deck of cards
 */
export const computerTurn = (
	gameCards,
	playersPoints,
	minPoints,
	marker, deck = []
) => {
	let computerPoints = 0;
	do {
		const card = requestPlayingCard( deck );
		computerPoints = accumulatePoints(
			playersPoints,
			marker,
			card,
			playersPoints.length - 1
		);
		createPlayingCard( gameCards, card, playersPoints.length - 1 );
	} while(
		(computerPoints < minPoints) && (minPoints <= 21)
	);

	winner( minPoints, computerPoints );
}