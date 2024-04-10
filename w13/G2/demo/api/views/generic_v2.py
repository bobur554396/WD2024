from rest_framework import generics

from api.models import Category
from api.serializers import CategorySerializer2


class GenericCategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer2


class GenericCategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer2
