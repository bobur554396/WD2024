import json
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework.response import Response

from api.models import Category
from api.serializers import CategorySerializer, CategorySerializer2


class CategoryListCreateAPIView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer2(categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CategorySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)


class CategoryDetailAPIView(APIView):

    def get_object(self, pk=None):
        try:
            category = Category.objects.get(id=pk)
            return category
        except Category.DoesNotExist as e:
            return Response({"error": str(e)})

    def get(self, request, pk=None):
        category = self.get_object(pk)

        serializer = CategorySerializer(category)
        return Response(serializer.data)

    def put(self, request, pk=None):
        category = self.get_object(pk)

        serializer = CategorySerializer2(
            instance=category,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None):
        category = self.get_object(pk)

        category.delete()
        return Response({"deleted": True})
