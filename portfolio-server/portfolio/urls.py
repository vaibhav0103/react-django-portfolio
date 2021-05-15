import os
from django.contrib import admin
from django.urls import include, path
# from spotify.views import SearchRedirectView

urlpatterns = [
    path(os.getenv('SECRET_ADMIN_URL') + '/admin/', admin.site.urls),
    path('api/', include('api.urls')),
    # path('spotify/', include('spotify.urls')),
    # path('', SearchRedirectView.as_view(), name='frontend')
]
