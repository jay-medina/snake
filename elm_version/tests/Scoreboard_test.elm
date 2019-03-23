module Scoreboard_test exposing (suite)

import Expect exposing (Expectation)
import Fixtures exposing (createModel)
import Html exposing (Html, div)
import Test exposing (Test, describe, test)
import Test.Html.Query as Query exposing (Single)
import Test.Html.Selector as Selector
import Views.Scoreboard exposing (..)


suite : Test
suite =
    describe "Scoreboard module"
        [ describe "score"
            [ test "it displays the title and number" <|
                \_ ->
                    let
                        title =
                            "high"

                        number =
                            100

                        result =
                            score title number

                        titleQuery el =
                            el
                                |> Query.find [ Selector.class "snake__score-title" ]
                                |> Query.has [ Selector.text title ]

                        numberQuery el =
                            el
                                |> Query.find [ Selector.class "snake__score-number" ]
                                |> Query.has [ Selector.text (String.fromInt number) ]
                    in
                    result
                        |> Query.fromHtml
                        |> Expect.all
                            [ titleQuery
                            , numberQuery
                            ]
            ]
        , describe "scoreboard"
            [ test "renders the scoreboard" <|
                \_ ->
                    let
                        model =
                            { createModel | currentscore = 10, highscore = 120 }

                        result =
                            scoreboard model
                    in
                    result
                        |> Query.fromHtml
                        |> Expect.all
                            [ Query.has [ Selector.class "snake__scoreboard" ]
                            , Query.contains
                                [ score "score" 10
                                , score "high" 120
                                ]
                            ]
            ]
        ]
