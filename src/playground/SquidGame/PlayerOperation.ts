import {SeongGiHun, ChoSangWoo, JiYeong, KangSaeByeok} from "./PlayerInit";

let movePlayer = (Player: unknown, Direction: String, Step: number) => {
	for(let i = 1; i <= Step; i++) {
		switch(Direction) {
			case "Up":
				Player.moveUp();
				break;
			case "Down":
				Player.moveDown();
				break;
			case "Right":
				Player.moveRight();
				break;
			case "Left":
				Player.moveLeft();
				break;
		}
	}
}

let attackPlayer = (PlayerCommit: unknown, PlayerTarget: unknown) => {
	if(PlayerCommit.x === PlayerTarget.x || PlayerCommit.y === PlayerTarget.y) {
		PlayerTarget.hp--;
	}
}