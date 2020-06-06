from django.db import models

# Create your models here.
class Todo(models.Model):
    content = models.CharField(max_length=255)
    due_date = models.DateField(auto_now_add=True)
    is_done = models.BooleanField()