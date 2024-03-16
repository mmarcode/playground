/**
 * this function indicates who wins
 * @param { Number } minPoints 
 * @param { Number } computerPoints 
 * @returns returns an alert
 */
export const winner = ( minPoints, computerPoints ) => {
	setTimeout(() => {
		if( computerPoints === minPoints ){
			alert('Nobody wins!');
		} else if( minPoints > 21 ) {
			alert('CPU wins!');
		} else if( computerPoints > 21 ) {
			alert('Player 1 wins!');
		} else {
			alert('CPU wins!');
		}
	}, 100);
}