module BoardTest exposing (suite)

import Expect exposing (Expectation)
import Fixtures exposing (createModel)
import Test exposing (..)
import Test.Html.Query as Query
import Test.Html.Selector as Selector
import Views.Board exposing (..)


suite : Test
suite =
    describe "Board"
        [ describe "mapColumnClassName"
            [ test "Apple" <|
                \_ ->
                    mapColumnClassName Apple
                        |> Expect.equal "snake__board-col snake__board-col-apple"
            , test "Snaker" <|
                \_ ->
                    mapColumnClassName Snake
                        |> Expect.equal "snake__board-col snake__board-col-snake"
            , test "Empty position" <|
                \_ ->
                    mapColumnClassName None
                        |> Expect.equal "snake__board-col"
            ]
        , describe "col"
            [ test "Column" <|
                \_ ->
                    let
                        result =
                            col Snake
                    in
                    result
                        |> Query.fromHtml
                        |> Query.has [ Selector.class "snake__board-col-snake" ]
            ]
        , describe "getFilled"
            [ test "grid item is a part of the snake" <|
                \_ ->
                    getFilled createModel { row = 0, col = 1 }
                        |> Expect.equal Snake
            , test "grid item is the apple" <|
                \_ ->
                    getFilled createModel { row = 4, col = 4 }
                        |> Expect.equal Apple
            , test "grid item is an empty space" <|
                \_ ->
                    getFilled createModel { row = 8, col = 1 }
                        |> Expect.equal None
            ]
        , describe "row"
            [ test "creates a board row" <|
                \_ ->
                    let
                        model =
                            createModel

                        result =
                            row model 2

                        columnQuery el =
                            el
                                |> Query.findAll [ Selector.class "snake__board-col" ]
                                |> Query.count (Expect.equal model.columns)
                    in
                    result
                        |> Query.fromHtml
                        |> Expect.all
                            [ Query.has [ Selector.class "snake__board-row" ]
                            , columnQuery
                            ]
            ]
        , describe "board"
            [ test "creates the board" <|
                \_ ->
                    let
                        model =
                            createModel

                        result =
                            board model

                        rowQuery el =
                            el
                                |> Query.findAll [ Selector.class "snake__board-row" ]
                                |> Query.count (Expect.equal model.rows)
                    in
                    result
                        |> Query.fromHtml
                        |> Expect.all
                            [ Query.has [ Selector.class "snake__board" ]
                            , rowQuery
                            ]
            ]
        ]
