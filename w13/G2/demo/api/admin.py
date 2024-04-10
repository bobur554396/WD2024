from django.contrib import admin

from api.models import Category, Product


# 1 Option
# admin.site.register(Category)

# 2 Option
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'category')
    search_fields = ('name',)
