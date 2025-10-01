from django.urls import path
from . import views

urlpatterns = [
    path('', view=views.homeView, name="home"),
    path('/login', view=views.loginView, name="login"),
    path('/register', view=views.registerView, name="register"),
]