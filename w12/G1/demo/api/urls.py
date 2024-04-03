from django.urls import path, re_path

from api.views import category_list, category_detail, category_products

urlpatterns = [
    path("categories/", category_list),
    path("categories/<int:pk>/", category_detail),
    path("categories/<int:pk>/products/", category_products)
]
