from datetime import datetime, timedelta
from django.http.response import HttpResponse


def hello(request):
    return HttpResponse("<h1>Hello</h1>")


def about(request):
    return HttpResponse("<h1>About</h1>")


def hours_ahead(request, hour):
    now = datetime.now() + timedelta(hours=int(hour))
    return HttpResponse(now)
