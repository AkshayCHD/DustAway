from rest_framework import routers, serializers, viewsets
from .models import *

class ApiSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = api
        fields = '__all__'