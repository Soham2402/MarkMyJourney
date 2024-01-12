import django.db

from rest_framework.serializers import ModelSerializer

from .models import Profile

class RegisterSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = ["username","email","password"]
        extra_kwargs = {"password":{"write_only":True}}   
    def create(self, validated_data):
        user = Profile.objects.create_user(username = validated_data["username"], 
                                           email =  validated_data["username"], 
                                           password = validated_data["password"])
        return user


class ProfilesSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'