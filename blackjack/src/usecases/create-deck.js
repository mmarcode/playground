import _ from "underscore";

/**
 * This function create a new deck
 * @param { Array<String> } types example ['C','D','H','S']
 * @param { Array<String> } specials example ['A','J','Q','K']
 * @returns Array<String>
 */
export const createDeck = (types, specials) => {
	if( !types || types.length === 0 )
		throw new Error('the parameter [types] is mandatory { Array<String> }');

	if( !specials || specials.length === 0 )
		throw new Error('the parameter [specials] is mandatory { Array<String> }');

	let deck = [];

	for(let i = 2; i <= 10; i++) {
		for(let type of types) {
			deck.push(i + type);
		}
	}

	for(let type of types) {
		for(let special of specials) {
			deck.push(special + type);
		}
	}

	return _.shuffle( deck );
};