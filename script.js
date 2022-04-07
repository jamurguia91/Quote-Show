/* Data to Show*/
const data = [
  {
    quote: `“did you point? Did you point??? DID YOU POINT !? DIJUYOU POINT !?!?!”`,
    emoji: "🏈",
    image: `url(https://i.imgur.com/cXIDVxy.png)`
  },
  {
    quote: `“No Germs”`,
    emoji: "🤧",
    image: `url(https://i.imgur.com/uTfnxLT.jpg)`
  },
  {
    quote: `“C O N S U M E  P R I L O S E C  ”`,
    emoji: "💊",
    image: `url(https://i.imgur.com/ICqaFqS.png)`,
    audio: `url(https://www.myinstants.com/instant/game-grumps-prilosec-95760/?utm_source=copy&utm_medium=share)`
  },
  {
    quote: `“Dude, you got a SCOODILY WOOP DEE WOOP DOOP DOOP WAH WAH!”`,
    emoji: "🎺",
    image: `url(https://i.imgur.com/Gkwra63.jpg)`
  },
  {
    quote: `“What does intrepid mean? I had a car called the intrepid, it was a Dodge Intrepid…’Intrepid, adjective fearless adventurous. Cool, that car. ExPlOdEd! ”`,
    emoji: "💥",
    image: `url(https://i.imgur.com/xYIeXdz.jpg)`
  },
  {
    quote: `"The only thing I bust are rhymes and nUtS"`,
    emoji: "🥥",
    image: `url(https://i.imgur.com/FdTmCTJ.jpg)`
  },
  {
    quote: `“MORE!”`,
    emoji: "🤢",
    image: `url(https://i.imgur.com/ujTREQ2.jpg)`
  }
];

/*
Quote and Emoji
*/
// blockquote
const quote = document.querySelector("blockquote");
// emoji
const emoji = document.querySelector("p");
// background
const bgImage = document.querySelector("body");

// Check-Check: change text
quote.innerHTML = "Freddy M.";
// Check-Check: change emoji text
emoji.innerHTML = "GG related quotes. ";
// Check-Check: background image
bgImage.style.backgroundImage = "url(https://i.imgur.com/GB8xAcA.jpg)";

/*
 * Navigate to Items with Event Listeners
 * Track Number of Items
 */
// initialize item number
let itemNumber = 0;
// get next button
const nextButton = document.querySelector("img.next");
// get previous button
const prevButton = document.querySelector("img.prev");
// get random button
const randButton = document.querySelector("img.random");

// listen for clicks on next button
nextButton.addEventListener("click", function () {
  // update, then increase item number with each click
  itemNumber = itemNumber + 1;

  // if at LAST item
  if (itemNumber > data.length - 1) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

// listen for clicks on previous button
prevButton.addEventListener("click", function () {
  // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;

  // if at FIRST item
  if (itemNumber < 0) {
    // reset counting to last item
    itemNumber = data.length - 1;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

// listen for clicks on random button
randButton.addEventListener("click", function () {
  // generate random number, for total number, of items (data)
  randomNumber = Math.floor(Math.random() * data.length);

  // display data based random number
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
});

// listen for keypress next
document.addEventListener("keyup", function () {
  // Next Right Arrow
  if (event.keyCode === 39) {
    // update, then increase item number with each click
    itemNumber = itemNumber + 1;

    // if at LAST item
    if (itemNumber > data.length - 1) {
      // reset counting to first item
      itemNumber = 0;
    }

    // display data based on array index
    quote.innerHTML = data[itemNumber].quote;
    emoji.innerHTML = data[itemNumber].emoji;
    bgImage.style.backgroundImage = data[itemNumber].image;
  }

  // Prev Left Arrow
  if (event.keyCode === 37) {
    // update, then DEcrease item number with each click
    itemNumber = itemNumber - 1;

    // if at FIRST item
    if (itemNumber < 0) {
      // reset counting to last item
      itemNumber = data.length - 1;
    }

    // display data based on array index
    quote.innerHTML = data[itemNumber].quote;
    emoji.innerHTML = data[itemNumber].emoji;
    bgImage.style.backgroundImage = data[itemNumber].image;
  }

  // Randomize using spacebar
  if (event.keyCode === 32) {
    // generate random number, for total number, of items (data)
    randomNumber = Math.floor(Math.random() * data.length);

    // display data based random number
    quote.innerHTML = data[randomNumber].quote;
    emoji.innerHTML = data[randomNumber].emoji;
    bgImage.style.backgroundImage = data[randomNumber].image;
  }
});
