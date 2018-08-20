module Util exposing (..)

import Model exposing (Apple, GridItem)


isTheApple : Apple -> GridItem -> Bool
isTheApple apple gridItem =
    apple.row == gridItem.row && apple.col == gridItem.col



-- export function isTheApple(apple: Apple, row: number, col: number) {
--   return row === apple.row && col === apple.col;
-- }
-- export function isSnakeAtPosition(snake: Snake, row: number, col: number) {
--   return !!snake.find((part) => part.row === row && part.col === col);
-- }
