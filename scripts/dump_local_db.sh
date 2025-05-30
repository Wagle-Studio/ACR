#!/bin/bash

# === Configuration locale ===
CONTAINER_NAME="xxxxxx"
DB_NAME="xxxxxx"
DB_USER="xxxxxx"
DUMP_FILE="xxxxxx"
LOCAL_PATH="./$DUMP_FILE"

echo "🧹 Suppression de l'ancien dump"
rm "$LOCAL_PATH"

echo "📦 Création du dump compressé avec --no-owner dans le conteneur $CONTAINER_NAME..."

docker exec -u "$DB_USER" "$CONTAINER_NAME" \
    pg_dump -U "$DB_USER" -d "$DB_NAME" -F c --no-owner -f "/tmp/$DUMP_FILE"

echo "📁 Récupération du dump sur la machine hôte..."
docker cp "$CONTAINER_NAME:/tmp/$DUMP_FILE" "$LOCAL_PATH"

echo "🧹 Suppression du fichier temporaire dans le conteneur..."
docker exec "$CONTAINER_NAME" rm "/tmp/$DUMP_FILE"

echo "✅ Dump terminé : $LOCAL_PATH"
