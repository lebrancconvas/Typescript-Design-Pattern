// Ref: https://asianwiki.com/Squid_Game 

class Point {
	hp: number;
	x: number;
	y: number;

	constructor(hpPlayer: number, xAxis: number, yAxis: number) {
		this.hp = hpPlayer;
		this.x = xAxis;
		this.y = yAxis;
	}

	walkLeft() {
		this.x--;
	}

	walkRight() {
		this.x++;
	}

	// Reference from Computer Graphics Axis. 
	walkUp() {
		this.y--;
	}

	walkDown() {
		this.y++;
	}

	displayPoint() {
		console.log(`{X: ${this.x}, Y: ${this.y}}`);
	}
}

class PointWithWeapon extends Point {
	weapon: String;

	constructor(hp: number, x: number, y: number, w: String) {
		super(hp, x, y);
		this.weapon = w;
	}
}

let SeongGiHun = new Point(20, 0, 0);
let ChoSangWoo = new Point(25, 1, 3);
let JiYeong = new Point(10, 2, 10);
let KangSaeByeok = new Point(20, 8, 5);

export {SeongGiHun, ChoSangWoo, JiYeong, KangSaeByeok};


