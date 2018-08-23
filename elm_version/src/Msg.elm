module Msg exposing (..)

import Time exposing (Posix)
import Model exposing (Direction)


type Msg
    = StartGame
    | NewApple ( Int, Int )
    | Tick Posix
    | KeyUp Direction
