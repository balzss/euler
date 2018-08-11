#!/usr/bin/env runhaskell

import Data.List
import Data.Maybe

main :: IO()
main = do
    contents <- getContents
    putStrLn $ show $ sum $ map wordValueIfTri . groupBy (\a b -> b /= ',') . filter (/='"') $ contents
    -- putStrLn $ show $ isWordTri "SKY"

isTri :: Int -> Bool
isTri n = (underSquare * (succ underSquare)) == (2*n)
    where underSquare = floor $ sqrt $ fromIntegral $ 2 * n

wordValue :: String -> Int
wordValue w = sum [succ $ fromJust $ elemIndex c ['A'..'Z'] | c <- w, c /= ',']

isWordTri :: String -> Bool
isWordTri w = isTri $ wordValue $ w

wordValueIfTri :: String -> Int
wordValueIfTri w
    | isWordTri w = wordValue w
    | otherwise = 0
