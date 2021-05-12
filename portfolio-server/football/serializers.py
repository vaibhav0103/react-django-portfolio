from rest_framework import serializers
from .models import Football

class FootballSerializer(serializers.ModelSerializer):
    class Meta:
        model   = Football
        fields  = ('matchdate', 'home', 'away', 'matchid', 'status')