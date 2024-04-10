from rest_framework import serializers

from api.models import Category


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        instance = Category(name=validated_data.get('name'))
        instance.save()
        return instance

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name")
        instance.save()
        return instance


class CategorySerializer2(serializers.ModelSerializer):
    name = serializers.CharField(max_length=50)

    class Meta:
        model = Category
        fields = ("id", "name")
        # fields = "__all__"
