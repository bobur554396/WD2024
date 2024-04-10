from django.urls import path, re_path

from main.views import hello, about, hours_ahead

urlpatterns = [
    path('hi/', hello),
    path('about/', about),
    re_path(r'^time/plus/(\d{1,2})/$', hours_ahead)
]
