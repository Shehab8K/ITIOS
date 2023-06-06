from django.urls import path
from .views import index, book_list, book_detail, book_delete, book_update, book_add, book_edit

app_name = 'book'

# http://localhost:8000/post/2/comment/1
urlpatterns = [
    path('index', index, name='book-index'),
    path('book_list/', book_list, name="book-list"),
    path('book_add/', book_add, name="book-add"),
    
    path('book_detail/<int:book_id>', book_detail, name="book-detail"),
    
    path('book_delete/<int:book_id>', book_delete, name="book-delete"),
    path('book_edit/<int:book_id>', book_edit, name="book-edit"),
    
    path('book_update/<int:book_id>', book_update, name="book-update")
    
]
