module Update exposing (init, update)

import Random
import Time exposing (posixToMillis)
import Types exposing (Direction(..), GameState(..), GridItem, Model, Msg(..), Snake)
import Util exposing (isInvalidDirection, isSnakeAbleToMove, isSnakeAtPosition, isSnakeDead)



-- initial Model


init : () -> ( Model, Cmd Msg )
init () =
    ( { currentscore = 0
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
            , pendingDirection = Nothing
            , lastTimestamp = 0
            , incrementTimer = 150
            }
      , gameState = Start
      }
    , Cmd.none
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        StartGame ->
            ( { model | gameState = Running }, generateRandomGridPosition model )

        NewApplePosition ( x, y ) ->
            let
                invalidSpot =
                    isSnakeAtPosition model.snake.body { row = x, col = y }
            in
            if invalidSpot then
                ( model, generateRandomGridPosition model )

            else
                ( { model | apple = { row = x, col = y } }, Cmd.none )

        RestartGame ->
            let
                ( m, _ ) =
                    init ()
            in
            update StartGame m

        Tick time ->
            let
                timestamp =
                    posixToMillis time
            in
            if isSnakeDead model then
                ( { model | gameState = GameOver }, Cmd.none )

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
            if snake.pendingDirection /= Nothing && isInvalidDirection model newDirection then
                -- Pending Direction hasn't been read but new one came in
                -- Resets the direction because the new one is invalid
                ( { model | snake = updatedSnakeDirection model snake.direction }, Cmd.none )

            else if isInvalidDirection model newDirection then
                ( model, Cmd.none )

            else
                ( { model | snake = updatedSnakeDirection model newDirection }
                , Cmd.none
                )

        NoOp ->
            ( model, Cmd.none )


generateRandomGridPosition : Model -> Cmd Msg
generateRandomGridPosition model =
    Random.generate NewApplePosition (randomGridPosition model)


randomGridPosition : Model -> Random.Generator ( Int, Int )
randomGridPosition model =
    Random.pair (Random.int 0 (model.rows - 1)) (Random.int 0 (model.columns - 1))


updatedSnakeDirection : Model -> Direction -> Snake
updatedSnakeDirection { snake } newDirection =
    { snake | pendingDirection = Just newDirection }


updateSnake : Model -> Int -> Snake
updateSnake { snake } timestamp =
    let
        newDirection =
            case snake.pendingDirection of
                Just d ->
                    d

                Nothing ->
                    snake.direction
    in
    { snake
        | body = moveSnake snake
        , lastTimestamp = timestamp
        , direction = newDirection
        , pendingDirection = Nothing
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
            List.append [ { row = h.row, col = h.col + 1 } ] rest

        ( Just h, rest, Left ) ->
            List.append [ { row = h.row, col = h.col - 1 } ] rest

        ( Just h, rest, Up ) ->
            List.append [ { row = h.row - 1, col = h.col } ] rest

        ( Just h, rest, Down ) ->
            List.append [ { row = h.row + 1, col = h.col } ] rest
