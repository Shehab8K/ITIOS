import random
from xml.dom import ValidationErr
from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    def clean_name(self):
        name = self.cleaned_data['name']
        if len(name.strip()) < 2:
            raise forms.ValidationError(
                'The minimum length of a category name is 2 characters.')
        return name


class Review(models.Model):
    comment = models.TextField()
    book = models.ForeignKey("Book", on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return '{} - Review '.format(self.book.title)


class Book(models.Model):

    title = models.CharField("Book title", max_length=255, unique=True)
    author = models.CharField("Book author", max_length=255, )
    description = models.TextField("Book Description")
    likes = models.IntegerField(default=0)
    watch_count = models.IntegerField(default=0)
    price = models.IntegerField(default=0)
    rate = models.PositiveIntegerField(default=0)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True)
    categories = models.ManyToManyField(Category)
    isbn = models.OneToOneField(
        "ISBN", on_delete=models.CASCADE, null=True, blank=True)

    def clean(self):
        if len(self.title.strip()) < 10 or len(self.title.strip()) > 50:
            raise ValidationErr(
                'The length of a book title should be between 10 and 50 characters.')

    class Meta:
        permissions = [
            ('book_delete', 'Can delete posts'),
        ]


class ISBN(models.Model):
    author = models.CharField(max_length=255, null=True, blank=True)
    book_title = models.CharField(max_length=255, null=True, blank=True)
    number = models.CharField(
        max_length=13, unique=True, null=True, blank=True)

    def __str__(self):
        return self.number

    def save(self, *args, **kwargs):
        if not self.number:
            # Generate new ISBN number
            prefix = str(random.randint(100, 999))
            group_id = str(random.randint(10, 99))
            publisher_id = str(random.randint(10000, 99999))
            check_digit = str(random.randint(0, 9))
            self.number = f"{prefix}-{group_id}-{publisher_id}-{check_digit}"
        super().save(*args, **kwargs)

        class Meta:
            unique_together = ('book_title', 'number')
