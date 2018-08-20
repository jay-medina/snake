module Views.Board exposing (board)

import Html exposing (Html, div)
import Html.Attributes exposing (class)
import Model exposing (Apple)
import Util exposing (isTheApple)


type alias BoardProps =
    { row : Int
    , col : Int
    , apple : Apple
    }


type Filled
    = Apple
    | Snake
    | Nothing


boardcol : Filled -> Html msg
boardcol filled =
    let
        className =
            "snake__board-col"

        colClassName =
            case filled of
                Apple ->
                    className ++ " snake__board-col-apple"

                Snake ->
                    className ++ " snake__board-col-snake"

                Nothing ->
                    className
    in
    div [ class colClassName ] []


boardrow : BoardProps -> Html msg
boardrow { apple, row, col } =
    let
        getFilled col =
            if isTheApple apple { row = row, col = col } then
                Apple
            else
                Nothing
    in
    div
        [ class "snake__board-row" ]
        (List.map
            (\x -> boardcol <| getFilled x)
            (List.range 0 col)
        )


board : BoardProps -> Html msg
board props =
    div
        [ class "snake__board" ]
        (List.map
            (\r -> boardrow <| { props | row = r })
            (List.range 0 props.row)
        )
