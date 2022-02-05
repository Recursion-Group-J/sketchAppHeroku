"""
Django settings for server project.

Generated by 'django-admin startproject' using Django 4.0.1.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.0/ref/settings/
"""
import os
from datetime import timedelta

from pathlib import Path
from os.path import join, dirname
from dotenv import load_dotenv

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
# BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-$^6=8o)ofj4=&mz)lv8^8)l%%&qd%!lf+a#uu^w+267ypj-z9j'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS = [
    'djangoSketch.apps.DjangosketchConfig',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'djoser',
    'api',
    'rest_framework.authtoken',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    
]

ROOT_URLCONF = 'server.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS':[os.path.join(BASE_DIR, 'templates')],
        # 'DIRS':[os.path.join(BASE_DIR, 'client/dist')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'server.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

#  開発環境
dotenv_path = join(dirname(__file__), '../.env')
load_dotenv(dotenv_path)
DB_NAME = os.environ.get("DB_NAME")
DB_PWD = os.environ.get("DB_PWD")
DB_USER = os.environ.get("DB_USER")
DB_HOST = os.environ.get("DB_HOST")
DB_PORT = os.environ.get("DB_PORT")

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': DB_NAME,
        'USER': DB_USER,
        'PASSWORD': DB_PWD,
        'HOST': DB_HOST,
        'PORT': DB_PORT,
        'OPTIONS': {
            'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",
        },
    }
}

# 本番環境
# import os
# import sys
# import urllib.parse

# # Register database schemes in URLs.
# urllib.parse.uses_netloc.append('mysql')

# try:

#     # Check to make sure DATABASES is set in settings.py file.
#     # If not default to {}

#     if 'DATABASES' not in locals():
#         DATABASES = {}

#     if 'DATABASE_URL' in os.environ:
#         url = urllib.parse.urlparse(os.environ['DATABASE_URL'])

#         # Ensure default database exists.
#         DATABASES['default'] = DATABASES.get('default', {})

#         # Update with environment configuration.
#         DATABASES['default'].update({
#             'NAME': url.path[1:],
#             'USER': url.username,
#             'PASSWORD': url.password,
#             'HOST': url.hostname,
#             'PORT': url.port,
#             'OPTIONS': {
#                 'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",
#             },
#         })


#         if url.scheme == 'mysql':
#             DATABASES['default']['ENGINE'] = 'django.db.backends.mysql'
# except Exception:
#     print('Unexpected error:', sys.exc_info())




# Password validation
# https://docs.djangoproject.com/en/4.0/ref/settings/#auth-password-validators

# AUTH_USER_MODEL = 'djangoSketch.SketchUser'

# AUTH_PASSWORD_VALIDATORS = [
#     {
#         'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
#     },
#     {
#         'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
#     },
#     {
#         'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
#     },
#     {
#         'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
#     },
# ]


# Internationalization
# https://docs.djangoproject.com/en/4.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.0/howto/static-files/

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATIC_URL = 'static/'
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]
# STATICFILES_DIRS = (
#     os.path.join(BASE_DIR, 'client/dist/static'),
# )
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# Default primary key field type
# https://docs.djangoproject.com/en/4.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

#Authentication
LOGIN_REDIRECT_URL = '/'    #追加
LOGOUT_REDIRECT_URO = 'rest_framework.login' #追加
REST_FRAMEWORK = {
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read-only access for unauthenticated users.
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',#後で下に戻す
        # 'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': (
         'rest_framework_simplejwt.authentication.JWTAuthentication',
        # 'rest_framework.authentication.JSONWebTokenAuthentication',
        # 'rest_framework.authentication.SessionAuthentication',
        # 'rest_framework.authentication.BasicAuthentication',
    ),
}

SIMPLE_JWT = {
    'AUTH_HEADER_TYPES':('JWT',),
    'ACCESS_TOKEN_LIFETIME':timedelta(minutes=30)
}


# JWT_AUTH = {
#     'JWT_VERIFY': True,
#     'JWT_VERIFY_EXPIRATION': True,
#     'JWT_LEEWAY': 0,
#     'JWT_EXPIRATION_DELTA': datetime.timedelta(seconds=86400),
#     'JWT_ALLOW_REFRESH': True,
#     'JWT_REFRESH_EXPIRATION_DELTA': datetime.timedelta(days=7),
# }

CORS_ORIGIN_WHITELIST = (
    'http://localhost:8080',
)

import django_heroku
django_heroku.settings(locals())
# del DATABASES['default']['OPTIONS']['sslmode']