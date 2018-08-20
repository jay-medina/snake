module Util exposing (..)

import Model exposing (Apple, GridItem, Model, Snake)
import Msg exposing (Msg(..))
import Random


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
