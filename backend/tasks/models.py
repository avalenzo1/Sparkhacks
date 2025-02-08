from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=255)
    notes = models.TextField(null=True, blank=True)

    is_completed = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        ordering = ["is_deleted", "is_completed", "title"]
