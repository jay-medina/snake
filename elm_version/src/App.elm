module App exposing (createApp)

import Html exposing (Html, div, program, text)
import Html.Attributes exposing (class)
import Model exposing (Model)
import Msg exposing (Msg)
import Views.Board exposing (board)
import Views.Score exposing (scoreboard)


type alias AppOptions =
    { row : Int
    , col : Int
    }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Msg.Nothing ->
            ( model, Cmd.none )


view : Model -> Html Msg
view model =
    div [ class "snake__app" ]
        [ scoreboard { current = model.score, highScore = model.highScore }
        , board { row = model.row, col = model.col, apple = model.apple, snake = model.snake }
        ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


createApp : AppOptions -> Program Never Model Msg
createApp { row, col } =
    let
        initModel : Model
        initModel =
            { score = 0
            , highScore = 20
            , row = row
            , col = col
            , apple = { row = 4, col = 4 }
            , snake = [ { row = 14, col = 10 }, { row = 14, col = 11 }, { row = 14, col = 12 } ]
            }

        init : ( Model, Cmd Msg )
        init =
            ( initModel, Cmd.none )
    in
    Html.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
