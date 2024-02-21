from django.urls import path

from .views import testUser


urlpatterns = [
    
    path('test/', testUser, name='testuser')
]