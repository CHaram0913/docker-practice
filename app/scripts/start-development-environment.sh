wait_for_development_database() {
  echo "[+] Waiting for development database to start."
  /wait-for-it.sh $DB_HOST_DEVELOPMENT:$DB_PORT_DEVELOPMENT
}

# wait_for_test_database() {
#   echo "[+] Waiting for test database to start."
#   /wait-for-it.sh $DB_HOST:$DB_PORT
# }

wait_for_development_redis() {
  echo "[+] Waiting for development redis to start."
  /wait-for-it.sh $REDIS_HOST_DEVELOPMENT:$REDIS_PORT_DEVELOPMENT
}

migrate_development_database() {
  echo "[+] Migrating development database."
  # yarn migrate
}

migrate_test_database() {
  echo "[+] Migrating test database."
  # NODE_ENV=test yarn migrate
}

seed_development_database() {
  echo "[+] Seeding development database."
  # yarn seed
}

start_development_server() {
  echo "[+] Starting development server."
  yarn start:dev
}

echo "[!] Starting development envrionment set up."

DB_HOST_DEVELOPMENT=$1
DB_PORT_DEVELOPMENT=$2
REDIS_HOST_DEVELOPMENT=$3
REDIS_PORT_DEVELOPMENT=$4

wait_for_development_database
wait_for_development_redis
migrate_development_database
migrate_test_database
seed_development_database
start_development_server

echo "[!] Happy coding!"

exit 0
