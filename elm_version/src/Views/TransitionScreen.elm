module Views.TransitionScreen exposing (transitionScreen)

import Html exposing (..)
import Html.Attributes exposing (class)
import Types exposing (GameState(..), Model, Msg)


playbutton =
    div [ class "snake__start-screen-play-container" ]
        [ button [ class "snake__start-screen-play" ] [ text "Play" ]
        ]


start =
    div [ class "snake__start-screen" ]
        [ div [ class "snake__start-screen-title" ] [ text "Snake" ]
        , playbutton
        ]


gameover =
    div [ class "snake__game-over-screen" ]
        [ div [ class "snake__game-over-title" ] [ text "Game Over" ]
        , playbutton
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
