# Generated by Django 3.2 on 2021-05-11 11:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('football', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='football',
            name='matchid',
            field=models.CharField(max_length=20, unique=True),
        ),
    ]
