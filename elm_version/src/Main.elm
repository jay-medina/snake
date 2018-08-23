module Main exposing (..)

import Browser
import Model exposing (Model, GameState(..), Direction(..))
import Msg exposing (Msg)
import Util exposing (initialSnake, initialApple, initialDirection)
import Views.Screen exposing (screen)
import Update exposing (update)
import Subscriptions exposing (subscriptions)


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
            , direction = initialDirection
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
