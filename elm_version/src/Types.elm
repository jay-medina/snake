module Types exposing (Direction(..), Model, Msg(..))


type Direction
    = Left
    | Right
    | Up
    | Down


type alias GridItem =
    { row : Int
    , col : Int
    }


type alias Apple =
    GridItem


type alias Snake =
    { body : List GridItem
    , direction : Direction
    }


type alias Model =
    { currentscore : Int
    , highscore : Int
    , rows : Int
    , columns : Int
    , apple : Apple
    , snake : Snake
    }


type Msg
    = NoOp
