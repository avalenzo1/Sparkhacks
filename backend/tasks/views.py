from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Task
from .serializers import TaskSerializer

@api_view(["GET"])
def get_tasks(request):
    tasks = Task.objects
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def get_task(request, id):
    task = get_object_or_404(Task, id=id)
    serializer = TaskSerializer(task)
    return Response(serializer.data)

@api_view(["POST"])
def create_task(request):
    new_task = Task(title=request.data["title"], notes=request.data["notes"])
    new_task.save()
    
    return Response({"message": "Task created successfully."}, status=200)

@api_view(["PUT"])
def edit_task(request, id):
    task = get_object_or_404(Task, id=id)
    serializer = TaskSerializer(task, data=request.data, partial=True)
    
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Task edited successfully."}, status=200)
    else:
        return Response(status=404)
    
@api_view(["DELETE"])
def delete_task(request, id):
    task = get_object_or_404(Task, id=id)

    if not task.is_deleted:
        task.is_deleted = True
        task.save()
        return Response({"message": "Task deleted successfully."}, status=200)
    else:
        task.delete()
        return Response({"message": "Task deleted permanently."}, status=200)
