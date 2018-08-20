module Main exposing (..)

import Components.Score exposing (scoreboard)
import Html exposing (Html, div, program, text)
import Html.Attributes exposing (class)


type Msg
    = Nothing


type alias Model =
    String


init : ( Model, Cmd Msg )
init =
    ( "hello", Cmd.none )


view : Model -> Html Msg
view model =
    div [ class "snake__app" ]
        [ scoreboard { current = 20, highScore = 25 }
        , text model
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
