let response = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes, definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Signs point to yes.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Reply hazy, try again.",
  "I don't think so.",
  "Probably not.",
  "Not a chance."
];

function setup() {
  createCanvas(windowWidth, 120);
  background('lavender');
  textAlign(CENTER);
  textSize(20);
  button = createButton('ask');
  button.position(windowWidth/2-15, 620);
  button.mousePressed(answer);
  text("I am the Magic 8-Ball, ask me anything.", width/2, height/2);
}

function answer() {
  background('lavender');
  let index = Math.floor(random(response.length));
  let thisResponse = (response[index]);
  text(thisResponse, width/2, height/2);
  response.splice(index, 1);
  if (response.length === 0){
    background('lavender');
    text("I'm all out of juice!!!", width/2, height/2);
  }
}