module Main exposing (main)

import Browser
import Browser.Events exposing (onAnimationFrame)
import Html exposing (..)
import Html.Attributes exposing (..)
import Types exposing (Direction(..), GameState(..), Model, Msg(..))
import Update exposing (update)
import Views.Board exposing (board)
import Views.Scoreboard exposing (scoreboard)
import Views.TransitionScreen exposing (transitionScreen)



-- initial Model


init : () -> ( Model, Cmd Msg )
init () =
    ( { currentscore = 0
      , highscore = 130
      , rows = 25
      , columns = 25
      , apple =
            { row = 4
            , col = 4
            }
      , snake =
            { body =
                [ { row = 8, col = 4 }
                , { row = 8, col = 3 }
                , { row = 8, col = 2 }
                ]
            , direction = Right
            , lastTimestamp = 0
            , incrementTimer = 150
            }
      , gameState = Start
      }
    , Cmd.none
    )



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
