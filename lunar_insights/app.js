window.addEventListener('load', function () {
	console.log('page is loaded');

	fetch('https://moon-phase.p.rapidapi.com/advanced', {
		method: 'GET',
		headers: {
			'Accept': '*/*',
			'X-Rapidapi-Key': '5158933dd8msha18d0b3a12fd041p1d364fjsn4ae459e347e4'
		}
	})
		.then(response => response.json())
		.then(data => {
			//DO STUFF HERE
			let date = data.datestamp;
			let phase = data.moon.phase_name;
			let emoji = data.moon.emoji
			let zodiac = data.moon.zodiac_sign;
			let moonrise = data.moon.moonrise;
			let moonset = data.moon.moonset;

			// Extract nextNewMoon and nextFullMoon dates
			let nextNewMoonString = data.moon_phases.new_moon.next.datestamp;
			let nextFullMoonString = data.moon_phases.full_moon.next.datestamp;

			// Remove time and timezone offset from the date strings (keep only the date)
			let formattedNextNewMoon = nextNewMoonString.split('2023')[0].trim();
			let formattedNextFullMoon = nextFullMoonString.split('2023')[0].trim();

			document.getElementById('dataset').innerHTML = `
			<p>Today is <strong>${date}</strong></p>
			<p><strong>Current moon phase: </strong>${phase} ${emoji}</p>
			<p><strong>Zodiac: </strong>Moon in ${zodiac}</p>
			<p><strong>Moonrise: </strong>${moonrise}</p>
			<p><strong>Moonset: </strong>${moonset}</p>
			<p><strong>Next new moon: </strong>${formattedNextNewMoon}</p>
			<p><strong>Next full moon: </strong>${formattedNextFullMoon}</p>
        `;

		})
		.catch(error => {
			console.error('Error:', error);
		});

});

let stars = [];
let numStars = 1;

function setup() {
	let canvas = createCanvas(windowWidth, windowHeight*2.5);
	canvas.parent("canvas");
}

function draw() {
	class Star {
		constructor(x, y) {
			this.x = x;
			this.y = y;
			this.size = random(0, 4);
			this.alpha = random(20, 180);
		}
		twinkle() {
			if (random(1) < 0.5) {
				this.alpha += 5;
			} else {
				this.alpha -= 5;
			}
			this.alpha = constrain(this.alpha, 20, 180);
		}
		display() {
			fill(243, 223, 162, this.alpha);
			noStroke();
			push();
			translate(this.x, this.y);
			circle(0, 0, this.size);
			pop();
		}
	}
	for (let i = 0; i < numStars; i++) {
		stars.push(
			new Star(random(-width, width), random(-height, height))
		);
	}
	for (let star of stars) {
		star.twinkle();
		star.display();
	}
}
