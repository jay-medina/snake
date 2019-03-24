module Views.TransitionScreen exposing (transitionScreen, playbutton)

import Html exposing (..)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)
import Types exposing (GameState(..), Model, Msg(..))


playbutton : Msg -> Html Msg
playbutton msg =
    div [ class "snake__start-screen-play-container" ]
        [ button [ class "snake__start-screen-play", onClick msg ] [ text "Play" ]
        ]


start =
    div [ class "snake__start-screen" ]
        [ div [ class "snake__start-screen-title" ] [ text "Snake" ]
        , playbutton StartGame
        ]


gameover =
    div [ class "snake__game-over-screen" ]
        [ div [ class "snake__game-over-title" ] [ text "Game Over" ]
        , playbutton RestartGame
        ]


transitionScreen : Model -> Html Msg
transitionScreen model =
    case model.gameState of
        Start ->
            start

        GameOver ->
            gameover

        Running ->
            span [] []
