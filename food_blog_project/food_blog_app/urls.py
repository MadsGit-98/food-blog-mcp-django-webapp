from django.urls import path
from django.urls import path, reverse_lazy
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path('', view=views.homeView, name="home"),
    path('/login', view=views.loginView, name="login"),
    path('/register', view=views.registerView, name="register"),
    path('/feed', view=views.feedView, name="feed"),
    path('/blogger_dashboard', view=views.bloggerDashboardView, name="dashboard"),
    path('post_view/', view=views.postviewView, name="post_view"),
    path('user_profile/', view=views.userProfileView, name="user_profile"),
    path('logout/', auth_views.LogoutView.as_view(next_page=reverse_lazy('home')), name='logout'),
]