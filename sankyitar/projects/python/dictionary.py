    # Dictionary syntax

customer = {
   "name" : "Aung Aung",
    "age" : 30,
    "is_verified" : True
}

customer["age"] = 50  # overwrite
print(customer.get("age"),"40")

phone = input("Number :>   ")
while phone != "quit":
    phone = input("Number :>   ")

    digits_mapping = {
        "0" : "Zero",
        "1" : "One",
        "2" : "Two",
        "3" : "Three",
        "4" : "Four",
        "5" : "Five",
        "6" : "Six",
        "7" : "Seven",
        "8" : "Eight",
        "9" : "Nine"
    }
    output = ""
    for ch in phone:

        output += digits_mapping.get(ch,"!") + " "
    print(output)

# command = input("Do you like to try more >>>  ")
#
# digits_mapping = {
#     "0" : "Zero",
#     "1" : "One",
#     "2" : "Two",
#     "3" : "Three",
#     "4" : "Four",
#     "5" : "Five",
#     "6" : "Six",
#     "7" : "Seven",
#     "8" : "Eight",
#     "9" : "Nine"
# }
#
# output = " "
#
# while command != "no":
#     phone = input("Type in any number :::  ")
#     for ch in phone:
#         output += digits_mapping.get(ch,"x") + " "
#     print(output)
#     print(command)

