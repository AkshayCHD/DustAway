from django.db import models

# Create your models here.
class api(models.Model):
    name = models.CharField(max_length = 100)
    score = models.IntegerField(default = 0)
    region = models.CharField(max_length = 100, default = 'N/A')

    def __str__(self):
        return self.name