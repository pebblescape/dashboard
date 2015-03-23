#!/bin/bash

eval `ssh-agent -s`
chmod 600 deploy.pem
ssh-add deploy.pem

export GIT_COMMITTER_EMAIL="travis@rang.ee"
export GIT_COMMITTER_NAME="Travis CI"

git checkout origin/build || exit
git merge "$TRAVIS_COMMIT" || exit
git rebase master

ember build --environment="production" -o ./build

git add --all ./build
git commit -m "Build $TRAVIS_COMMIT"
git push origin build
