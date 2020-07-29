import requests
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import SourceCurrency, TargetCurrency
from .serializers import SourceCurrencySerializer, TargetCurrencySerializer


@csrf_exempt
def rate(request):
    r = requests.post('https://api.exmo.com/v1.1/required_amount', data={
        'pair': 'BTC_UAH',
        'quantity': 1
    }).json()
    quantity = r['quantity']
    amount = r['amount']
    avg_price = r['avg_price']

    return Response(r)


class RoutingView(APIView):

    @staticmethod
    def get(request, format=None):
        source_currency = SourceCurrency.objects.all()
        target_currency = TargetCurrency.objects.all()
        source_serializer = SourceCurrencySerializer(source_currency, many=True)
        target_serializer = TargetCurrencySerializer(target_currency, many=True)
        response = {
            'source_currency': source_serializer.data,
            'target_currency': target_serializer.data
        }
        return Response(response)

    @staticmethod
    def post(request):
        r_post = request.POST

        current_currency = r_post.get('currentCurrency')
        target_currency = r_post.get('targetCurrency')
        target_amount = r_post.get('amount', default='1')

        r = requests.post('https://api.exmo.com/v1.1/required_amount', data={
            'pair': f'{target_currency}_{current_currency}',
            'quantity': target_amount
        }).json()

        current_amount = r['amount']
        avg_price = r['avg_price']

        response = {
            'current_currency': current_currency,
            'current_amount': current_amount,
            'target_currency': target_currency,
            'target_amount': target_amount,
            'avg_price': avg_price
        }
        return Response(response)
