from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    # return plain text
    return render(request,'main/home.html')
