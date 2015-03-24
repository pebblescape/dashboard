#!/bin/bash

set -e
set -x

eval `ssh-agent -s`
chmod 600 .travis/deploy.pem
ssh-add .travis/deploy.pem

git config user.email "travis@rang.ee"
git config user.name "Travis CI"

git remote add github git@github.com:pebblescape/dashboard.git
git fetch github
git checkout -t -b build github/build
git merge master --no-edit

ember build --environment="production" -o ./build

git add --all ./build
git commit -m "Build $TRAVIS_COMMIT"
git push github build
