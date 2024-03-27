from django.contrib import admin

from api.models import Category


# 1 Option
# admin.site.register(Category)


# 2 Option
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)
