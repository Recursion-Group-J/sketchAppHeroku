from django.http import QueryDict
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from djangoSketch.models import Work
from .serializers import WorkSerializer
from api import serializers

# Create your views here.

class WorkViewSet(viewsets.ModelViewSet):

    queryset = Work.objects.all()
    serializer_class = WorkSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
