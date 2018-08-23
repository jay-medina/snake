module Update exposing (..)

import Model exposing (Direction(..), GameState(..), Model)
import Msg exposing (Msg(..))
import Util
    exposing
        ( initialApple
        , initialSnake
        , isSnakeAtPosition
        , isSnakeDead
        , randomizeApple
        , initialDirection
        )
import Debug


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        StartGame ->
            let
                updateModel =
                    { model | gameState = Run, snake = initialSnake, direction = initialDirection }
            in
                ( updateModel, randomizeApple model )

        NewApple ( row, col ) ->
            let
                newApple =
                    { row = row, col = col }
            in
                if isSnakeAtPosition newApple model.snake then
                    ( model, randomizeApple model )
                else
                    ( { model | apple = newApple }
                    , Cmd.none
                    )

        Tick time ->
            ( model |> updateSnakeDead |> updateSnakeMovement
            , Cmd.none
            )

        KeyUp direction ->
            ( { model | direction = direction }, Cmd.none )


updateSnakeDead : Model -> Model
updateSnakeDead model =
    if isSnakeDead model.snake model.row model.col then
        { model | gameState = GameOver }
    else
        model


updateSnakeMovement : Model -> Model
updateSnakeMovement model =
    let
        snake =
            model.snake |> Debug.log "snake"

        headOfSnake =
            List.head snake

        lastOneDropped =
            List.take (List.length snake - 1) snake
    in
        case headOfSnake of
            Just item ->
                case model.direction of
                    Right ->
                        { model | snake = { row = item.row, col = item.col + 1 } :: lastOneDropped }

                    Left ->
                        { model | snake = { row = item.row, col = item.col - 1 } :: lastOneDropped }

                    Up ->
                        { model | snake = { row = item.row - 1, col = item.col } :: lastOneDropped }

                    Down ->
                        { model | snake = { row = item.row + 1, col = item.col } :: lastOneDropped }

            Nothing ->
                model
