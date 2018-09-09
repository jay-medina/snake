module Subscriptions exposing (subscriptions)

import Model exposing (Model, GameState(..), Direction(..))
import Msg exposing (Msg)
import Browser.Events exposing (onKeyDown)
import Time exposing (every)
import Json.Decode as Decode


keyDecoder : Decode.Decoder String
keyDecoder =
    Decode.field "key" Decode.string


mapStringToDirection : Model -> String -> Msg
mapStringToDirection model keyFired =
    let
        newDirection =
            if keyFired == "ArrowLeft" || keyFired == "a" then
                Left
            else if keyFired == "ArrowRight" || keyFired == "d" then
                Right
            else if keyFired == "ArrowDown" || keyFired == "s" then
                Down
            else if keyFired == "ArrowUp" || keyFired == "w" then
                Up
            else
                model.nextDirection
    in
        Msg.KeyUp newDirection


mapper : Model -> Decode.Decoder Msg
mapper model =
    Decode.map (mapStringToDirection model) keyDecoder


tickGameForward : Model -> Sub Msg
tickGameForward model =
    if model.gameState == Run then
        every model.timer Msg.Tick
    else
        Sub.none


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ onKeyDown (mapper model)
        , tickGameForward model
        ]
