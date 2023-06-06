from django.db import models

# Create your models here.

class Book(models.Model):

    title = models.CharField("Book title", max_length=255, unique=True)
    author = models.CharField("Book author", max_length=255, )
    description = models.TextField("Book Description")
    likes = models.IntegerField(default=0)
    watch_count = models.IntegerField(default=0)
    price = models.IntegerField(default=0)  
    rate = models.PositiveIntegerField(default=0) 