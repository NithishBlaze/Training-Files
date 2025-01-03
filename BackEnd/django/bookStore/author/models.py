from django.db import models

# Create your models here.
class author(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    age = models.IntegerField()
    
    def __str__(self):
        return f'Name:{self.first_name + self.last_name} , Age:{self.age}'
    
class Book(models.Model):
    title = models.CharField(max_length=50)
    rating = models.IntegerField()
    bestSelling = models.BooleanField()
    author = models.ForeignKey('author',on_delete = models.CASCADE)
    
    def __str__(self):
        return f'BookName:{self.title}  Rating:{self.rating}'
    