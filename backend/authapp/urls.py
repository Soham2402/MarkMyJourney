from django.urls import path

from rest_framework_simplejwt.views import TokenRefreshView
from .views import MyTokenObtainPairView


urlpatterns = [
    path('auth/token/',MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/ token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]