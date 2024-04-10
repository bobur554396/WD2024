from django.http.response import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import Category
from api.serializers import CategorySerializer2


@api_view(["GET", "POST"])
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer2(categories, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CategorySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()  # insert into ...
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT", "DELETE"])
def category_detail(request, pk=None):
    try:
        category = Category.objects.get(id=pk)
    except Category.DoesNotExist as e:
        return Response({"error": str(e)},
                        status=status.HTTP_400_BAD_REQUEST)

    if request.method == "GET":
        serializer = CategorySerializer2(category)
        return Response(serializer.data)

    elif request.method == "PUT":
        serializer = CategorySerializer2(
            instance=category,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()  # update table ...
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
        return JsonResponse({"error": str(e)}, status=400)

    products_json = [p.to_json() for p in category.products.all()]

    return JsonResponse(products_json, safe=False)
