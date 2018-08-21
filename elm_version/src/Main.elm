module Main exposing (..)

import Browser
import Model exposing (Model, GameState(..), Direction(..))
import Msg exposing (Msg)
import Time exposing (every)
import Util exposing (initialSnake, initialApple)
import Views.Screen exposing (screen)
import Update exposing (update)


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ if model.gameState == Run then
            every model.timer Msg.Tick
          else
            Sub.none
        ]


main : Program Int Model Msg
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

        init : Int -> ( Model, Cmd Msg )
        init flags =
            ( initModel, Cmd.none )
    in
        Browser.element
            { init = init
            , view = screen
            , update = update
            , subscriptions = subscriptions
            }
