from django.http import HttpResponse, QueryDict
from django.shortcuts import render
from rest_framework import viewsets,views, status
from rest_framework.response import Response

from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny

from djangoSketch.models import Work, SketchUser
from .serializers import WorkSerializer, SketchUserSerializer
from api import serializers
from django.views.generic import View
# Create your views here.

class WorkView(views.APIView):
    # permission_classes = (AllowAny)

    # queryset = Work.objects.all()
    # serializer_class = WorkSerializer
    # permission_classes = [AllowAny]
    def post(self,request,*args,**kwargs):
        serializer = WorkSerializer(data=request.data)
        print("this is a test")
        print(request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status.HTTP_201_CREATED)



class SketchUserViewSet(viewsets.ModelViewSet):
    queryset = SketchUser.objects.all()
    serializer_class = SketchUserSerializer

# class testView(View):
    # permission_classes = (AllowAny,)
    # def get(self,request):
    #     print(request)
    #     print("this is a get test")
    #     return HttpResponse("get success")

    # def post(self,request):
    #     print(request)
    #     print("this is a post test")
    #     return HttpResponse("post success")