#!/bin/bash

set -e
set -x

ref=$(git rev-parse --short HEAD)
ember build --environment="production" -o ./build
sed -i '' "s/refplaceholder/$ref/g" ./build/index.html
cp build/index.html build/index.$ref.html
