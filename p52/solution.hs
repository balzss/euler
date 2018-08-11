#!/usr/bin/env runhaskell

import Data.List

main :: IO()
main = print $ checkAll 1 6

allSame :: Integer -> Integer -> Bool
allSame base upTo =
    length (takeWhile (==sortedBase) (map sorter [2..upTo])) >= (pred (fromIntegral upTo))
    where sortedBase = sort . show $ base
          sorter n = sort . show $ base * n

checkAll :: Integer -> Integer -> Integer
checkAll n upTo
    | allSame n upTo = n
    | otherwise = checkAll (n + 1) upTo
