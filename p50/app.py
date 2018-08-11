# The prime 41, can be written as the sum of six consecutive primes:
# 41 = 2 + 3 + 5 + 7 + 11 + 13
# This is the longest sum of consecutive primes that adds to a prime below one-hundred.
# The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.
# Which prime, below one-million, can be written as the sum of the most consecutive primes?

def is_prime(n):
    return next((False for x in range(2, n//2+1) if n % x == 0), True)

def get_longes(primes):
    for shrink in range(len(primes)):
        sub = primes[shrink:]
        if is_prime(sum(sub)):
            return sub
        for offset in range(shrink+1):
            sub = primes[shrink-offset:-1*(offset+1)]
            if is_prime(sum(sub)):
                return sub

for until in range(3000, 4000):
    primes = [2] + [x for x in range(3, until, 2) if is_prime(x)]


    longest = get_longes(primes)
    print(longest)
    print(sum(longest))
    print(len(longest))
    print('\n---\n')
