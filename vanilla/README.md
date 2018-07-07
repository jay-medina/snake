# Snake

## Background

Build [Snake](<https://en.wikipedia.org/wiki/Snake_(video_game_genre)>) game in which a player controls a snake, guiding it towards food and away from walls or itself. The game navigation is through the arrow keys. If the snake consumes food, it grows a block. If it collides with itself or a wall, the game ends.

## Requirements

The application uses modules loaded natively in the browser. The expectation is that the user is running the latest Chrome or Firefox.

In order to run the application, the user must have python or node installed.

#### Python

- Mac: Python comes pre-installed
- Windows: https://www.python.org/downloads/windows/

#### Node

- Mac and Windows: https://nodejs.org

#### Documentation on ES Modules

- Module documentation: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script

- Note: This is for demo purposes. It is still preferred to bundle modules using a module loader such as webpack or rollup.
  https://developers.google.com/web/fundamentals/primers/modules

## How to run solution

The following instructions are to start a localhost using Python or Node.

- Open a terminal window, navigate to the project directory, then type in the following: `python -m SimpleHTTPServer 8080`. This will start a local server at port 8080. Navigate to `localhost:8080` in browser.

- If node server is preferred, run the following command to install http-server `npm install`. Then type `npx http-server` in the project directory. Navigate to `localhost:8080` in browser.

- For convenience, there is an npm script to start a python server. Type `npm start` in terminal window.

## Game Play

Game starts with an initial screen of the game title and a play button. In order to start the game, click on the play button.

- To control the snake,

  - use the UP (⬆), DOWN (⬇︎), LEFT (⬅︎), RIGHT (➡︎) arrow keys.
  - W (⬆), S (⬇︎), A (⬅︎) ,D (➡︎) work as well.

- If Snake hits itself or a collides with a wall, the game over screen will appear.

  - Click "Play Again" button to play a new game

- As the snake eats new food items, it will continue to grow. Eat food item increases the score by 10 points.

- Eating each food item also increases the speed in which the snake moves.

- The high score is recorded and stored.
