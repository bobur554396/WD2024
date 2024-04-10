from datetime import datetime, timedelta

from django.http.response import HttpResponse


def hello(request):
    return HttpResponse("<h1>hello</h1>")


def about(reqeust):
    return HttpResponse("<h1>about</h1>")


def hours_ahead(request, hour):
    new_time = datetime.now() + timedelta(hours=int(hour))
    return HttpResponse(new_time)

