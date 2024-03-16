'use strict'

import {
	createDeck,
	requestPlayingCard,
	accumulatePoints,
	createPlayingCard,
	computerTurn
} from "./usecases";


let deck = [],
	playersPoints = [],
	types = ['C', 'D', 'H', 'S'],
	specials = ['A', 'J', 'Q', 'K'];

// * References html
const newGame = document.querySelector('#btn-new-game'),
	askDeckCard = document.querySelector('#btn-request-playing-card'),
	stopGame = document.querySelector('#btn-stop-game'),
	marker = document.querySelectorAll('small'),
	gameCards = document.querySelectorAll('.game-cards');

const initGame = ( countPlayers = 2 ) => {
	deck = createDeck( types, specials);
	playersPoints = [];

	for(let i = 0; i < countPlayers; i++){
		playersPoints.push(0);
	}

	marker.forEach(elemnt => elemnt.innerText = 0);
	gameCards.forEach(elemnt => elemnt.innerHTML = '');

	stopGame.disabled = false;
	askDeckCard.disabled = false;
}

newGame.addEventListener('click', () => {
	initGame();
});

askDeckCard.addEventListener('click', () => {
	const card = requestPlayingCard( deck );
	const playerPoints = accumulatePoints( playersPoints, marker, card, 0 );
	createPlayingCard( gameCards, card, 0 );

	if( playerPoints > 21 ) {
		console.warn('Im sorry, you lost!');
		askDeckCard.disabled = true;
		stopGame.disabled = true;
		computerTurn( gameCards, playersPoints, playerPoints, marker, deck );
	} else if( playerPoints === 21 ) {
		console.warn('21, great!');
		stopGame.disabled = true;
		askDeckCard.disabled = true;
		computerTurn( gameCards, playersPoints, playerPoints, marker, deck );
	}
});

stopGame.addEventListener('click', () => {
	stopGame.disabled = true;
	askDeckCard.disabled = true;
	computerTurn( gameCards, playersPoints, playersPoints[0], marker, deck );
});

initGame();