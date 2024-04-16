from django.urls import path, re_path

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from api.views import category_list, category_detail, category_products
from api.views import CategoryListAPIView, CategoryDetailAPIView

urlpatterns = [
    path('login/', TokenObtainPairView.as_view()),
    path('refresh/', TokenRefreshView.as_view()),
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:pk>/', CategoryDetailAPIView.as_view()),

    # path('categories/', category_list),
    # path('categories/<int:pk>/', category_detail),
    # path('categories/<int:pk>/products/', category_products),
]
