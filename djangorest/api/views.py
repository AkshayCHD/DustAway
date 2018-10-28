from django.shortcuts import render
from rest_framework import routers, serializers, viewsets
from .serializers import *
from rest_framework.request import Request
from .models import *
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
# Create your views here.

class ApiViewSet(viewsets.ModelViewSet):
    queryset = api.objects.all().order_by('-score')
    serializer_class = ApiSerializer

@csrf_exempt
def ApiUpdate(request, pk, score):
    score = int(score)
    try:
        user = api.objects.get(pk = pk)
    except api.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        user.score += score
        user.save()
        serializer_context = {
            'request': request,
        }
        serializer = ApiSerializer(user, context=serializer_context)
        return JsonResponse(serializer.data)

@csrf_exempt
def ResetScore(request, pk):
    try:
        user = api.objects.get(pk = pk)
    except api.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        user.score = 0
        user.save()
        serializer_context = {
            'request': request,
        }
        serializer = ApiSerializer(user, context=serializer_context)
        return JsonResponse(serializer.data)
