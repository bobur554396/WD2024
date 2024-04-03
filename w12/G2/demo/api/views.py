import json
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from api.models import Category
from api.serializers import CategorySerializer


# CRUD  =>  create / read / update / delete
@csrf_exempt
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        # categories_json = [c.to_json() for c in categories]
        # return JsonResponse(categories_json, safe=False)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        category = Category.objects.create(name=data.get("name"))

        return JsonResponse(category.to_json(), status=201)


@csrf_exempt
def category_detail(request, pk=None):
    try:
        category = Category.objects.get(id=pk)
    except Category.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=400)

    if request.method == "GET":
        serializer = CategorySerializer(category)
        # return JsonResponse(category.to_json())
        return JsonResponse(serializer.data)
    elif request.method == "PUT":
        data = json.loads(request.body)
        category.name = data.get("name")
        category.save()
        return JsonResponse(category.to_json())
    elif request.method == "DELETE":
        category.delete()
        return JsonResponse({"deleted": True})


def category_products(request, pk=None):
    try:
        category = Category.objects.get(id=pk)
    except Category.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=400)

    products_json = [p.to_json() for p in category.products.all()]

    return JsonResponse(products_json, safe=False)
