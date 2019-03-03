module Update exposing (init, update)

import Time exposing (posixToMillis)
import Types exposing (Direction(..), GameState(..), GridItem, Model, Msg(..), Snake)
import Util exposing (isOppositeDirection, isSnakeAbleToMove, isSnakeDead)



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
            , lastTimestamp = 0
            , incrementTimer = 250
            }
      , gameState = Start
      }
    , Cmd.none
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        StartGame ->
            ( { model | gameState = Running }, Cmd.none )

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
                ( { model | snake = updateSnakeTimestamp model timestamp }, Cmd.none )

            else
                ( model, Cmd.none )

        UpdateDirection newDirection ->
            let
                currentDirection =
                    model.snake.direction
            in
            if currentDirection == newDirection then
                ( model, Cmd.none )

            else if isOppositeDirection currentDirection newDirection then
                ( model, Cmd.none )

            else
                ( { model | snake = updatedSnakeDirection model newDirection }
                , Cmd.none
                )

        NoOp ->
            ( model, Cmd.none )


updatedSnakeDirection : Model -> Direction -> Snake
updatedSnakeDirection { snake } newDirection =
    { snake | direction = newDirection }


updateSnakeTimestamp : Model -> Int -> Snake
updateSnakeTimestamp { snake } timestamp =
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
            List.append [ { row = h.row, col = h.col + 1 } ] rest

        ( Just h, rest, Left ) ->
            List.append [ { row = h.row, col = h.col - 1 } ] rest

        ( Just h, rest, Up ) ->
            List.append [ { row = h.row - 1, col = h.col } ] rest

        ( Just h, rest, Down ) ->
            List.append [ { row = h.row + 1, col = h.col } ] rest
