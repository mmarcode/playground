def reverse_string(value: str) -> str:
    """
    Reverses the given string.

    Args:
        value (str): The string to reverse.

    Returns:
        str: The reversed string.
    """
    return value[::-1]



if __name__ == "__main__":
    print(reverse_string("Hello, World!"))
