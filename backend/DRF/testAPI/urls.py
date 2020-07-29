from django.urls import path, include
from django.views.decorators.csrf import csrf_exempt

from .views import rate, RoutingView

source_amount = 1

urlpatterns = [
    path('api/exchange', rate),
    path('api/test', csrf_exempt(RoutingView.as_view())),
]