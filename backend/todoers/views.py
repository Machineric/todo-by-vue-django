from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, get_list_or_404, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Todo
from .serializers import TodoSerializer

@csrf_exempt
@api_view(['GET', 'POST'])
def todo_list(request):
    # Get all todo items if they exist or throw 404.
    if request.method == 'GET':
        todo_list = get_list_or_404(Todo)
        serializer = TodoSerializer(todo_list, many=True)
        return JsonResponse(serializer.data, safe=False)
    
    # Add a new todo item.
    elif request.method == 'POST':
        new_todo = Todo.objects.create(**request.data)
        serializer = TodoSerializer(new_todo)
        return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)

    # (WARN) YOU WILL NOT NEED THIS.
    elif request.method == 'PUT':
        pass
    
    # (WARN) DON'T EVENT THINK ABOUT THIS.
    elif request.method == 'DELETE':
        pass

@api_view(['PUT', 'DELETE'])
def todo_item(request, todo_id):
    todo_item = get_object_or_404(Todo, pk=todo_id)
    
    if request.method == 'PUT':
        todo_item.is_done = not todo_item.is_done
        todo_item = todo_item.save()
        return Response('The data was successfully edited.', status=status.HTTP_201_CREATED)
    
    elif request.method == 'DELETE':
        todo_item.delete()
        return Response('The data was successfully deleted.', status=status.HTTP_204_NO_CONTENT)