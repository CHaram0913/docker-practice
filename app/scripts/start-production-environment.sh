wait_for_production_database() {
  echo "[+] Waiting for production database to start."
  /wait-for-it.sh $DB_HOST_PRODUCTION:$DB_PORT_PRODUCTION
}

wait_for_production_redis() {
  echo "[+] Waiting for production redis to start."
  /wait-for-it.sh $REDIS_HOST_PRODUCTION:$REDIS_PORT_PRODUCTION
}

migrate_production_database() {
  echo "[+] Migrating production database."
  # yarn migrates
}

start_production_server() {
  echo "[+] Starting production server."
  # pm2 ~
}

echo "[!] Starting production envrionment set up."

DB_HOST_PRODUCTION=$1
DB_PORT_PRODUCTION=$2
REDIS_HOST_PRODUCTION=$3
REDIS_PORT_PRODUCTION=$4

wait_for_production_database
wait_for_production_redis
migrate_production_database
start_production_server

echo "[!] Happy coding!"

exit 0
