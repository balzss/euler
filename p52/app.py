#!/usr/bin/env python3
# It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.
# Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.
def same_digits(*args):
    base = sorted(str(args[0]))
    for a in args[1:]:
        if sorted(str(a)) != base:
            return False
    return True

i = 1
j = 0
while j < 1:
    if same_digits(*[i*n for n in range(1, 7)]):
        print(i)
        j += 1
    i += 1
