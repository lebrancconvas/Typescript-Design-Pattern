// Salesman Searching 

class Point {
	x: number;
	y: number;

	constructor(xAxis: number, yAxis: number) {
		this.x = xAxis;
		this.y = yAxis;
	}

	walkLeft() {
		this.x--;
	}

	walkRight() {
		this.x++;
	}

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

let squid01 = new Point(0,0);

export {squid01};


