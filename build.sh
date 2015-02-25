#!/bin/bash

docker rm -f dashboard-build 2&> /dev/null
git archive master | docker run -i -a stdin --name dashboard-build -e CURL_TIMEOUT=600 -e BUILDPACK_URL=https://github.com/tonycoco/heroku-buildpack-ember-cli.git pebbles/pebblerunner build > /dev/null
docker logs -f dashboard-build
docker commit dashboard-build pebbles/dashboard > /dev/null
docker rm dashboard-build 2&> /dev/null
