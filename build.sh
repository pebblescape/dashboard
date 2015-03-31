#!/bin/bash

set -e
set -x

ember build --environment="production" -o ./build
cp build/index.html build/index.$(git rev-parse --short HEAD).html
