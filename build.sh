#!/bin/bash
set -x
set -e

eval `ssh-agent -s`
chmod 600 deploy.pem
ssh-add deploy.pem

git config user.email "travis@rang.ee"
git config user.name "Travis CI"

git remote add github git@github.com:pebblescape/dashboard.git || exit
git fetch github || exit
git checkout -t -b build github/build || exit
git merge github/master --no-edit || exit

ember build --environment="production" -o ./build

git add --all ./build
git commit -m "Build $TRAVIS_COMMIT"
git push -u github build
