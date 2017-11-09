#!/usr/bin/env bash

cd $APP_PATH
export CWD=$(pwd)

npm update
pm2 start app.js --watch --no-daemon
