from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from .models import Book
from django.views.decorators.csrf import csrf_exempt
from .forms import BookForm

# Create your views here.


def index(request):

    return render(request, 'main/base_layout.html')


def book_list(request):
    all_books = Book.objects.all()

    return render(request, 'book/book_list.html', context={"books": all_books})


def book_add(request):
    if request.method == 'POST':
        form = BookForm(request.POST)
        if form.is_valid():
            form.save()
            # Redirect to the book list page
            return redirect('book:book-list')
    else:
        form = BookForm()

    return render(request, 'book/book_add.html', context={'form': form})


def book_detail(request, *args, **kwrgs):
    book_id = kwrgs.get('book_id')
    book = Book.objects.get(pk=book_id)

    return render(request, 'book/book_details.html', context={"book": book})


def book_delete(request, **kwargs):
    book_id = kwargs.get('book_id')

    Book.objects.get(pk=book_id).delete()

    return redirect('book:book-list')


def book_edit(request, **kwargs):
    book_id = kwargs.get('book_id')
    book_object = _get_book(book_id)
    return render(request, 'book/book_edit.html', context=book_object)


def book_update(request, **kwargs):
    book_id = kwargs.get('book_id')
    book = Book.objects.get(pk=book_id)

    form = BookForm(instance=book)
    if request.method == "PUT":
        form = BookForm(data=request.POST, instance=book)
        if form.is_valid():
            form.save()
            return redirect("book:book-detail", pk=book.id)

    return redirect('book:book-list', context={
        'form': form,
        'book': book
    })
