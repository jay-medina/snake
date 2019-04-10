module Views.Playingarea exposing (playingarea)

import Html exposing (..)
import Types exposing (Model, Msg)
import Views.Board exposing (board)
import Views.Scoreboard exposing (scoreboard)
import Views.TransitionScreen exposing (transitionScreen)


playingarea : Model -> Html Msg
playingarea model =
    div []
        [ scoreboard model
        , board model
        , transitionScreen model
        ]
