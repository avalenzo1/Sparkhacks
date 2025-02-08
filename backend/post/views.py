from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Post
from .serializers import PostSerializer

@api_view(["GET"])
def get_posts(request):
    posts = Post.objects
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def get_post(request, id):
    post = get_object_or_404(Post, id=id)
    serializer = PostSerializer(post)
    return Response(serializer.data)

@api_view(["POST"])
def create_post(request):
    new_post = Post(title=request.data["title"], notes=request.data["description"])
    new_post.save()
    
    return Response({"message": "Post created successfully. 😛"}, status=200)

@api_view(["PUT"])
def edit_post(request, id):
    post = get_object_or_404(Post, id=id)
    serializer = PostSerializer(post, data=request.data, partial=True)
    
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Post edited successfully."}, status=200)
    else:
        return Response(status=404)
    
@api_view(["DELETE"])
def delete_post(request, id):
    post = get_object_or_404(Post, id=id)

    if not post.is_deleted:
        post.is_deleted = True
        post.save()
        return Response({"message": "Post deleted successfully!"}, status=200)
    else:
        post.delete()
        return Response({"message": "Post deleted permanently."}, status=200)
