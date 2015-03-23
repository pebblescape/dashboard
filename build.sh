#!/bin/bash

eval `ssh-agent -s`
chmod 600 deploy.pem
ssh-add deploy.pem

git config user.email "travis@rang.ee"
git config user.name "Travis CI"

git remote rm origin || exit
git remote add origin https://github.com/pebblescape/dashboard.git || exit
git fetch origin build:origin/build || exit
git checkout -t -b build origin/build || exit
git rebase master || exit

ember build --environment="production" -o ./build

git add --all ./build
git commit -m "Build $TRAVIS_COMMIT"
git push -u origin build
