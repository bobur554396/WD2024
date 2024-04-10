from rest_framework import mixins, generics, status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Category
from api.serializers import CategorySerializer, CategorySerializer2


class CategoryListCreate(mixins.CreateModelMixin,
                         mixins.ListModelMixin,
                         generics.GenericAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer2

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class CategoryDetail(mixins.RetrieveModelMixin,
                     mixins.UpdateModelMixin,
                     mixins.DestroyModelMixin,
                     generics.GenericAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer2

    def get(self, request, pk=None):
        return self.retrieve(request, pk)

    def put(self, request, pk=None):
        return self.update(request, pk)

    def delete(self, request, pk=None):
        return self.destroy(request, pk)
