module Msg exposing (..)

import Time exposing (Time)


type Msg
    = StartGame
    | NewApple ( Int, Int )
    | Tick Time
