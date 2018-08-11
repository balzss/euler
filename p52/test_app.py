def add_together(*args):
    return sum(args)

def test_add_together():
    assert add_together(1, 2) == 3
    assert add_together(2, 2, 2) == 6
    assert add_together(-2, 2, 3) == 3
    assert add_together(5) == 5
    assert add_together(5) == 5
