from rest_framework import serializers
from movie.models import Category, Cast, Movie, Series, CommonInfo


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class CastSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cast
        fields = '__all__'


class CommonInfoSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True)
    casts = CastSerializer(many=True)

    class Meta:
        model = CommonInfo
        fields = '__all__'


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'

    def update(self, instance, validated_data):
        # Update the instance fields with the validated data
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get(
            'description', instance.description)
        instance.release_date = validated_data.get(
            'release_date', instance.release_date)
        # ... update other fields ...

        # Update the many-to-many relationships
        instance.categories.set(validated_data.get(
            'categories', instance.categories.all()))
        instance.casts.set(validated_data.get('casts', instance.casts.all()))

        instance.save()
        return instance


class SeriesSerializer(CommonInfoSerializer):
    class Meta(CommonInfoSerializer.Meta):
        model = Series
