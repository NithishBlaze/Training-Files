class transport:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    def display(self):
        print(f'{self.brand} is brand and {self.model} is model')
class car(transport):
    def __init__(self, brand, model, color):
        