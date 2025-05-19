from django.urls import path
from .views import MatchListCreateAPIView, MatchRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('matches/',MatchListCreateAPIView.as_view(),name='match-list'),
    path('matches/<int:pk>/',MatchRetrieveUpdateDestroyAPIView.as_view(),name='match-detail'),
]