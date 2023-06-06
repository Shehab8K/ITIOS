#auth urls
from django.urls import path
from . import views

urlpatterns = [
    path('login',views.loginPg , name='login'),
    path('signup',views.signupPg , name='signup'),
    path('signout',views.signoutPg , name='signout')
]