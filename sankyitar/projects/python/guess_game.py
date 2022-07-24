secret_number = 7
guess_count = 0
guess_limit = 3

name = input('Type in your Name: ')

print("""

    HELLO!! Welcome to Guess game, """,name,"""

    You shall guess a number in this game
    -> It is a single digit number.
    -> You have three chances to try.
    -> Wish you're lucky.

""")

while guess_count < guess_limit:

    guess = int(input('Guess a number: '))

    if guess == secret_number:
        print('Congratulations!!! You are correct,',name,'.')
        break

    else:
        print('Your choice is not correct. You have ',2-guess_count," chance.\n")
        guess_count = guess_count + 1

else:

    print('Sorry, you fail,',name,'. Wish you good luck next time!')
    