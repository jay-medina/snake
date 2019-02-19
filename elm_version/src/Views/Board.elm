module Views.Board exposing (board)

import Html exposing (..)
import Html.Attributes exposing (..)
import Types exposing (Model, Msg)

type Filled
    = Snake
    | Apple
    | None

getClassName : Filled -> String
getClassName filled =
    case filled of
        Apple ->
            "snake__board-col snake__board-col-apple"

        Snake ->
            "snake__board-col snake__board-col-snake"

        _ ->
            "snake__board-col"


col : Filled -> Html Msg
col filled =
    div [ class <| getClassName filled ]
        []


row : Model -> Int -> Html Msg
row model currentRow =
    div [ class "snake__board-row" ] <|
        List.map (\n -> col None)
            (List.range 0 model.columns)


board : Model -> Html Msg
board model =
    div [ class "snake__board" ] <|
        List.map (row model)
            (List.range 0 model.rows)
