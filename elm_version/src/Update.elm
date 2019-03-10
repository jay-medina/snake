module Update exposing (init, update)

import Random
import Time exposing (posixToMillis)
import Types exposing (Direction(..), GameState(..), GridItem, Model, Msg(..), Snake)
import Util exposing (isInvalidDirection, isSnakeAbleToMove, isSnakeAtPosition, isSnakeDead)



-- initial Model


init : Model
init =
    { currentscore = 0
    , highscore = 130
    , rows = 25
    , columns = 25
    , apple =
        { row = 4
        , col = 4
        }
    , snake =
        { body =
            [ { row = 8, col = 4 }
            , { row = 8, col = 3 }
            , { row = 8, col = 2 }
            ]
        , direction = Right
        , lastTimestamp = 0
        , incrementTimer = 150
        }
    , gameState = Start
    }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        StartGame ->
            ( { model | gameState = Running }, generateNewApple model )

        NewApplePosition ( x, y ) ->
            let
                invalidSpot =
                    isSnakeAtPosition model.snake.body { row = x, col = y }
            in
            if invalidSpot then
                ( model, generateNewApple model )

            else
                ( { model | apple = { row = x, col = y } }, Cmd.none )

        RestartGame ->
            update StartGame { init | highscore = model.highscore }

        Tick time ->
            let
                timestamp =
                    posixToMillis time
            in
            if isSnakeDead model then
                ( { model | gameState = GameOver }, Cmd.none )

            else if isSnakeAtPosition model.snake.body model.apple then
                let
                    newModel =
                        model |> updateTimer |> updateScore |> increaseSnakeSize
                in
                ( newModel, generateNewApple newModel )

            else if isSnakeAbleToMove model.snake timestamp then
                ( { model | snake = updateSnake model timestamp }, Cmd.none )

            else
                ( model, Cmd.none )

        UpdateDirection newDirection ->
            let
                { snake } =
                    model

                currentDirection =
                    model.snake.direction
            in
            if isInvalidDirection model newDirection then
                ( model, Cmd.none )

            else
                ( { model | snake = updatedSnakeDirection model newDirection }
                , Cmd.none
                )

        NoOp ->
            ( model, Cmd.none )


increaseSnakeSize model =
    let
        { snake } =
            model

        lastPosition =
            List.drop (List.length snake.body - 1) snake.body

        updatedSnake =
            { snake
                | body = snake.body ++ lastPosition
            }
    in
    { model | snake = updatedSnake }


updateScore model =
    let
        newCurrentScore =
            model.currentscore + 10

        newHighScore =
            if model.highscore > newCurrentScore then
                model.highscore

            else
                newCurrentScore
    in
    { model
        | currentscore = newCurrentScore
        , highscore = newHighScore
    }


updateTimer : Model -> Model
updateTimer model =
    let
        { snake } =
            model

        { incrementTimer } =
            snake

        timerDecrementor =
            2.5

        timerThreshold =
            40

        newTimer =
            if incrementTimer <= timerThreshold then
                timerThreshold

            else
                incrementTimer - timerDecrementor

        newSnake =
            { snake
                | incrementTimer = newTimer
            }

        nTime =
            Debug.log "newTime" newSnake.incrementTimer
    in
    { model
        | snake = newSnake
    }


generateNewApple : Model -> Cmd Msg
generateNewApple model =
    Random.generate NewApplePosition (randomGridPosition model)


randomGridPosition : Model -> Random.Generator ( Int, Int )
randomGridPosition model =
    Random.pair (Random.int 0 (model.rows - 1)) (Random.int 0 (model.columns - 1))


updatedSnakeDirection : Model -> Direction -> Snake
updatedSnakeDirection { snake } newDirection =
    { snake | direction = newDirection }


updateSnake : Model -> Int -> Snake
updateSnake { snake } timestamp =
    { snake
        | body = moveSnake snake
        , lastTimestamp = timestamp
    }


moveSnake : Snake -> List GridItem
moveSnake snake =
    let
        { body, direction } =
            snake

        snakeHead =
            List.head body

        snakeRest =
            List.take (List.length body - 1) body
    in
    case ( snakeHead, snakeRest, direction ) of
        ( Nothing, _, _ ) ->
            []

        ( _, [], _ ) ->
            []

        ( Just h, rest, Right ) ->
            { row = h.row, col = h.col + 1 } :: rest

        ( Just h, rest, Left ) ->
            { row = h.row, col = h.col - 1 } :: rest

        ( Just h, rest, Up ) ->
            { row = h.row - 1, col = h.col } :: rest

        ( Just h, rest, Down ) ->
            { row = h.row + 1, col = h.col } :: rest
