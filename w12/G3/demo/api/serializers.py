from rest_framework import serializers

from api.models import Category


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        instance = Category(name=validated_data.get('name'))
        instance.save()
        return instance
