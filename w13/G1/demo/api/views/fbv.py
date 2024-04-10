import json
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.request import Request
from rest_framework.response import Response

from api.models import Category
from api.serializers import CategorySerializer


@api_view(["GET", "POST"])
def category_list(request):
    if request.method == "GET":
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT", "DELETE"])
def category_detail(request, pk=None):
    try:
        category = Category.objects.get(id=pk)
    except Category.DoesNotExist as e:
        return Response({"error": str(e)})

    if request.method == "GET":
        serializer = CategorySerializer(category)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = CategorySerializer(
            instance=category,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        category.delete()
        return Response({"deleted": True})


def category_products(request, pk=None):
    try:
        category = Category.objects.get(id=pk)
    except Category.DoesNotExist as e:
        return JsonResponse({"error": str(e)})

    products_json = [p.to_json() for p in category.products.all()]

    return JsonResponse(products_json, safe=False)
