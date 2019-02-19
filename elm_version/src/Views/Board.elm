module Views.Board exposing (board)

import Html exposing (..)
import Html.Attributes exposing (..)
import Types exposing (Model, Msg)


col : Model -> Html Msg
col model =
    div [ class "snake__board-col" ]
        []


row : Model -> Int -> Html Msg
row model currentRow =
    div [ class "snake__board-row" ] <|
        List.map (\_ -> col model)
            (List.range 0 model.columns)


toText numbers =
    List.map text
        (List.map String.fromInt numbers)


board : Model -> Html Msg
board model =
    div [ class "snake__board" ] <|
        List.map (row model)
            (List.range 0 model.rows)
