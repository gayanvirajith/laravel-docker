<?php

  $connected = false;

  $db_host = getenv('DB_HOST');
  $db_port = getenv('DB_PORT');
  $db_database = getenv('DB_DATABASE');
  $db_username = getenv('DB_USERNAME');
  $db_password = getenv('DB_PASSWORD');

  while(!$connected) {
    try {
      $dsn = "mysql:host=$db_host:$db_port;dbname=$db_database";
      echo "DSN = $dsn\n";

      $db = new pdo($dsn, $db_username, $db_password,
            array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)
        );
        $connected = true;
    }
    catch(PDOException $ex){
        error_log("Could not connect to MySQL");
        error_log($ex->getMessage());
        error_log("Waiting for MySQL Connection.");
        sleep(5);
    }
}

