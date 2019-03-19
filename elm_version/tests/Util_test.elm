module Util_test exposing (suite)

import Expect exposing (Expectation)
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
        ]


createSnakeBody : List GridItem
createSnakeBody =
    [ { row = 0, col = 0 }
    , { row = 0, col = 1 }
    , { row = 0, col = 2 }
    ]
