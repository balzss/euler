# If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
# If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
# NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
tens = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
hundreds = [''] + [x + 'hundredand' for x in ones[1:]]

total = 0

for teens_place in teens:
    total += len(teens_place)
    print(teens_place)

for hunders_place in hundreds:
    for teens_place in teens:
        total += len('%s%s' % (hunders_place, teens_place))
        print('%s%s' % (hunders_place, teens_place))
    for tens_place in tens:
        for ones_place in ones:
            total += len('%s%s%s' % (hunders_place, tens_place, ones_place))
            print('%s%s%s' % (hunders_place, tens_place, ones_place))

total += len('onethousand')
total -= 9 * len('and')
print(total)
