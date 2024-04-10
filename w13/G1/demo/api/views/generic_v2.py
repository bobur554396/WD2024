from rest_framework import mixins, generics, status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Category
from api.serializers import CategorySerializer, CategorySerializer2


class CategoryListCreate(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer2


class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer2
