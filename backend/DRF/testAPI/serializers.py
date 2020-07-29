from rest_framework import serializers

from .models import SourceCurrency, TargetCurrency


class SourceCurrencySerializer(serializers.Serializer):

    class Meta:
        model = SourceCurrency
        fields = ['name', 'tag_name', 'min_amount', 'max_amount', 'enable', 'type']

    name = serializers.CharField(max_length=20)
    tag_name = serializers.CharField(max_length=10)
    min_amount = serializers.FloatField()
    max_amount = serializers.FloatField()
    CURRENCY_TYPE = (
        (1, 'crypto'),
        (2, 'bank'),
        (3, 'payment_system'),
    )
    enable = serializers.BooleanField(default=False)
    type = serializers.ChoiceField(choices=CURRENCY_TYPE)


class TargetCurrencySerializer(serializers.Serializer):

    class Meta:
        model = TargetCurrency
        fields = ['name', 'tag_name', 'min_amount', 'max_amount', 'enable', 'type']

    name = serializers.CharField(max_length=20)
    tag_name = serializers.CharField(max_length=10)
    min_amount = serializers.FloatField()
    max_amount = serializers.FloatField()
    CURRENCY_TYPE = (
        (1, 'crypto'),
        (2, 'bank'),
        (3, 'payment_system'),
    )
    enable = serializers.BooleanField(default=False)
    type = serializers.ChoiceField(choices=CURRENCY_TYPE)
