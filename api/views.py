from django.http import QueryDict
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from djangoSketch.models import Work, SketchUser
from .serializers import WorkSerializer, SketchUserSerializer
from api import serializers

# Create your views here.

class WorkViewSet(viewsets.ModelViewSet):

    queryset = Work.objects.all()
    serializer_class = WorkSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class SketchUserViewSet(viewsets.ModelViewSet):
    queryset = SketchUser.objects.all()
    serializer_class = SketchUserSerializer