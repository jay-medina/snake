module Main exposing (main)

import Browser exposing (sandbox)
import Html exposing (..)
import Html.Attributes exposing (..)
import Types exposing (Direction(..), Model, Msg)
import Views.Board exposing (board)
import Views.Scoreboard exposing (scoreboard)


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
        { body = []
        , direction = Right
        }
    }


update : Msg -> Model -> Model
update msg model =
    model


playingarea : Model -> Html Msg
playingarea model =
    div []
        [ scoreboard model
        , board model
        ]


main =
    Browser.sandbox
        { init = init
        , view = playingarea
        , update = update
        }
