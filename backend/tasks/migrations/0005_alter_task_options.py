# Generated by Django 5.1.5 on 2025-02-08 05:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0004_alter_task_notes'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='task',
            options={'ordering': ['is_deleted', 'is_completed', 'title']},
        ),
    ]
