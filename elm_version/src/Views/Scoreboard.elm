module Views.Scoreboard exposing (scoreboard)

import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Types exposing (Model, Msg)


score : String -> Int -> Html Msg
score title number =
    div [ class "snake__score" ]
        [ div [ class "snake__score-title" ] [ text title ]
        , div [ class "snake__score-number" ] [ text <| String.fromInt number ]
        ]


scoreboard : Model -> Html Msg
scoreboard { currentscore, highscore } =
    div [ class "snake__scoreboard" ]
        [ score "score" currentscore
        , score "high" highscore
        ]
