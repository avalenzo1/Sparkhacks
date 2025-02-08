from django.db import models
from django.conf import settings
from django.contrib.auth import get_user_model

User=get_user_model()

# Create your models here.
class Post(models.Model):
    print(models)
    
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)

    resolved = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)
    
    def __str__(self):
        return self.title

    class Meta:
        ordering = ["is_deleted", "resolved", "title"]
