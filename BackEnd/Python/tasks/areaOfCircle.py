def area(radius,pi = 3.14):
    result = pi * radius**2
    return result
def main(radiusInput):
    result = area(radiusInput,3.14)
    print('Area of circle using positional Argument:',result)
    result = area(radiusInput)
    print('Area of circle using positional Argument using default :',result)
    result = area(pi=3.14, radius=radiusInput)
    print('Area of circle using keyword Argument:',result)
    result = area(radius=radiusInput)
    print('Area of circle using default Argument:',result)

if __name__ == '__main__':
    radius = int(input('Enter radius:'))
    main(radius)