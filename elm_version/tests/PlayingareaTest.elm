module PlayingareaTest exposing (suite)

import Expect exposing (Expectation)
import Fixtures exposing (createModel)
import Test exposing (..)
import Test.Html.Query as Query
import Test.Html.Selector as Selector
import Views.Board exposing (board)
import Views.Playingarea exposing (..)
import Views.Scoreboard exposing (scoreboard)
import Views.TransitionScreen exposing (transitionScreen)


suite : Test
suite =
    describe "Playing area"
        [ test "renders the scoreboard" <|
            \_ ->
                let
                    model =
                        createModel
                in
                playingarea model
                    |> Query.fromHtml
                    |> Query.contains
                        [ scoreboard model
                        ]
        , test "renders the board" <|
            \_ ->
                let
                    model =
                        createModel
                in
                playingarea model
                    |> Query.fromHtml
                    |> Query.contains
                        [ board model
                        ]
        , test "renders the transitionscreen" <|
            \_ ->
                let
                    model =
                        createModel
                in
                playingarea model
                    |> Query.fromHtml
                    |> Query.contains
                        [ transitionScreen model
                        ]
        ]
