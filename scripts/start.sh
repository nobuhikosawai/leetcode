#!/bin/zsh

if [ -z $1 ]; then
  echo 'usage: ./start.sh <name>'
fi

dir="$(dirname $0)"/../answers/$1
mkdir $dir
touch $dir/index.ts
touch $dir/index.test.ts

