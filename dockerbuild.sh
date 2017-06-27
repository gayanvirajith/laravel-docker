#!/bin/sh
docker kill $(docker ps -q)
cd src;
rm -rf composer.lock vendor/
composer install
cd ../
docker-compose rm --force
docker build . -t templaravel 
docker-compose up -d