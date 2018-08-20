module Model exposing (..)


type alias Model =
    { score : Int
    , highScore : Int
    , row : Int
    , col : Int
    , apple : Apple
    , snake : Snake
    }


type alias Apple =
    GridItem


type alias Snake =
    List GridItem


type alias GridItem =
    { row : Int
    , col : Int
    }
