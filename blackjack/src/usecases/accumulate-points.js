import { valueCard } from "./value-card";
/**
 * This function increases the points of each player according to the selected card
 * @param { Array<Number> } playersPoints contains player points
 * @param { HTMLElement } marker 
 * @param { String } card card name
 * @param { Number } turn player turn
 * @returns { Number } returns the points a player has
 */
export const accumulatePoints = ( playersPoints, marker, card, turn ) => {
	playersPoints[turn] = playersPoints[turn] + valueCard( card );
	marker[turn].innerText = playersPoints[turn];
	return playersPoints[turn];
}