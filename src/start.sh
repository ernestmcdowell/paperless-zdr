python manage.py runserver & \
python manage.py document_consumer & \
celery -- app paperless worker -L DEBUG
