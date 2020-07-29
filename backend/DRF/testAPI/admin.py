from django.contrib import admin
from .models import SourceCurrency, TargetCurrency, Deal

admin.site.register(SourceCurrency)
admin.site.register(TargetCurrency)
admin.site.register(Deal)
