module TransitionScreenTest exposing (suite)

import Expect exposing (Expectation)
import Fixtures exposing (createModel)
import Html exposing (span)
import Test exposing (..)
import Test.Html.Event as Event
import Test.Html.Query as Query
import Test.Html.Selector as Selector
import Types exposing (GameState(..), Msg(..))
import Views.TransitionScreen exposing (..)


suite : Test
suite =
    describe "TransitionScreen"
        [ test "when the game is running" <|
            \_ ->
                let
                    model =
                        { createModel | gameState = Running }

                    result =
                        transitionScreen model
                in
                result
                    |> Query.fromHtml
                    |> Query.contains [ span [] [] ]
        , describe "when the game is showing the start screen"
            [ test "the game displays the start splash screen" <|
                \_ ->
                    let
                        model =
                            { createModel | gameState = Start }

                        result =
                            transitionScreen model

                        titleQuery el =
                            el
                                |> Query.find [ Selector.class "snake__start-screen-title" ]
                                |> Query.has [ Selector.text "Snake" ]

                        buttonQuery =
                            Query.contains [ playbutton StartGame ]
                    in
                    result
                        |> Query.fromHtml
                        |> Expect.all
                            [ Query.has [ Selector.class "snake__start-screen" ]
                            , titleQuery
                            , buttonQuery
                            ]
            , test "when the play button is clicked, it starts the game" <|
                \_ ->
                    let
                        model =
                            { createModel | gameState = Start }

                        result =
                            transitionScreen model

                        getPlayBtn =
                            Query.find [ Selector.class "snake__start-screen-play" ]
                    in
                    result
                        |> Query.fromHtml
                        |> getPlayBtn
                        |> Event.simulate Event.click
                        |> Event.expect StartGame
            ]
        , describe "when the game is showing the gameover screen"
            [ test "the game displays the gameover splash screen" <|
                \_ ->
                    let
                        model =
                            { createModel | gameState = GameOver }

                        result =
                            transitionScreen model

                        titleQuery el =
                            el
                                |> Query.find [ Selector.class "snake__game-over-title" ]
                                |> Query.has [ Selector.text "Game Over" ]

                        buttonQuery =
                            Query.contains [ playbutton RestartGame ]
                    in
                    result
                        |> Query.fromHtml
                        |> Expect.all
                            [ Query.has [ Selector.class "snake__game-over-screen" ]
                            , titleQuery
                            , buttonQuery
                            ]
            , test "when the play button is clicked, it restarts the game" <|
                \_ ->
                    let
                        model =
                            { createModel | gameState = GameOver }

                        result =
                            transitionScreen model

                        getPlayBtn =
                            Query.find [ Selector.class "snake__start-screen-play" ]
                    in
                    result
                        |> Query.fromHtml
                        |> getPlayBtn
                        |> Event.simulate Event.click
                        |> Event.expect RestartGame
            ]
        ]
