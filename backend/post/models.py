from django.db import models

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)

    resolved = models.BooleanField(default=False)

    class Meta:
        ordering = ["is_deleted", "resolved", "title"]
