from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect


book_list = [{
        'index': 0,
        'id': 1,
        'name': 'Book-1',
        'author': "JK",
        'description': "Harry Potter",
        "price":100
    }, {
        'index': 1,
        'id': 2,
        'name': 'Book-2',
        'author': "Kishimito",
        'description': "Shippuden",
        "price":200
    },  {
        'index': 2,
        'id': 3,
        'name': 'Book-3',
        'author': "Agatha Christie",
        'description': "And Then There Were None",
        "price":300
    },]
# Create your views here.
def index(request):
    context = {'book_list': book_list}
    return render(request, 'index.html',context)

def show(request,**kwargs):
    book=_get_book(kwargs.get('id'))
    print(book)
    context = {'book': book}
    return render(request, 'show.html',context)

def delete(request,**kwargs):
    book=_get_book(kwargs.get('id'))
    if book:
        book_list.remove( book)
    return redirect("books:books-index")

def update(request,**kwargs):
    book=_get_book(kwargs.get('id'))
    if book:
        # book_list.remove( book)
        book['description']=f"description updated"
    return redirect("books:books-index")

def _get_book(id):
    for book in book_list:
        if book['id']==id:
            return book
    return None