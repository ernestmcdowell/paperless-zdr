# Generated by Django 3.1.5 on 2021-01-06 01:38

from django.db import migrations
from django.db import models


class Migration(migrations.Migration):
    dependencies = [
        ("paperless_mail", "0006_auto_20210101_2340"),
    ]

    operations = [
        migrations.AddField(
            model_name="mailrule",
            name="attachment_type",
            field=models.PositiveIntegerField(
                choices=[
                    (1, "Only process attachments."),
                    (2, "Process all files, including 'inline' attachments."),
                ],
                default=1,
                help_text="Inline attachments include embedded images, so it's best to combine this option with a filename filter.",
                verbose_name="attachment type",
            ),
        ),
        migrations.AddField(
            model_name="mailrule",
            name="filter_attachment_filename",
            field=models.CharField(
                blank=True,
                help_text="Only consume documents which entirely match this filename if specified. Wildcards such as *.pdf or *invoice* are allowed. Case insensitive.",
                max_length=256,
                null=True,
                verbose_name="filter attachment filename",
            ),
        ),
    ]
