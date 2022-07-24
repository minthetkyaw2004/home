user_command = ""

car_started = False

print("""
        Welcome to the car game!
        ------------------------
        You shall type in commands 
        to run the car or stop it!
        
    """)

while user_command != "quit":

    user_command = input('> ').lower()

    if user_command == "start":

        if car_started == False:
            print('The car is started...')
            car_started = True

        else:
            print('The car has already been started')

    elif user_command == "stop":

        if car_started == True:
            print('The car is stopped.')
            car_started = False

        else:
            print('The car has already been stopped')

    elif user_command == "help":

        print("""

            start = start the car
            stop = stop the car
            quit = quit from the game

        """)

    else:
        break