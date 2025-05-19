from django.urls import path
from .views import MatchListCreateAPIView

urlpatterns = [
    path('matches/',MatchListCreateAPIView.as_view(),name='match-list'),
]