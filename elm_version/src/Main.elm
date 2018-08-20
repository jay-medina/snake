module Main exposing (..)

import Html exposing (Html, div, program, text)
import Html.Attributes exposing (class)
import Views.Board exposing (board)
import Views.Score exposing (scoreboard)


type Msg
    = Nothing


type alias Model =
    { score : Int
    , highScore : Int
    , row : Int
    , col : Int
    }


initModel : Model
initModel =
    { score = 0
    , highScore = 20
    , row = 25
    , col = 25
    }


init : ( Model, Cmd Msg )
init =
    ( initModel, Cmd.none )


view : Model -> Html Msg
view model =
    div [ class "snake__app" ]
        [ scoreboard { current = model.score, highScore = model.highScore }
        , board { row = model.row, col = model.col }
        ]


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Nothing ->
            ( model, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
