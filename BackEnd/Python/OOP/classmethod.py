#class method
class Students:
    graduation = 'B.Sc ' # class variable
    # @classmethod
    def graduate_in(cls):
        print('Graduation:',cls.graduation)
    
# Students.graduate = classmethod(Students.graduate_in)
a = Students()
b= a.graduation
print(b)
