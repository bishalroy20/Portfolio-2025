#### All necessary links

---Font Awesome cdn link---


        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

---Font Awesome for brands---


        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/brands.min.css" integrity="sha512-WxpJXPm/Is1a/dzEdhdaoajpgizHQimaLGL/QqUIAjIihlQqlPQb1V9vkGs9+VzXD7rgI6O+UsSKl4u5K36Ydw==" crossorigin="anonymous" referrerpolicy="no-referrer" />


---Tailwind css cdn link---


         <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        


---DaisyUI---


        <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />


---Bootstrap cdn link---


        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">




------------------------------------------------------------------------------------




Django importants links or text



---django install---

        pip install django
  


---show the version---

        django-admin --version



---creating a project---

        django-admin startproject project_name



---creating an app---

        django-admin startapp app_name



---For running the project---

        py manage.py runserver




---When we create a new app we have to write it on settings.py

        'app_name',




---when we create a template folder for store html and some more file than we write it on settings.py [if we create templates folder into an app than no need to write] .


        DIRS = ['templates']

---satic files---


        STATIC_URL = 'static/'
        STATICFILES_DIRS = [
            BASE_DIR/'static',
        ]



and write on top of html file
        {% load static %}



---direct files---



---Form validation---


        {% csrf token %}




---Crispy bootstrap5 ---

        pip install crispy-bootstrap5




---Then we write on settings.py---

        installed-Apps = (
            ..............,
            "crispy_forms",
            "crispy_bootstrap5",
        )
        CRISPY_ALLOWED_TEMPLATE_PACKS = "bootstrap5"
        CRISPY_TEMPLATE_PACK = "bootstrap"


