class person:
    def __init__(self,idCard,name):
        self.idCard = idCard
        self.name = name
        
    def displayInfo(self):
        print(f'{self.name} = {self.idCard}')   
    

class Employee(person):
    def __init__(self, idCard, name,salary):
        super().__init__(idCard, name)
        self.salary = salary
    def displayInfo(self):
        print(f'{self.name} = {self.idCard}, {self.salary}')
    
obj1 = Employee(123,'Nithish',45120)
obj1.displayInfo()
print(obj1.salary)