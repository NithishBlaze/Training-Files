from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def name(request):
    return HttpResponse('NithishKumar')
def contact(request):
    return HttpResponse(9150478170)
def company(request):
    return HttpResponse('Changepond')