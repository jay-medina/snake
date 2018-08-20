module Model exposing (..)


type GameState
    = Start
    | Run
    | GameOver


type alias Model =
    { score : Int
    , highScore : Int
    , row : Int
    , col : Int
    , apple : Apple
    , snake : Snake
    , gameState : GameState
    }


type alias Apple =
    GridItem


type alias Snake =
    List GridItem


type alias GridItem =
    { row : Int
    , col : Int
    }
