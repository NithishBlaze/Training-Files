from django.contrib import admin
from .models import author,Book
# Register your models here.
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'rating')
    list_filter = ('title', 'rating')
admin.site.register(author)
admin.site.register(Book,BookAdmin)
