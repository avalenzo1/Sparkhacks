from django.contrib import admin
from .models import Task

class TaskAdmin(admin.ModelAdmin):
    list_display = ("title", "notes", "is_completed", "is_deleted")
    ordering = ("is_completed", "is_deleted", "title")

admin.site.register(Task, TaskAdmin)
