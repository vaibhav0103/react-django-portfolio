
from django.contrib import admin
from django.urls import include, path
# from spotify.views import SearchRedirectView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    # path('spotify/', include('spotify.urls')),
    # path('', SearchRedirectView.as_view(), name='frontend')
]
