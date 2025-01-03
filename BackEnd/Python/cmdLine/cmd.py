from sys import *
def Addition(num1,num2):
    num1 = int(num1)
    num2 = int(num2)
    result = num1 + num2
    return result

def main():
    print('Application name:',argv[0])
    if(argv[1]=='-u'):
        print('Adding two numbers')
        exit()
    if(argv[1]=='-h'):
        print('Enter two values')
        exit()
    if(len(argv)!=3):
        print('type -u for usage -h for help')
        exit()
    print('First number:',argv[1])
    print('Second number:',argv[2])
    print('Addition:',Addition(argv[1],argv [2]))
    
if __name__ == '__main__':
    main()