module Util exposing (isAtPosition, isSnakeAbleToMove, isSnakeAtPosition, isTheApple)

import Types exposing (..)


isAtPosition : GridItem -> GridItem -> Bool
isAtPosition gridItem1 gridItem2 =
    gridItem1.row == gridItem2.row && gridItem1.col == gridItem2.col


isSnakeAtPosition : Snake -> GridItem -> Bool
isSnakeAtPosition snake gridItem =
    List.any (isAtPosition gridItem) snake.body


isTheApple =
    isAtPosition


isSnakeAbleToMove : Snake -> Int -> Bool
isSnakeAbleToMove snake timestamp =
    snake.lastTimestamp == 0 || timestamp - snake.lastTimestamp >= snake.incrementTimer
