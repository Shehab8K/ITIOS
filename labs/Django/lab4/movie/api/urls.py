from django.urls import path
from .views import movie_list, movie_detail, movie_update, movie_delete, movie_create

urlpatterns = [
    path('movies/', movie_list, name='movie-list'),
    path('movies/<int:pk>/', movie_detail, name='movie-detail'),
    path('movie/create', movie_create, name='movie-create'),

    path('movies/<int:pk>/update/', movie_update, name='movie-update'),
    path('movies/<int:pk>/delete/', movie_delete, name='movie-delete'),
]
