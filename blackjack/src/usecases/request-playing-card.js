/**
 * This function allows me to take a card
 * @param { Array<String> } deck 
 * @returns { Strin } returns the name of a card from the deck
 */
export const requestPlayingCard = ( deck ) => {
	if( !deck || deck.length === 0)
		throw new Error('There are no cards in the deck!');

	return deck.pop();
};