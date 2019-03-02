module Main exposing (main)

import Browser
import Browser.Events exposing (onAnimationFrame)
import Html exposing (..)
import Html.Attributes exposing (..)
import Types exposing (Direction(..), GameState(..), Model, Msg(..))
import Update exposing (init, update)
import Views.Board exposing (board)
import Views.Scoreboard exposing (scoreboard)
import Views.TransitionScreen exposing (transitionScreen)



-- subscriptions


subscriptions : Model -> Sub Msg
subscriptions model =
    if model.gameState == Running then
        onAnimationFrame Tick

    else
        Sub.none



-- Main View


playingarea : Model -> Html Msg
playingarea model =
    div []
        [ scoreboard model
        , board model
        , transitionScreen model
        ]


main =
    Browser.element
        { init = init
        , view = playingarea
        , update = update
        , subscriptions = subscriptions
        }
