roll_number = (123,124,125,126,127,123)
mixed_value = ('Nithish',123,True,78.89)
#TYPE
print('Type:',type(mixed_value))

#LENGTH
print('Length of tuple:',len(mixed_value))

#USING POSTIVE INDEX
print('Using Index:',mixed_value[0])
print('Using Index:',mixed_value[2])

#USING NEGATIVE SLICING

print('Negative Slicing:',mixed_value[-3:-1])
print('Negative Slicing:',roll_number[-4:-1])


#EXAMPLE

roll_num = 123
print(type(roll_num))

roll_num = (123,)
print(type(roll_num))


emptyTuple = tuple()

print(emptyTuple,type(emptyTuple))

employee_details = ('Nithish',123,'Trainer','Developer',True,78.89)
(name,job_id,*job_role,active,attendance)=employee_details
print('Name:',name,'ID:',job_id,'Role:',job_role,'Active:',active,'Attendance:',attendance)

