from rest_framework import serializers

from djangoSketch.models import Work, SketchUser

class WorkSerializer(serializers.ModelSerializer):

    class Meta:
        model = Work
        fields = ['uuid','name','work','user']

class SketchUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = SketchUser
        fields = ['uuid', 'username']