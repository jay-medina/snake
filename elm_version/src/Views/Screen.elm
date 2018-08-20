module Views.Screen exposing (..)

import Html exposing (Html, button, div, program, text)
import Html.Attributes exposing (class)
import Model exposing (GameState(..), Model)
import Msg exposing (Msg)
import Views.Board exposing (board)
import Views.Score exposing (scoreboard)


playButton : Html Msg
playButton =
    div
        [ class "snake__start-screen-play-container" ]
        [ button [ class "snake__start-screen-play" ] [ text "Play" ] ]


start : Html Msg
start =
    div
        [ class "snake__start-screen" ]
        [ div [ class "snake__start-screen-title" ] [ text "Snake" ]
        , playButton
        ]


gameOver : Html Msg
gameOver =
    div
        [ class "snake__game-over-screen" ]
        [ div [ class "snake__game-over-title" ] [ text "Game Over" ]
        , playButton
        ]


screen : Model -> Html Msg
screen model =
    let
        boardView =
            board { row = model.row, col = model.col, apple = model.apple, snake = model.snake }

        scoreBoardView =
            scoreboard { current = model.score, highScore = model.highScore }
    in
    case model.gameState of
        Start ->
            div [ class "snake__app" ]
                [ scoreBoardView
                , boardView
                , start
                ]

        GameOver ->
            div [ class "snake__app" ]
                [ scoreBoardView
                , boardView
                , gameOver
                ]

        Run ->
            div [ class "snake__app" ]
                [ scoreBoardView
                , boardView
                ]
