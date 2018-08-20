module App exposing (createApp)

import Html exposing (Html, div, program, text)
import Model exposing (GameState(..), Model)
import Msg exposing (Msg)
import Util exposing (initialApple, initialSnake, isSnakeAtPosition, randomizeApple)
import Views.Screen exposing (screen)


type alias AppOptions =
    { row : Int
    , col : Int
    }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Msg.Play ->
            let
                updateModel =
                    { model | gameState = Run }
            in
            ( updateModel, randomizeApple model )

        Msg.NewApple ( row, col ) ->
            let
                newApple =
                    { row = row, col = col }
            in
            if isSnakeAtPosition newApple model.snake then
                ( model, randomizeApple model )
            else
                ( { model | apple = newApple }
                , Cmd.none
                )


view : Model -> Html Msg
view =
    screen


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
            , apple = initialApple
            , snake = initialSnake
            , gameState = Start
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
