from django.urls import path, re_path

from api.views import get_categories, get_category

urlpatterns = [
    path('categories/', get_categories),
    path('categories/<int:pk>/', get_category),
]