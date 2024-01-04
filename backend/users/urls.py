from django.urls import path

from .views import get_profiles


urlpatterns = [
    path('profiles/', get_profiles, name='get_profiles')
]