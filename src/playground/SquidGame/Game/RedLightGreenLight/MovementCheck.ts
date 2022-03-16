const PlayerData = require('../../Data/Player/Player.json');

let isPlayerMove = false;

interface Position<T> {
	x: T;
	y: T;
}

let checkMovement = (playertarget: String, playerposition: Position<number>): boolean => {
	return isPlayerMove;
}

let checkPlayer01 = checkMovement("LeeSaeJeong", {x: 2, y: 1});

export {iteration01};

