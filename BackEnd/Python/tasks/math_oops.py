class math:
    def __init__(self):
        self.data = []
        self.maximum = 0
        self.add = 0
        self.minimum = 0


        
    def listItems(self):
        print('Enter how many values to store:')
        self.count = int(input())
        print('Enter data:')
        for i in range(self.count):
            self.value = int(input())
            self.data.append(self.value)
            
        return self.data

    def maximum(self,data):
        self.values = data
        self.maximum = 0
        for i in range(len(self.values)):
            if(self.values[i]>self.maximum):
                self.maximum = self.values[i]
        return self.maximum

    def minimum(self,data):
        self.values = data
        self.minimum = self.values[0]
        for i in range(len(self.values)):
            if(self.values[i]<self.minimum):
                self.minimum = self.values[i]
        return self.minimum

    def addition(self,data):
        self.values = data
        self.add = 0
        for i in range(len(self.values)):
                self.add = self.add + self.values[i] 
        return self.add
    
_obj = math()    
data = _obj.listItems()
maxi=_obj.maximum(data)
mini=_obj.minimum(data)
addi=_obj.addition(data)
print('Maximum number:',maxi)
print('Minimum number:',mini)
print('Addition:',addi)