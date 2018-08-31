module Main exposing (..)

import Browser
import Model exposing (Model, GameState(..), Direction(..))
import Msg exposing (Msg)
import Util exposing (initialModel)
import Views.Screen exposing (screen)
import Update exposing (update)
import Subscriptions exposing (subscriptions)


main : Program Int Model Msg
main =
    let
        init : Int -> ( Model, Cmd Msg )
        init flags =
            ( initialModel, Cmd.none )
    in
        Browser.element
            { init = init
            , view = screen
            , update = update
            , subscriptions = subscriptions
            }
