from functools import reduce

# def checkNumber(number):
#     if (number>18 and number<60):
#         return True
#     return False
# def addition(num1,num2):
#     return num1 + num2
# def incrementNumber(number):
#     number = number + 10
#     return number
def main():
    number = [14,12,78,55,23,45,89,26]
    filterResult = tuple(filter(lambda number: number>18 and number<60,number))
    print('Filter function:',filterResult)
    mapResult = list(map(lambda number: number + 10 , filterResult))
    print('Map function:',mapResult)
    reduceResult = reduce(lambda num1,num2 : num1+num2 , mapResult)
    print('Reduce function:',reduceResult)
    

if __name__ == '__main__':
    main()