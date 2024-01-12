import uuid

from django.db import models
from django.contrib.auth.models import AbstractUser


class Profile(AbstractUser):
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
    display = models.TextField(max_length=200, default="image")
    short_intro = models.CharField(max_length=500, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)

    def __str__(self):
        return str(self.username)  # Use `self.username` instead of `self.user.username`

    class Meta:
        ordering = ['date_joined']  # Use 'date_joined' instead of 'created'
