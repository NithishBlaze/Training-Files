class circle:
    pi = 3.14
    def __init__(self):
        self.radius = 0
    def accept(self):
        value = int(input('Enter radius:'))
        self.radius = value      
    def formula(self):
        area = self.pi * self.radius**2
        print('Area of Circle:',area)
        print(self.pi)
        
    
def main():
    _obj1 = circle()
    _obj1.accept()
    _obj1.formula()
    
if __name__ == '__main__':
    main()
    