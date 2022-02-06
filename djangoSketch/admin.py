from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth import get_user_model
from .models import SketchUser, Work
# Register your models here.


admin.site.register(SketchUser)
admin.site.register(Work)

