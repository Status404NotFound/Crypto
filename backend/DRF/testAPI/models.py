from django.db import models
import requests


class SourceCurrency(models.Model):
    name = models.CharField(verbose_name='Name', max_length=20)
    tag_name = models.CharField(verbose_name='Tag_Name', max_length=10)
    min_amount = models.FloatField(verbose_name='Min_Amount')
    max_amount = models.FloatField(verbose_name='Max_Amount')
    CURRENCY_TYPE = (
        (1, 'crypto'),
        (2, 'bank'),
        (3, 'payment_system'),
    )
    enable = models.BooleanField(default=False)
    type = models.IntegerField(choices=CURRENCY_TYPE)

    def __str__(self):
        return f'{self.name} {self.tag_name}'


class TargetCurrency(models.Model):
    name = models.CharField(verbose_name='Name', max_length=20)
    tag_name = models.CharField(verbose_name='Tag_Name', max_length=10)
    min_amount = models.FloatField(verbose_name='Min_Amount')
    max_amount = models.FloatField(verbose_name='Max_Amount')
    CURRENCY_TYPE = (
        (1, 'crypto'),
        (2, 'bank'),
        (3, 'payment_system'),
    )
    enable = models.BooleanField(default=False)
    type = models.IntegerField(choices=CURRENCY_TYPE)

    def __str__(self):
        return f'{self.name} {self.tag_name}'


class Deal(models.Model):
    source_currency = models.ForeignKey(SourceCurrency, verbose_name='Give', on_delete=models.CASCADE)
    target_currency = models.ForeignKey(TargetCurrency, verbose_name='Get', on_delete=models.CASCADE)
    amount = models.FloatField(verbose_name='Give_Amount')
    rate = models.FloatField(verbose_name='Rate')
    fee = models.FloatField(verbose_name='Exchange_Fee')
