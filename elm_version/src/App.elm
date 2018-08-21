module App exposing (createApp)

import Html exposing (Html, div, program, text)
import Model exposing (Direction(..), GameState(..), Model)
import Msg exposing (Msg(..))
import Time exposing (every, second)
import Update exposing (update)
import Util exposing (initialApple, initialSnake, isSnakeAtPosition, randomizeApple)
import Views.Screen exposing (screen)


type alias AppOptions =
    { row : Int
    , col : Int
    }


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ if model.gameState == Run then
            every model.timer Tick
          else
            Sub.none
        ]


createApp : AppOptions -> Program Never Model Msg
createApp { row, col } =
    let
        initModel : Model
        initModel =
            { score = 0
            , highScore = 20
            , timer = 200
            , row = row
            , col = col
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
