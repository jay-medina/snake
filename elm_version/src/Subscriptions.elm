module Subscriptions exposing (subscriptions)

import Browser.Events exposing (onAnimationFrame, onKeyDown)
import Json.Decode as Decode
import Types exposing (..)


subscriptions : Model -> Sub Msg
subscriptions model =
    if model.gameState == Running then
        Sub.batch
            [ onKeyDown <| decodeKeyboardPress model
            , onAnimationFrame Tick
            ]

    else
        Sub.none


decodeKeyboardPress : Model -> Decode.Decoder Msg
decodeKeyboardPress model =
    let
        toDirection string =
            let
                item =
                    Debug.log string "item"
            in
            case string of
                "a" ->
                    UpdateDirection Left

                "w" ->
                    UpdateDirection Up

                "d" ->
                    UpdateDirection Right

                "s" ->
                    UpdateDirection Down

                _ ->
                    NoOp
    in
    Decode.map toDirection (Decode.field "key" Decode.string)
