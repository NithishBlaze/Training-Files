from django.urls import path
from .import views

urldict = {
    'name':views.name,
    'contact':views.contact,
    'company':views.company
}

urlpatterns = [
    path(key + '/', view, name= key) for key, view in urldict.items()
    # *(path(key,values , name=key) for key, values in urldict.items())
]
