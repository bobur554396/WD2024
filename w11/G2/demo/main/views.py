from django.http.response import HttpResponse
from datetime import datetime, timedelta


def hello(request):
    return HttpResponse("<h1>hello</h1>")


def about(request):
    return HttpResponse("<h1>about</h1>")


def hours_ahead(request, hour):
    new_time = datetime.now() + timedelta(hours=int(hour))
    return HttpResponse(new_time)
