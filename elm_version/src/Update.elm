module Update exposing (..)

import Model exposing (Direction(..), GameState(..), Model)
import Msg exposing (Msg(..))
import Util
    exposing
        ( isSnakeAtPosition
        , isSnakeAtApple
        , isSnakeDead
        , randomizeApple
        , increment
        , initialModel
        )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        StartGame ->
            ( { initialModel | gameState = Run }, randomizeApple model )

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
                ( model |> updateCurrentDirection |> updateSnakeMovement, Cmd.none )

        KeyUp newDirection ->
            ( updateNextDirection model newDirection, Cmd.none )


updateNextDirection : Model -> Direction -> Model
updateNextDirection model newDirection =
    if isOppositeDirection model.nextDirection newDirection then
        model
    else
        { model | nextDirection = newDirection }


updateCurrentDirection : Model -> Model
updateCurrentDirection model =
    if isOppositeDirection model.nextDirection model.currentDirection then
        model
    else
        { model | currentDirection = model.nextDirection }


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

                    updatedModel =
                        { newModel
                            | snake = snakeWithItem
                            , score = increment newModel.score
                            , highScore = increment newModel.score
                            , timer = updateTimer newModel.timer
                        }
                in
                    ( updatedModel, randomizeApple updatedModel )

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
                case model.currentDirection of
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


updateTimer : Float -> Float
updateTimer timer =
    let
        decrementor =
            2.5

        threshold =
            40
    in
        if timer <= threshold then
            threshold
        else
            timer - decrementor
