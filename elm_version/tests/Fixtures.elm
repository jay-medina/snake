module Fixtures exposing (createModel, createSnake, createSnakeBody)

import Types exposing (..)


createSnakeBody : List GridItem
createSnakeBody =
    [ { row = 0, col = 0 }
    , { row = 0, col = 1 }
    , { row = 0, col = 2 }
    ]


createSnake : Snake
createSnake =
    { body =
        createSnakeBody
    , direction = Right
    , lastTimestamp = 0
    , incrementTimer = 150
    }


createModel =
    { currentscore = 0
    , highscore = 130
    , rows = 25
    , columns = 25
    , apple =
        { row = 4
        , col = 4
        }
    , snake = createSnake
    , gameState = Start
    }
