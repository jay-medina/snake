module Util exposing (initialSnake, isSnakeAtPosition, isTheApple)

import Model exposing (Apple, GridItem, Snake)


isAtPosition : GridItem -> GridItem -> Bool
isAtPosition item1 item2 =
    item1.row == item2.row && item1.col == item2.col


isTheApple : Apple -> GridItem -> Bool
isTheApple =
    isAtPosition


isSnakeAtPosition : GridItem -> Snake -> Bool
isSnakeAtPosition gridItem =
    List.any (isAtPosition gridItem)


initialSnake : Snake
initialSnake =
    [ { row = 12, col = 12 }, { row = 12, col = 11 }, { row = 12, col = 10 } ]
