from django.contrib import admin

from .models import Movie ,Category , Cast
# Register your models here.
admin.site.register(Movie)
admin.site.register(Category)
admin.site.register(Cast)

