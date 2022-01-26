from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser, PermissionsMixin
)
from django.contrib.auth.validators import UnicodeUsernameValidator
import uuid as uuid_lib

# Create your models here.
class UserManager(BaseUserManager):
    def create_user(self, userId, password=None):
        user = self.model(
            username=userId,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password=None):
        user = self.model(
            username=username,
        )
        user.set_password(password)
        user.is_staff = True
        user.is_active = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class SketchUser(AbstractBaseUser, PermissionsMixin):
    uuid = models.UUIDField(
        default=uuid_lib.uuid4,
        primary_key=True,
        editable=False
    )
    username_validators = UnicodeUsernameValidator()
    username = models.CharField(
        max_length=255,
        unique=True,
        validators = [username_validators],
        error_messages={
            "unique": "このユーザー名は既に使用されています。",
        },
    )
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'username'

    class Meta:
        db_table = 'users'

    def __str__(self):
        return self.username


class Work(models.Model):
    uuid = models.UUIDField(
        default=uuid_lib.uuid4,
        primary_key=True,
        editable=False
    )
    name = models.CharField(max_length=100)
    work = models.JSONField(blank=True, null=True)
    user = models.ForeignKey(SketchUser, on_delete=models.CASCADE)
 
    def __str__(self):
        return self.name + ' ' + self.user.name