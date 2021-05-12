from django.contrib import admin
from .models import Football

class FootballAdmin(admin.ModelAdmin):
    list_display = ('matchdate', 'home', 'away', 'updated')

# Register your models here.
admin.site.register(Football, FootballAdmin)