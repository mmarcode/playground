/**
 * this function generates the image depending on the turn
 * @param { HTMLElement } gameCards
 * @param { String } card card name
 * @param { Number } turn player turn
 * @returns { HTMLImageElement } returns an image
 */
export const createPlayingCard = ( gameCards, card, turn ) => {
	if( !card )
		throw new Error('the parameter [card] is mandatory { String }');

	const imgCard = document.createElement( 'img' );
	imgCard.src = `/blackjack/assets/img/${ card }.png`;
	imgCard.classList.add( 'game-card' );
	gameCards[turn].append( imgCard );
}