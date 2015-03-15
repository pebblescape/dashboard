#!/bin/bash

mkdir -p ./build
ember build --environment="production" -o ./tmpbuild
cp -r ./tmpbuild/* ./build/
rm -r ./tmpbuild
cp ./build/index.html ./build/`git rev-parse --short HEAD`.html
