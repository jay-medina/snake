module Main exposing (main)

import Browser
import Subscriptions exposing (..)
import Types exposing (Model, Msg)
import Update exposing (init, update)
import Views.Playingarea exposing (playingarea)



-- Main View


initForMain : () -> ( Model, Cmd Msg )
initForMain _ =
    ( init, Cmd.none )


main =
    Browser.element
        { init = initForMain
        , view = playingarea
        , update = update
        , subscriptions = subscriptions
        }
