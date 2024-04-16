import json
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from api.models import Category
from api.serializers import CategorySerializer, CategorySerializer2


# CRUD => create / read / update / delete

@csrf_exempt
def category_list(request):
    if request.method == "GET":
        categories = Category.objects.all()
        serializer = CategorySerializer2(categories, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        serializer = CategorySerializer2(data=data)
        if serializer.is_valid():
            serializer.save()  # insert into ...
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def category_detail(request, pk=None):
    try:
        category = Category.objects.get(id=pk)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    if request.method == "GET":
        serializer = CategorySerializer(category)
        return JsonResponse(serializer.data)
    elif request.method == "PUT":
        data = json.loads(request.body)
        serializer = CategorySerializer(
            instance=category,
            data=data
        )
        if serializer.is_valid():
            serializer.save()  # update table ...
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == "DELETE":
        category.delete()
        return JsonResponse({"deleted": True})


def category_products(request, pk=None):
    try:
        category = Category.objects.get(id=pk)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    products_json = [p.to_json() for p in category.products.all()]
    return JsonResponse(products_json, safe=False)
