var SNAKE = {
	canvasWidth: 400,
	canvasHeight: 400,
	pixelSize: 20,
	KEY_MAPPING: {
		39: 'right',
		40: 'down',
		37: 'left',
		38: 'up'
	},
	started: true,
	attrs: {},
	gameHeight: function() {
		return this.attrs.gameHeight || (this.attrs.gameHeight = this.canvasHeight / this.pixelSize);
	},
	gameWidth: function() {
		return this.attrs.gameWidth || (this.attrs.gameWidth = this.canvasWidth / this.pixelSize);
	},
	canvas: function() {
		if (SNAKE.context) {
			return SNAKE.context;
		}
		var canvas = document.getElementById('chunk-game');
		SNAKE.context = canvas.getContext('2d');
		return SNAKE.context;
	},
	executeNTimesPerSecond: function(tickCallback, gameSpeed) {
		tickCallback();
		SNAKE.processID = setInterval(function() {
			tickCallback();
		}, 1000 / gameSpeed);
	},
	onArrowKey: function(callback) {
		document.addEventListener('keydown', function(e) {
			if (SNAKE.KEY_MAPPING[e.which]) {
				e.preventDefault();
				callback(SNAKE.KEY_MAPPING[e.which]);
			}
		});
	},
	endGame: function() {
		this.started = false;
		clearInterval(SNAKE.processID);
	},
	draw: function(objects) {
		if (this.started) {
			SNAKE.clear();
			SNAKE.drawObjects(objects);
		}
	},
	clear: function() {
		SNAKE.canvas().clearRect(0, 0, SNAKE.canvasWidth, SNAKE.canvasHeight);
	},
	drawObjects: function(objects) {
		var ui = this;
		objects.forEach(function(object) {
			object.pixels.forEach(function(pixel) {
				ui.drawPixel(object.color, pixel);
			});
		});
	},
	drawPixel: function(color, pixel) {
		SNAKE.canvas().fillStyle = color;
		var translatedPixel = SNAKE.translatePixel(pixel);
		SNAKE.context.fillRect(translatedPixel.left, translatedPixel.top, SNAKE.pixelSize, SNAKE.pixelSize);
	},
	translatePixel: function(pixel) {
		return { left: pixel.left * SNAKE.pixelSize, top: pixel.top * SNAKE.pixelSize };
	},
	gameBoundaries: function() {
		if (this.attrs.boundaries) {
			return this.attrs.boundaries;
		}
		this.attrs.boundaries = [];
		for (var top = -1; top <= SNAKE.gameHeight(); top++) {
			this.attrs.boundaries.push({ top: top, left: -1 });
			this.attrs.boundaries.push({ top: top, left: this.gameWidth() + 1 });
		}
		for (var left = -1; left <= SNAKE.gameWidth(); left++) {
			this.attrs.boundaries.push({ top: -1, left: left });
			this.attrs.boundaries.push({ top: this.gameHeight() + 1, left: left });
		}
		return this.attrs.boundaries;
	},
	detectCollisionBetween: function(objectA, objectB) {
		return objectA.some(function(pixelA) {
			return objectB.some(function(pixelB) {
				return pixelB.top === pixelA.top && pixelB.left === pixelA.left;
			});
		});
	},
	randomLocation: function() {
		return {
			top: Math.floor(Math.random() * SNAKE.gameHeight()),
			left: Math.floor(Math.random() * SNAKE.gameWidth())
		};
	},
	flashMessage: function(message) {
		var canvas = document.getElementById('chunk-game');
		var context = canvas.getContext('2d');
		context.font = '20pt Calibri';
		context.fillStyle = 'yellow';
		context.fillText(message, 75, 100);
	}
};
