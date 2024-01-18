# Generated by Django 4.2.8 on 2024-01-10 20:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("documents", "1045_equipment_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="document",
            name="equipment",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="documents",
                to="documents.equipment",
                verbose_name="equipment",
            ),
        ),
        migrations.AddField(
            model_name="workflowaction",
            name="assign_equipment",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to="documents.equipment",
                verbose_name="assign this equipment",
            ),
        ),
    ]
