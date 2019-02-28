module Update exposing (update)

import Time exposing (posixToMillis)
import Types exposing (Direction(..), GameState(..), GridItem, Model, Msg(..), Snake)
import Util exposing (isSnakeAbleToMove)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        StartGame ->
            ( { model | gameState = Running }, Cmd.none )

        Tick time ->
            let
                timestamp =
                    posixToMillis time
            in
            if isSnakeAbleToMove model.snake timestamp then
                ( { model | snake = updateSnake model timestamp }, Cmd.none )

            else
                ( model, Cmd.none )


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
            List.append [ { row = h.row, col = h.col + 1 } ] rest

        ( Just h, rest, Left ) ->
            List.append [ { row = h.row, col = h.col - 1 } ] rest

        ( Just h, rest, Up ) ->
            List.append [ { row = h.row - 1, col = h.col } ] rest

        ( Just h, rest, Down ) ->
            List.append [ { row = h.row + 1, col = h.col } ] rest
