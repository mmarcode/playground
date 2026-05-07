from app.algorithms.reverse_string import reverse_string

def test_reverse_string() -> None:
    assert reverse_string("Hello, World!") == "!dlroW ,olleH"
    assert reverse_string("Python") == "nohtyP"
    assert reverse_string("") == ""
    assert reverse_string("A") == "A"
