from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Profile
from .serializers import ProfilesSerializer


@api_view(['GET'])
def get_profiles(request):
    try:
        profiles = Profile.objects.all()
        serialized = ProfilesSerializer(profiles, many = True)
        return Response(serialized.data)
    except:
        Response(status=status.HTTP_204_NO_CONTENT)
    