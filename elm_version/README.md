# Snake

## Background

Build [Snake](<https://en.wikipedia.org/wiki/Snake_(video_game_genre)>) game in which a player controls a snake, guiding it towards food and away from walls or itself. The game navigation is through the arrow keys. If the snake consumes food, it grows a block. If it collides with itself or a wall, the game ends.

## Requirements

The application uses modules loaded natively in the browser. The expectation is that the user is running the latest Chrome or Firefox.

In order to run the application, the user must have node installed.

#### Node

- Mac and Windows: https://nodejs.org

## How to run solution

The following instructions are to start a localhost using Node.

- Install elm. Instructions are located here: https://guide.elm-lang.org/install.html

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
