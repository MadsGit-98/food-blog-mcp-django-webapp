from django.shortcuts import render

# Create your views here.
def homeView(request):
    return render(request, template_name='food_blog_app/home.html')

def loginView(request): 
    return render(request, template_name='food_blog_app/login.html')

def registerView(request): 
    return render(request, template_name='food_blog_app/register.html')