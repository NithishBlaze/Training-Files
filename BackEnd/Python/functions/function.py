def Demo():
    print('Inside Demo')

def Demo_1(value):
    print('Inside Demo_1',value)

def Demo_2(num1,num2):
    print('Inside Demo 2',num1+num2)

def Demo_3(num1,num2):
    print('Inside Demo 3',num1,num2)
    Add = num1 + num2
    return Add

def main():
    Demo()
    Demo_1('Yokoso')
    Demo_2(12,15)
    print(Demo_3(69,69))

if __name__ == '__main__':
    main()