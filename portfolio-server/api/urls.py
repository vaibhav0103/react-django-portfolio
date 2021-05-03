from django.urls import include, path
from .views import ContactCreateAPI

urlpatterns = [
    path('create/', ContactCreateAPI.as_view()),
]