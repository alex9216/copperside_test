1. git clone ...
2. cd copperside_test
3. sudo chown -R www-data:www-data www
5. docker compose up
6. After build has finished open url http://localhost:20101/restore.php and restore database with this database settings:
  - host - mysql
  - database - bitrix
  - username - root
  - password - 123456
