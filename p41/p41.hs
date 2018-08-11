#!/usr/bin/env runhaskell

import Data.List

main :: IO()
main = putStrLn $ show $ lookFor 9

isPrime :: Integer -> Bool
isPrime n = (==) upTo . last $ 2:(takeWhile (\x -> mod n x /= 0) [2..upTo])
    where upTo = (div n 2) + 1

lookFor :: Integer -> Integer
lookFor n
    | n == 0 = 0
    | null primeList = lookFor $ n - 1
    | otherwise = head primeList
    where panList = reverse . sort $ map read (permutations $ concatMap show [1..n])
          primeList = dropWhile (not . isPrime) panList
