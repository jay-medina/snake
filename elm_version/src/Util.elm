module Util exposing (isAtPosition, isInvalidDirection, isOppositeDirection, isSnakeAbleToMove, isSnakeAtItself, isSnakeAtPosition, isSnakeAtWall, isSnakeDead, isTheApple)

import Types exposing (..)


isAtPosition : GridItem -> GridItem -> Bool
isAtPosition gridItem1 gridItem2 =
    gridItem1.row == gridItem2.row && gridItem1.col == gridItem2.col


isSnakeAtPosition : List GridItem -> GridItem -> Bool
isSnakeAtPosition snakeBody gridItem =
    List.any (isAtPosition gridItem) snakeBody


isTheApple =
    isAtPosition


isSnakeAbleToMove : Snake -> Int -> Bool
isSnakeAbleToMove snake timestamp =
    snake.lastTimestamp == 0 || toFloat (timestamp - snake.lastTimestamp) >= snake.incrementTimer


isSnakeDead : Model -> Bool
isSnakeDead model =
    isSnakeAtWall model || isSnakeAtItself model


isSnakeAtWall : Model -> Bool
isSnakeAtWall model =
    let
        snakeBody =
            model.snake.body
    in
    case snakeBody of
        { row, col } :: rest ->
            row < 0 || row > model.rows || col < 0 || col > model.columns

        _ ->
            True


isSnakeAtItself : Model -> Bool
isSnakeAtItself model =
    let
        snakeBody =
            model.snake.body
    in
    case snakeBody of
        h :: rest ->
            isSnakeAtPosition rest h

        _ ->
            True


isOppositeDirection direction newDirection =
    (direction == Left && newDirection == Right)
        || (direction == Right && newDirection == Left)
        || (direction == Up && newDirection == Down)
        || (direction == Down && newDirection == Up)


isInvalidDirection model newDirection =
    let
        currentDirection =
            model.snake.direction
    in
    currentDirection
        == newDirection
        || isOppositeDirection currentDirection newDirection
