from django.db.models.signals import post_save
from django.dispatch import receiver
from books.models import Book, ISBN


@receiver(post_save, sender=Book)
def create_isbn(sender, instance, created, **kwargs):
    if created and not instance.isbn:
        # Create a new ISBN object
        isbn = ISBN.objects.create()
        # Assign the ISBN object to the Book object
        instance.isbn = isbn
        instance.save()
