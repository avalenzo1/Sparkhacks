from django.urls import path
from . import views

urlpatterns = [
    path("", views.get_posts),
    path("<int:id>/", views.get_post),
    path("create/", views.create_post),
    path("edit/<int:id>/", views.edit_post),
    path("delete/<int:id>/", views.delete_post),
]