import arithmetic
print('\n','1 = Addition','\n','2 = Subraction','\n','3 = Multiplication','\n','4 = Division','\n','5 = Floor Division','\n','6 = Exponential','\n',)
option = int(input('Enter the operator 1/2/3/4/5/6: '))
def main():
    num1 = int(input('Enter first number:'))
    num2 = int(input('Enter second number:'))
    if(option == 1):
        result = arithmetic.add(num1,num2)
        print(f'{num1} + {num2} = {result}')
    elif(option == 2):
        result = arithmetic.sub(num1,num2)
        print(f'{num1} - {num2} = {result}')
    elif(option == 3):
        result = arithmetic.mul(num1,num2)
        print(f'{num1} * {num2} = {result}')
    elif(option == 4):
        result = arithmetic.div(num1,num2)
        print(f'{num1} / {num2} = {result}')
    elif(option == 5):
        result = arithmetic.floorDiv(num1,num2)
        print(f'{num1} // {num2} = {result}')
    elif(option == 6):
        result = arithmetic.expo(num1,num2)
        print(f'{num1} ** {num2} = {result}')
    else:
        print('Select the correct option !')
    
if __name__ == '__main__':
    main()