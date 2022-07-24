# introduction
print("Hello, World!")

if 5 > 2:
    print("I am right")

if 2 < 5:
    print("I am wrong")


x = "5" # x is type of string
y = "Hello"
print(x + y)

x = 5 # x is type of integer
print(x)
print(y)


# converts integer to string  
a = str(3) # a will be '3'
b = int(3) # b will be 3
c = float(3) # c will be type of 3.0

# shows type of given info
print(type(x)) 
print(type(y))


# setting variable
myvar = "John"
my_var = "John"
_my_var = "John"
myVar = "John"
MYVAR = "John"
myvar2 = "John"
# do not   2myvar = "John"
# do not   my-var = "John"
# do not   my var = "John"
#      use camel case letters for long words  myVariableName = "something"
#      or snake case my_variable_name = "John"


# multiple value
x, y, z = "Apple", "Banana", "Carrot"
x = y = z = "Apple"
fruits = ["apple","banana","cherry"]
x, y, z = fruits
print(x)
print(y)
print(z)


# print multiple values
print(x, y, z)   # separates with a space between them
print(x + y + z)  # separates with nothing
a = 5 
b = 6 
c = 7
print(a + b + c)
# cannot add string with an integer
# variable declared outside a function is a global variable
# variable declared inside a function cannot be recalled outside the function
# if the variable should be globalized, 
def myfunc():
    global x
    x = "fantastic"
myfunc()
print("Python is " + x)    


# data types
# text type:        str
# numeric type:     int, float, complex
# sequence type:    list, tuple, range
# mapping type:     dict
# set type:         set, frozenset
# boolean type:     bool
# binary type:      bytes, bytearray, memoryview


# string lessons

a = """Lorem ipsum dolar sit amet
cojbfehfbvwevfkewkhfbeyfvj
hvfuedbfhvdhjfbejdbfvevfkvk
egbfekgbfejfbedjvbjkefnewbf"""
print(a)    # use three double quote or single quote

a = "hello, world!"
print(a[1])
print(len(a)) # shows length of string

txt = "The best things in life are free!"
print("free" in txt)        # checks if 'free' is present in string

if "free" in txt:
    print("Yes, 'free' is present.")

print("expensive" not in txt)    # check if "string" is not present in string

if "expensive"  not in txt:
    print("Yes, 'expensive' is NOT present.")

b = "Hello , I am learning python"
print(b[2:5]) # slicing string from startpoint to endpoint
print(b[:5]) # slicing from beginning to some point
print(b.upper()) # upper case conversion
print(b.lower()) # lower case conversion
print(a.strip()) # returns the removed whitespace from the beginning or end
print(a.replace("H", "J"))
print(a.split(",")) # returns 'Hello' and 'World' array

a = "hello"
b = "world"
c = a + b
print(c)
c = a + " " + b # string concatenation

age = 36
txt = "My name is John, and I am {}"
print(txt.format(age))

quantity = 3
itemno = 567
price = 49.95
myorder = "i want {} pieces of item {} for {} dollars."
print(myorder.format(quantity, itemno, price))
myorder = "I want to pay {2} dollars for  {0} pieces of item {1}"
print(myorder.format(quantity, itemno, price))

txt = "We are the so-called \"Vikings\" from the north."

print(10 > 9)  # }
print(10 == 9) # } - > returns boolean value
print(10 < 9)  # }

a = 200
b = 33

if b > a:
    print("b is greater than a")
else:
    print("b is not greater than a")

# array in JS = list in python

# array lessons
thislist = ["apple","banana", "cherry", "apple", "durian"]
print(thislist)
print(len(thislist))
print(type(thislist))
