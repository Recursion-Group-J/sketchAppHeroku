# Generated by Django 4.0.1 on 2022-02-05 14:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('djangoSketch', '0004_remove_work_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='sketchuser',
            old_name='uuid',
            new_name='id',
        ),
    ]