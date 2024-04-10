from django.db import models

"""
Relations between models/table

1) OneToOne
2) OneToMany
3) ManyToMany
"""


class Category(models.Model):
    name = models.CharField(max_length=500)

    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}"

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name="products"
    )

    class Meta:
        verbose_name = "Product"
        verbose_name_plural = "Products"

    def __str__(self):
        return f"id: {self.id}, name: {self.name}, price: {self.price}"

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "price": self.price
        }