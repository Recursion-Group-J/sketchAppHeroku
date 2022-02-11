from rest_framework import serializers

from djangoSketch.models import Work, SketchUser
from django.contrib.auth.hashers import make_password

class WorkSerializer(serializers.ModelSerializer):

    class Meta:
        model = Work
        fields = ['name','work','user']

class SketchUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = SketchUser
        fields = ['username','password']

    def validate_password(self,value:str) ->str:
        """
        ハッシュ値に変換する
        """
        return make_password(value)

    def create(self, validated_data):
        return SketchUser.objects.create_user(**validated_data)