from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status

from users.serializers import RegisterSerializer
from .models import Profile
from .serializers import ProfilesSerializer


class RegisterUserView(GenericAPIView):
    serializer_class = RegisterSerializer
    
    def post(self, request,*args, **kwargs):
        serialized = self.get_serializer(data = request.data)
        if serialized.is_valid(raise_exception = True):
            user = serialized.save()
            return Response({"user": ProfilesSerializer(user, context=self.get_serializer_context()).data,
            "message": "User Created Successfully.  Now perform Login to get your token", })          
        else:
            return Response(status=status.HTTP_406_NOT_ACCEPTABLE)