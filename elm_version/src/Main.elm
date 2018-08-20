module Main exposing (..)

import App exposing (createApp)
import Model exposing (Model)
import Msg exposing (Msg)


main : Program Never Model Msg
main =
    createApp { row = 25, col = 25 }
