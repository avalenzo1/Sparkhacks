from django.db import models
from django.conf import settings

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)

    resolved = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        ordering = ["is_deleted", "resolved", "title"]
