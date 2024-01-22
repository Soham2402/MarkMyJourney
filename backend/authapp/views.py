from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view,  permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):  #customising jwt claims
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
 
        token['name'] = user.username

        return token
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer\
        

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def testUser(request):
    print(request.data)
    return Response({"data":"data"})