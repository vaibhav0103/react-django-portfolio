from django.db import models


# Create your models here.
class Contact(models.Model):
    fullname    = models.CharField(max_length=100)
    email       = models.EmailField()
    message     = models.TextField()
    created_at  = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email
        
