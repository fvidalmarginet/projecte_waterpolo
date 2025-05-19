from django.db import models

# Create your models here.
class Match(models.Model):
    date = models.DateField()
    time = models.TimeField()
    team_home = models.CharField(max_length=100)
    team_away = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    score_home = models.IntegerField(default=0)
    score_away = models.IntegerField(default=0)

def __str__(self):
    return f"{self.team_home} vs {self.team_away} - {self.date}"

