module Msg exposing (..)

import Time exposing (Posix)


type Msg
    = StartGame
    | NewApple ( Int, Int )
    | Tick Posix
