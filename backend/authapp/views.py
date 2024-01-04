from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):  #customising jwt claims
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
 
        token['name'] = user.username
        token["staff_status"] = user.is_staff

        return token
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer