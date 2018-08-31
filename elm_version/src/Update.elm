module Update exposing (..)

import Model exposing (Direction(..), GameState(..), Model)
import Msg exposing (Msg(..))
import Util
    exposing
        ( initialApple
        , initialSnake
        , isSnakeAtPosition
        , isSnakeAtApple
        , isSnakeDead
        , randomizeApple
        , initialDirection
        )


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
            if isSnakeDead model.snake model.row model.col then
                ( updateSnakeDead model, Cmd.none )
            else if isSnakeAtApple model.apple model.snake then
                updateSnakeEatingApple model
            else
                ( updateSnakeMovement model, Cmd.none )

        KeyUp direction ->
            ( updateDirection model direction, Cmd.none )


updateDirection : Model -> Direction -> Model
updateDirection model direction =
    if isOppositeDirection model.direction direction then
        model
    else
        { model | direction = direction }


isOppositeDirection : Direction -> Direction -> Bool
isOppositeDirection currentDirection newDirection =
    currentDirection
        == Left
        && newDirection
        == Right
        || currentDirection
        == Right
        && newDirection
        == Left
        || currentDirection
        == Up
        && newDirection
        == Down
        || currentDirection
        == Down
        && newDirection
        == Up


updateSnakeDead : Model -> Model
updateSnakeDead model =
    { model | gameState = GameOver }


updateSnakeEatingApple : Model -> ( Model, Cmd Msg )
updateSnakeEatingApple model =
    let
        lastItem =
            (model.snake |> List.reverse |> List.head)

        newModel =
            updateSnakeMovement model
    in
        case lastItem of
            Just item ->
                let
                    snakeWithItem =
                        (item :: (List.reverse newModel.snake)) |> List.reverse
                in
                    ( { newModel | snake = snakeWithItem }, randomizeApple newModel )

            Nothing ->
                ( newModel, Cmd.none )


updateSnakeMovement : Model -> Model
updateSnakeMovement model =
    let
        snake =
            model.snake

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
