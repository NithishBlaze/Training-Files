def add(num1,num2):
    add = num1 + num2
    print('Addition:',add)
def sub(num1,num2):
    sub = num1 - num2
    print('Subraction:',sub)
def both(num1,num2):
    add = num1 + num2
    sub = num1 - num2
    return add, sub
def main(num1,num2):
    # add(num1,num2)
    # sub(num1,num2)
    
    add,sub=both(num1,num2)
    print(add)
    print(sub)
if __name__ == '__main__':
    num1 = int(input('Enter first number:'))
    num2 = int(input('Enter second number:'))
    main(num1,num2)