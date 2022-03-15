import {Book01} from './playground/BookStore/BookStore';
import {Rectangle} from './playground/GraphicRenderer/GraphicRenderer';
import {squid01} from './playground/SquidGame/SquidGame';


// Squid Moving. 
let moveSquid = (direction: String, step: number) => {
	for(let i = 1; i <= step; i++) {
		switch(direction) {
			case "Right":
				squid01.walkRight();
				break;
			case "Left":
				squid01.walkLeft();
				break;
			case "Up":
				squid01.walkUp();
				break;
			case "Down":
				squid01.walkDown();
				break;
		}
	}
}


// Squid Operation. 
squid01.displayPoint();

moveSquid("Right", 3);
moveSquid("Down", 5);
squid01.displayPoint(); 

moveSquid("Down", 2);
squid01.displayPoint();

moveSquid("Up", 5);
squid01.displayPoint(); 