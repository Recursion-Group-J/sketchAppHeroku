from django.urls import path , include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
# router.register('works', views.WorkViewSet)
router.register('sketchusers', views.SketchUserViewSet)

urlpatterns = [
    path('works/',views.WorkView.as_view()),
    path('works',views.WorkView.as_view()),
    path('', include(router.urls)),
]

