module Util_test exposing (suite)

import Expect exposing (Expectation)
import Fixtures exposing (..)
import Test exposing (..)
import Types exposing (..)
import Util exposing (..)


suite : Test
suite =
    describe "Util test"
        [ describe "isAtPosition"
            [ test "same position" <|
                \_ ->
                    let
                        gridItem =
                            { row = 1, col = 4 }
                    in
                    isAtPosition gridItem gridItem
                        |> Expect.true "Expected the positions to be equal"
            , test "same row but different columns" <|
                \_ ->
                    let
                        gridItemOne =
                            { row = 1, col = 4 }

                        gridItemTwo =
                            { row = 1, col = 2 }
                    in
                    isAtPosition gridItemOne gridItemTwo
                        |> Expect.false "Expected the positions to be different"
            , test "same columns but different rows" <|
                \_ ->
                    let
                        gridItemOne =
                            { row = 2, col = 2 }

                        gridItemTwo =
                            { row = 1, col = 2 }
                    in
                    isAtPosition gridItemOne gridItemTwo
                        |> Expect.false "Expected the positions to be different"
            ]
        , describe "isSnakeAtPosition"
            [ test "snakeBody isnt at the specified position" <|
                \_ ->
                    isSnakeAtPosition createSnakeBody { row = 0, col = 3 }
                        |> Expect.false "Snake isnt at the position"
            , test "snakeBody at the specified position" <|
                \_ ->
                    isSnakeAtPosition createSnakeBody { row = 0, col = 1 }
                        |> Expect.true "Snake is at the position"
            ]
        , describe "isTheApple"
            [ test "same position" <|
                \_ ->
                    let
                        gridItem =
                            { row = 1, col = 4 }
                    in
                    isTheApple gridItem gridItem
                        |> Expect.true "Expected the positions to be equal"
            ]
        , describe "isSnakeAbleToMove"
            [ test "when the game is starting and the timestamp is zero" <|
                \_ ->
                    let
                        snake =
                            createSnake
                    in
                    isSnakeAbleToMove snake 0
                        |> Expect.true "Snake should move for start of game"
            , test "when the time difference between two timestamps is greater than increment" <|
                \_ ->
                    let
                        snake =
                            { createSnake | lastTimestamp = 1000 }
                    in
                    isSnakeAbleToMove snake 2000
                        |> Expect.true "Snake should move"
            , test "when the time difference between two timestamps is less than increment" <|
                \_ ->
                    let
                        snake =
                            { createSnake | lastTimestamp = 1000 }
                    in
                    isSnakeAbleToMove snake 1100
                        |> Expect.false "Snake should not move"
            ]
        , describe "isSnakeAtWall"
            [ test "snake doesnt exist for some reason" <|
                \_ ->
                    let
                        snake =
                            { createSnake | body = [] }

                        model =
                            { createModel | snake = snake }
                    in
                    isSnakeAtWall model
                        |> Expect.true "Snake doesnt have a body so end game"
            , test "snake is in the left wall" <|
                \_ ->
                    let
                        snake =
                            { createSnake | body = [ { row = -1, col = 0 } ] }

                        model =
                            { createModel | snake = snake }
                    in
                    isSnakeAtWall model
                        |> Expect.true "Snake is in left wall"
            , test "snake is in the right wall" <|
                \_ ->
                    let
                        preModel =
                            createModel

                        snake =
                            { createSnake | body = [ { row = preModel.rows + 1, col = 0 } ] }

                        model =
                            { preModel | snake = snake }
                    in
                    isSnakeAtWall model
                        |> Expect.true "Snake is in right wall"
            , test "snake is in the top wall" <|
                \_ ->
                    let
                        snake =
                            { createSnake | body = [ { row = 0, col = -1 } ] }

                        model =
                            { createModel | snake = snake }
                    in
                    isSnakeAtWall model
                        |> Expect.true "Snake is in top wall"
            , test "snake is in the bottom wall" <|
                \_ ->
                    let
                        preModel =
                            createModel

                        snake =
                            { createSnake | body = [ { row = 0, col = preModel.columns + 1 } ] }

                        model =
                            { preModel | snake = snake }
                    in
                    isSnakeAtWall model
                        |> Expect.true "Snake is in bottom wall"
            , test "snake is not at the wall" <|
                \_ ->
                    isSnakeAtWall createModel
                        |> Expect.false "Snake is not at the wall"
            ]
        , describe "isSnakeAtItself"
            [ test "empty snake" <|
                \_ ->
                    let
                        snake =
                            { createSnake | body = [] }

                        model =
                            { createModel | snake = snake }
                    in
                    isSnakeAtItself model
                        |> Expect.true "Snake doesnt have a body so end game"
            , test "snakes head is at its body" <|
                \_ ->
                    let
                        snake =
                            { createSnake | body = [ { row = 0, col = 0 }, { row = 1, col = 0 }, { row = 0, col = 0 }, { row = 2, col = 0 } ] }

                        model =
                            { createModel | snake = snake }
                    in
                    isSnakeAtItself model
                        |> Expect.true "Snakes head is at its body"
            , test "snakes isnt at itself" <|
                \_ ->
                    isSnakeAtItself createModel
                        |> Expect.false "Snake is good"
            ]
        , describe "isOppositeDirection"
            [ test "Left - Right" <|
                \_ ->
                    isOppositeDirection Left Right
                        |> Expect.true "Left and Right are opposites"
            , test "Right - Left" <|
                \_ ->
                    isOppositeDirection Right Left
                        |> Expect.true "Right and Left are opposites"
            , test "Up - Down" <|
                \_ ->
                    isOppositeDirection Up Down
                        |> Expect.true "Up and Down are opposites"
            , test "Down - Up" <|
                \_ ->
                    isOppositeDirection Down Up
                        |> Expect.true "Down and Up are opposites"
            , test "Up - Right" <|
                \_ ->
                    isOppositeDirection Up Right
                        |> Expect.false "Up and Right are opposites"
            ]
        , describe "isInvalidDirection"
            [ test "when the direction is the same" <|
                \_ ->
                    let
                        model =
                            createModel
                    in
                    isInvalidDirection model Right
                        |> Expect.true "The directions are both Right"
            , test "when the direction are direct opposite" <|
                \_ ->
                    let
                        model =
                            createModel
                    in
                    isInvalidDirection model Left
                        |> Expect.true "The new Direction is direct opposite Left"
            , test "when the direction is valid" <|
                \_ ->
                    let
                        model =
                            createModel
                    in
                    isInvalidDirection model Down
                        |> Expect.false "The new Direction is Down"
            ]
        ]
