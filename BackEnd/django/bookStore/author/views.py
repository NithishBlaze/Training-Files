from django.shortcuts import render
from django.template.loader import render_to_string
from django.http import HttpResponse
from .models import Book
# Create your views here.
# def index(request):
#     return render(
#         request, 'author/index.html'
#     )
# def index(request):
#     listItem = { 'name':'Nithish'}
#     rendered = render_to_string('author/index.html',context=listItem)
#     return HttpResponse(rendered)

def index(request):
        books = Book.objects.all()
        return render(request,'author/index.html',{'bookCollection':books})