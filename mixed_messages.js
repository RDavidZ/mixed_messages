// Define arrays of different parts of the message
const setups = [
  "Why did the chicken cross the road?",
  "Why did the sacrecrow win an award?",
  "Why did the tomato turn red?",
  "Why was the math book sad?",
  "Why did the golfer bring two pairs of pants?",
];

const punchlines = [
  "To get to the other side!",
  "Because he was outstanding in his field!",
  "Because it saw the salad dressing!",
  "Because it had too many problems!",
  "In case he got a hole in one!",
];

//Function to randomly select an item from an array
const getRandomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

// Function to generate a joke
const generateJoke = () => {
  const setupIndex = Math.floor(Math.random() * setups.length);
  const setup = setups[setupIndex];
  const punchline = punchlines[setupIndex]; //Ensure punchline matches the setup

  return `${setup} ${punchline}`;
};

//Test the joke generator
console.log(generateJoke());
