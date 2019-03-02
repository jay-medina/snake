module Types exposing (Direction(..), GameState(..), GridItem, Model, Msg(..), Snake)

import Time


type Direction
    = Left
    | Right
    | Up
    | Down


type GameState
    = Start
    | GameOver
    | Running


type alias GridItem =
    { row : Int
    , col : Int
    }


type alias Apple =
    GridItem


type alias Snake =
    { body : List GridItem
    , direction : Direction
    , lastTimestamp : Int
    , incrementTimer : Int
    }


type alias Model =
    { currentscore : Int
    , highscore : Int
    , rows : Int
    , columns : Int
    , apple : Apple
    , snake : Snake
    , gameState : GameState
    }


type Msg
    = StartGame
    | RestartGame
    | Tick Time.Posix
