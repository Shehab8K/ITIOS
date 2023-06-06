from django.shortcuts import redirect, render
from django.http import HttpResponse
from .forms import UserForm

#auth imports.
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required


# Create your views here.

#auth views.
def loginPg(request):
    if request.user.is_authenticated:
        return redirect('home-index')
    else:
        if request.method == 'POST':
            name = request.POST.get('username')
            passwd = request.POST.get('password')
            user = authenticate(username= name, password =passwd)
            if user is not None:
                login(request, user)
                if request.GET.get('next') is not None:
                    return redirect(request.GET.get('next'))
                else:
                    return redirect('home-index')
                
            else:
                messages.info(request, 'User name or password is incorrect')
        return render(request, 'main/login.html')

def signoutPg(request):
    logout(request)
    return redirect('login')

def signupPg(request):
    if request.user.is_authenticated:
        return redirect('home-index')
    else:
        signup_form = UserForm()
        if(request.method =='POST'):
            signup_form = UserForm(request.POST)
            if(signup_form.is_valid()):
                signup_form.save()
                msg = 'User account created for username: ' + signup_form.cleaned_data.get('username')
                messages.info(request, msg)
                return redirect('login')
        context = {'signup_form': signup_form}
        return render(request, 'main/signup.html', context)