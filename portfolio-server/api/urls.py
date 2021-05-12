from django.urls import include, path
from .views import ContactCreateAPI
from .views import FootballApiView, CreateFootballApiView

urlpatterns = [
    path('create/', ContactCreateAPI.as_view()),
    path('get-football/', FootballApiView.as_view()),
    path('create-football/', CreateFootballApiView.as_view())
]