from django.db import models

# Create your models here.
class Football(models.Model):
    matchdate   = models.DateTimeField()
    home        = models.CharField(max_length = 100)
    away        = models.CharField(max_length = 100)
    matchid     = models.CharField(max_length = 20, unique = True)
    status      = models.CharField(max_length = 20)
    updated     = models.DateTimeField(auto_now = True, blank = True)

    def __str__(self):
        return str(self.matchdate)