module Components.Score exposing (ScoreboardProps, scoreboard)

import Html exposing (Html, div, text)
import Html.Attributes exposing (class)


type alias ScoreboardProps =
    { current : Int
    , highScore : Int
    }


score : String -> Int -> Html msg
score title num =
    div [ class "snake__score" ]
        [ div [ class "snake__score-title" ] [ text title ]
        , div [ class "snake__score-number" ] [ text <| toString num ]
        ]


scoreboard : ScoreboardProps -> Html msg
scoreboard { current, highScore } =
    div [ class "snake__scoreboard" ]
        [ score "score" current
        , score "high" highScore
        ]
