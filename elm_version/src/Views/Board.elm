module Views.Board exposing (board)

import Html exposing (Html, div)
import Html.Attributes exposing (class)


type alias BoardProps =
    { row : Int
    , col : Int
    }


boardcol : Html msg
boardcol =
    div [ class "snake__board-col" ] []


boardrow : Int -> Html msg
boardrow col =
    div
        [ class "snake__board-row" ]
        (List.repeat col boardcol)


board : BoardProps -> Html msg
board { row, col } =
    div
        [ class "snake__board" ]
        (List.repeat row (boardrow col))
