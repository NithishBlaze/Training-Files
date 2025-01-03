statement_1 = 'Yoskoso ' #single quote
statement_2 = "Bankai"  #double quote
statement_3 = '''Watashi na wo soul society'''

print(len(statement_3))
for i in range(2,len(statement_1)):
    print(statement_1[i])

print(statement_3[19:])

#using different quotes in same statement
timing = "it's 7'o Clock"
print(timing)

#using same quotes in same statement

timing = 'it\'s 7\'o clock'
print(timing)


name= 'nithish'
age = 20
print(name+" "+ str(age))

print(f'My name is {name} and i am {age} years old')