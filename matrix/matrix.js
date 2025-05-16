const CANVAS = document.getElementById('canvas'),
	CONTEXT = CANVAS.getContext('2d'),
	MAX_LETTERS = 300,
	FONT_SIZE = 18,
	LETTERS = ['ア', 'ァ', 'イ', 'イ', 'ウ', 'エ', 'カ', 'ガ',
		'キ', 'ギ', 'ク', 'グ', 'ケ', 'ゲ', 'サ', 'ザ', 'シ',
		'ジ', 'ス', 'ズ', 'セ', 'ゼ', 'ソ', 'ゾ', 'タ', 'ダ',
		'チ', 'ヂ', 'ッ', 'ツ', 'ヅ', 'テ', 'デ', 'ト', 'ド',
		'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'バ', 'パ', 'ヒ',
		'ビ', 'ピ', 'フ', 'ブ', 'プ', 'ホ', 'ボ', 'ポ', 'マ',
		'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ',
		'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ン'
	];

let width = window.innerWidth,
	height = window.innerHeight,
	falling = [],
	max_columns = width / FONT_SIZE,
	frames = 0;

CANVAS.width = width;
CANVAS.height = height;
class FallingLetters {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	draw(ctx) {
		this.value = LETTERS[Math.floor(Math.random() * (LETTERS.length - 1))];
		this.speed = (Math.random() * FONT_SIZE * 3) / 5 + (FONT_SIZE * 3) / 5;

		ctx.fillStyle = 'rgba(0, 255, 0)';
		ctx.font = FONT_SIZE + 'px sans-serif';
		ctx.fillText(this.value, this.x, this.y);
		this.y += this.speed;

		if(this.y > height) {
			this.y = (Math.random() * height) / 58;
			this.x = Math.floor(Math.random() * max_columns) * FONT_SIZE;
			this.speed = (-Math.random() * FONT_SIZE * 3) / 5 + (FONT_SIZE * 3) / 5;
		}
	}
}

let update = () => {
	if(falling.length < MAX_LETTERS) {
		let falling_letter = new FallingLetters(
			Math.floor(Math.random() * max_columns) * FONT_SIZE,
			(Math.random() * height) / 48
		);

		falling.push(falling_letter);
	}

	CONTEXT.fillStyle = 'rgba(0, 0, 0, 0.05)';
	CONTEXT.fillRect(0, 0, width, height);

	for(let i = 0; i < falling.length && frames % 2 == 0; i++) {
		falling[i].draw(CONTEXT);
	}

	requestAnimationFrame(update);
	frames++;
}

window.addEventListener('resize', function(e) {
	width = window.innerWidth;
	height = window.innerHeight;
	CANVAS.width = width;
	CANVAS.height = height;
	max_columns = width / FONT_SIZE;
}, true);


update();