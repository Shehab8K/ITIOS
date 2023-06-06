from django.contrib import admin
from .models import Book
from .models import Category
from .models import ISBN
from .models import Review


class InlineReview(admin.StackedInline):
    model = Review
    extra = 1
     
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'user', 'isbn')
    search_fields = ('title', 'user', 'isbn')
    
    list_filter = ('categories', 'user')
    inlines = [InlineReview]
    

# Register your models here.
admin.site.register(Book, BookAdmin)
admin.site.register(Category)

admin.site.register(ISBN)
admin.site.register(Review)

