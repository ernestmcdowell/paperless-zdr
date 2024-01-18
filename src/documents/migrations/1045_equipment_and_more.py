# Generated by Django 4.2.8 on 2024-01-10 19:01

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("documents", "1044_workflow_workflowaction_workflowtrigger_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="Equipment",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=128, verbose_name="name")),
                (
                    "match",
                    models.CharField(blank=True, max_length=256, verbose_name="match"),
                ),
                (
                    "matching_algorithm",
                    models.PositiveIntegerField(
                        choices=[
                            (0, "None"),
                            (1, "Any word"),
                            (2, "All words"),
                            (3, "Exact match"),
                            (4, "Regular expression"),
                            (5, "Fuzzy word"),
                            (6, "Automatic"),
                        ],
                        default=1,
                        verbose_name="matching algorithm",
                    ),
                ),
                (
                    "is_insensitive",
                    models.BooleanField(default=True, verbose_name="is insensitive"),
                ),
                (
                    "owner",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to=settings.AUTH_USER_MODEL,
                        verbose_name="owner",
                    ),
                ),
            ],
            options={
                "verbose_name": "equipment",
                "verbose_name_plural": "equipments",
                "ordering": ("name",),
                "abstract": False,
            },
        ),
        migrations.AddConstraint(
            model_name="equipment",
            constraint=models.UniqueConstraint(
                fields=("name", "owner"), name="documents_equipment_unique_name_owner"
            ),
        ),
        migrations.AddConstraint(
            model_name="equipment",
            constraint=models.UniqueConstraint(
                condition=models.Q(("owner__isnull", True)),
                fields=("name",),
                name="documents_equipment_name_uniq",
            ),
        ),
    ]