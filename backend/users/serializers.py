import django.db

from rest_framework.serializers import ModelSerializer

from .models import Profile

class ProfilesSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id','created','name','email','short_intro','created']