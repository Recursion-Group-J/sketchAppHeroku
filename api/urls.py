from django.urls import path , include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('works',views.WorkViewSet)

url_patterns = [
    path('', include(router.urls))
]

