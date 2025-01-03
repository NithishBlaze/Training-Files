from django.db import models

# Create your models here.
class chef(models.Model):
    full_name = models.CharField(max_length=20)
    address = models.CharField(max_length=50)
    age = models.IntegerField()
    
    def __str__(self):
        return f'Name:{self.full_name} , Age:{self.age}'
    
class dish(models.Model):
    name = models.CharField(max_length=50)
    rating = models.IntegerField()
    bestSelling = models.BooleanField()
    price = models.IntegerField()
    chef = models.ForeignKey('chef',on_delete = models.CASCADE)
    
    def __str__(self):
        return f'foodName:{self.name}  Rating:{self.rating}'