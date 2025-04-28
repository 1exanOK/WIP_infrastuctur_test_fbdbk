#!/bin/sh

until pg_isready -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -t 1; do
  echo "Waiting for PostgreSQL to be ready..."
  sleep 2
done

exec "$@"
