#!/bin/bash

set -e
set -o pipefail

aws s3 sync s3://group12-rent-me-up-jar-files /home/ubuntu/artifacts | grep "download"

cd /home/ubuntu/artifacts

JAR_FILE=$(ls | grep -E ".+\.jar$")
if [ -z "$JAR_FILE" ]
then
      echo "No se pudo encontrar el archivo Jar"
      exit 1
fi


PID_JAVA=$(ps -aux | { grep -E "[j]ava -jar booking-dh.+\.jar" || true; }  | awk '{print $2}')

if [ -z "$PID_JAVA" ]
then
  echo "Java no esta corriendo."
else
  echo "Matando el proceso actual"
  kill -9 "$PID_JAVA"
fi

echo "Corriendo aplicacion $JAR_FILE"

export MYSQL_HOST=
export MYSQL_PORT=
export MYSQL_DB=
export MYSQL_USERNAME=
export MYSQL_PASSWORD=

nohup java -jar "$JAR_FILE" >  application.log &
