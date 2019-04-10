module Example exposing (suite)

import Expect exposing (Expectation)
import Test exposing (..)


suite : Test
suite =
    describe "Test Module"
        [ describe "String.reverse"
            [ test "reverses a known string" <|
                \_ ->
                    "ABCDEFG"
                        |> String.reverse
                        |> Expect.equal "GFEDCBA"
            ]
        ]
