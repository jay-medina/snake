module Main exposing (main)

import Browser exposing (sandbox)
import Html exposing (..)
import Html.Attributes exposing (..)
import Types exposing (Direction(..), GameState(..), Model, Msg)
import Views.Board exposing (board)
import Views.Scoreboard exposing (scoreboard)
import Views.TransitionScreen exposing (transitionScreen)



-- initial Model


init : Model
init =
    { currentscore = 0
    , highscore = 130
    , rows = 25
    , columns = 25
    , apple =
        { row = 4
        , col = 4
        }
    , snake =
        { body =
            [ { row = 8, col = 8 }
            , { row = 8, col = 7 }
            , { row = 8, col = 6 }
            ]
        , direction = Right
        }
    , gameState = Start
    }



-- Update


update : Msg -> Model -> Model
update msg model =
    model



-- Main View


playingarea : Model -> Html Msg
playingarea model =
    div []
        [ scoreboard model
        , board model
        , transitionScreen model
        ]


main =
    Browser.sandbox
        { init = init
        , view = playingarea
        , update = update
        }
