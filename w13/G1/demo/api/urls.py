from django.urls import path, re_path

from api.views import category_list, category_detail, category_products
from api.views import CategoryListCreateAPIView, CategoryDetailAPIView
from api.views import CategoryListCreate, CategoryDetail

urlpatterns = [
    path("categories/", CategoryListCreate.as_view()),
    path("categories/<int:pk>/", CategoryDetail.as_view()),

    # path("categories/", category_list),
    # path("categories/<int:pk>/", category_detail),
    # path("categories/<int:pk>/products/", category_products)
]
