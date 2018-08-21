module Model exposing (..)


type GameState
    = Start
    | Run
    | GameOver


type Direction
    = Left
    | Right
    | Up
    | Down


type alias Model =
    { score : Int
    , highScore : Int
    , row : Int
    , col : Int
    , apple : Apple
    , snake : Snake
    , gameState : GameState
    , direction : Direction
    , timer : Float
    }


type alias Apple =
    GridItem


type alias Snake =
    List GridItem


type alias GridItem =
    { row : Int
    , col : Int
    }
