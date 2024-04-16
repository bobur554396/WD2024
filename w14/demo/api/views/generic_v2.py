from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny

from api.models import Category
from api.serializers import CategorySerializer2


class CategoryListAPIView(generics.ListCreateAPIView):
    # queryset = Category.objects.all()
    serializer_class = CategorySerializer2
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return Category.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer2
    permission_classes = (IsAuthenticated,)
