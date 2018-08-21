module Main exposing (..)

import App exposing (createApp)
import Model exposing (Model)
import Msg exposing (Msg)


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ if model.gameState == Run then
            every model.timer Tick
          else
            Sub.none
        ]


main : Program Never Model Msg
main =
    let
        initModel : Model
        initModel =
            { score = 0
            , highScore = 20
            , timer = 200
            , row = 25
            , col = 25
            , apple = initialApple
            , snake = initialSnake
            , gameState = Start
            , direction = Right
            }

        init : ( Model, Cmd Msg )
        init =
            ( initModel, Cmd.none )
    in
        Html.program
            { init = init
            , view = screen
            , update = update
            , subscriptions = subscriptions
            }
