from django.urls import path, re_path

from api.views import category_list, category_detail, category_products
from api.views import CategoryListAPIView, CategoryDetailAPIView
from api.views import GenericCategoryList, GenericCategoryDetail

urlpatterns = [
    path("categories/", GenericCategoryList.as_view()),
    path("categories/<int:pk>/", GenericCategoryDetail.as_view()),

    # path("categories/", CategoryListAPIView.as_view()),
    # path("categories/<int:pk>/", CategoryDetailAPIView.as_view()),

    # path("categories/", category_list),
    # path("categories/<int:pk>/", category_detail),
    # path("categories/<int:pk>/products/", category_products),
]
