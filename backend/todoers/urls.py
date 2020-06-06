from django.urls import path
from . import views

app_name = 'todoers'

urlpatterns = [
    path('', views.todo_list, name="todos"),
    path('<int:todo_id>/', views.todo_item, name="todo_item"),
]