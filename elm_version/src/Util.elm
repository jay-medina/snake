module Util exposing (isSnakeAtPosition, isTheApple)

import Model exposing (Apple, GridItem, Snake)


isAtPosition : GridItem -> GridItem -> Bool
isAtPosition item1 item2 =
    item1.row == item2.row && item1.col == item2.col


isTheApple : Apple -> GridItem -> Bool
isTheApple =
    isAtPosition


isSnakeAtPosition : GridItem -> Snake -> Bool
isSnakeAtPosition gridItem =
    List.any (isAtPosition gridItem)
