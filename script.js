window.addEventListener('load', init)

// Levels
const levels = {
    easy: 5,
    med: 3,
    hard: 2
}

// Change levels
const currentLevel = levels.med

// Global variables for functions
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM element variables
const wordInput = document.querySelector('#word-input')
const currentWord = document.querySelector('#current-word')
const scoreDisplay = document.querySelector('#score')
const timeDisplay = document.querySelector('#time')
const message = document.querySelector('#message')
const seconds = document.querySelector('#seconds')

// Word array
const words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon",
"mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "ugli",
"vanilla", "watermelon", "xigua", "yam", "zucchini", "artichoke", "broccoli", "carrot", "daikon",
"eggplant", "fennel", "garlic", "horseradish", "iceberg", "jalapeno", "kale", "lettuce", "mushroom",
"nutmeg", "onion", "pea", "quinoa", "radish", "spinach", "tomato", "udon", "vinegar", "wasabi",
"xanthan", "yogurt", "ziti", "asparagus", "anchovy", "almond", "apricot", "aubergine", "avocado", "bass", "biscuit", "blackberry", "blueberry",
"bokchoy", "bologna", "bratwurst", "brioche", "brownie", "burrito", "butternut squash", "cabbage", "calamari", "cannelloni",
"cantaloupe", "capers", "cashew", "cauliflower", "celery", "cheese", "chickpea", "chili", "chocolate", "chutney",
"clam", "coconut", "cod", "cookie", "corn", "crab", "cranberry", "cucumber", "cupcake", "currant",
"custard", "damson", "edamame", "eel", "endive", "falooda", "farfalle", "fig", "filo dough", "flan",
"frankfurter", "fries", "frittata", "gazpacho", "gelato", "gouda", "grits", "guacamole", "gumbo", "gyro",
"haddock", "hazelnut", "hotdog", "huckleberry", "ice cream", "jackfruit", "jerky", "ketchup", "kiwano",
"kumquat", "langoustine", "lasagna", "leek", "linguine", "lychee", "macadamia", "macaroon", "manicotti", "marzipan",
"matzo", "mochi", "molasses", "morel", "naan", "nachos", "nectar", "okra", "olive", "omelette",
"pancetta", "paprika", "parmesan", "parsnip", "pecan", "pepperoni", "persimmon", "pickle", "pierogi", "pike",
"pineapple", "pistachio", "pizza", "plantain", "plum", "pomegranate", "pomelo", "popcorn", "pork", "potato",
"prawn", "pretzel", "prosciutto", "pumpkin", "rabbit", "radicchio", "raisin", "ravioli", "relish", "rhubarb",
"rice", "ricotta", "rockmelon", "roe", "rosemary", "roulade", "saffron", "sage", "sake", "sardine",
"scallops", "scone", "seaweed", "sesame", "shallot", "shrimp", "snapper", "sorbet", "souffle", "sourdough",
"spaghetti", "spareribs", "spearmint", "squid", "starfruit", "steak", "stew", "strudel", "sunflower",
"swordfish", "taco", "tahini", "tamale", "tapioca", "tarragon", "tempeh", "teriyaki", "thyme", "tiramisu",
"toffee", "tortilla", "tuna", "turkey", "turnip", "tzatziki", "veal", "venison", "vermicelli", "vodka",
"wakame", "walnut", "watercress", "wheat", "whiskey", "wiener schnitzel", "rice", "yam", "yeast", "ziti"]

// Initializing game
function init() {
    showWord(words) // Load a random word from array
    wordInput.addEventListener('input', startMatch)// Start matching on word input
    setInterval(countdown, 1000) // Call countdown every second
    setInterval(gameStatus, 50) // Checks game status
}

// Pick and show a random word from array
function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length) // Generates random index for array
    currentWord.innerHTML = words[randIndex] // Outputs word at random index from array
}

// Countdown function
function countdown() {
    // Check for validity of time
    if(time > 0) {
        time-- // Decrements time
    } else if(time === 0) { // Game over!
        isPlaying = false
    }
    timeDisplay.innerHTML = time // Shows time counting down
}

// Function for checking game status
function gameStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game Over.'
        score = -1
    }
}

// Starts game
function startMatch() {
    if(matchWords()) {
        isPlaying = true
        time = currentLevel + 1
        showWord(words)
        wordInput.value = ''
        score++
    }
    // Checks if score is -1
    if (score === -1) {
        scoreDisplay.innerHTML = 0
    } else {
        scoreDisplay.innerHTML = score
    }
}

// Match currentWord to wordInput
function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!'
        return true
    } else {
        message.innerHTML = ''
        return false
    }
}