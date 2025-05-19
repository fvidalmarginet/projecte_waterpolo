from django.shortcuts import render
from rest_framework import generics
from .models import Match
from .serializer import MatchSerializer

# Create your views here.
class MatchListCreateAPIView(generics.ListCreateAPIView):
    queryset = Match.objects.all()
    serializer_class = MatchSerializer
