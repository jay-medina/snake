module Util exposing (..)

import Model exposing (Apple, GridItem, Model, Snake, Direction(..))
import Msg exposing (Msg(..))
import Random


increment : Int -> Int
increment score =
    score + 10


isAtPosition : GridItem -> GridItem -> Bool
isAtPosition item1 item2 =
    item1.row == item2.row && item1.col == item2.col


isTheApple : Apple -> GridItem -> Bool
isTheApple =
    isAtPosition


isSnakeAtPosition : GridItem -> Snake -> Bool
isSnakeAtPosition gridItem =
    List.any (isAtPosition gridItem)


isSnakeAtApple : Apple -> Snake -> Bool
isSnakeAtApple =
    isSnakeAtPosition


isSnakeInWall : GridItem -> Int -> Int -> Bool
isSnakeInWall snakeHead rows cols =
    snakeHead.row < 0 || snakeHead.row >= rows || snakeHead.col < 0 || snakeHead.col >= cols


isSnakeAtItself : GridItem -> Snake -> Bool
isSnakeAtItself =
    isSnakeAtPosition


isSnakeDead : Snake -> Int -> Int -> Bool
isSnakeDead snake rows cols =
    let
        head =
            List.head snake
    in
        case head of
            Just snakeHead ->
                isSnakeInWall snakeHead rows cols
                    || isSnakeAtItself snakeHead (List.drop 1 snake)

            Nothing ->
                False


initialSnake : Snake
initialSnake =
    [ { row = 12, col = 12 }, { row = 12, col = 11 }, { row = 12, col = 10 } ]


initialDirection : Direction
initialDirection =
    Right


initialApple : Apple
initialApple =
    { row = 4, col = 4 }


randomizeApple : Model -> Cmd Msg
randomizeApple model =
    let
        rowGenerator =
            Random.int 1 model.row

        colGenerator =
            Random.int 1 model.col

        rowCol =
            Random.pair rowGenerator colGenerator
    in
        Random.generate NewApple rowCol
