# Generated by Django 3.0.8 on 2020-07-27 13:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('testAPI', '0002_auto_20200724_1824'),
    ]

    operations = [
        migrations.RenameField(
            model_name='targetcurrency',
            old_name='man_amount',
            new_name='max_amount',
        ),
    ]
