from django.urls import path
from . import views

urlpatterns = [
    path("", views.get_tasks),
    path("<int:id>/", views.get_task),
    path("create/", views.create_task),
    path("edit/<int:id>/", views.edit_task),
    path("delete/<int:id>/", views.delete_task),
]