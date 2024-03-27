from django.contrib import admin

from api.models import Category


# Option - 1
# admin.site.register(Category)

# Option - 2
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)
