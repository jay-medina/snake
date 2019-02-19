module Types exposing (Model, Msg(..))


type alias Model =
    { currentscore : Int
    , highscore : Int
    , rows : Int
    , columns : Int
    }


type Msg
    = NoOp
