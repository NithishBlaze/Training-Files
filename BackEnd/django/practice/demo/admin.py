from django.contrib import admin
from .models import chef,dish
# Register your models here.
class foodAdmin(admin.ModelAdmin):
    list_display = ('name', 'rating','price')
    list_filter = ('name', 'rating','price','bestSelling')
class chefAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'age')
    list_filter = ['full_name'] 

admin.site.register(chef,chefAdmin)
admin.site.register(dish,foodAdmin)
